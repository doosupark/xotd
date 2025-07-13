import React from 'react';
import type { Metadata } from 'next';
import { mbtiTravelPersona } from '@/lib/mbtiNameData';
import ResultPageContent from './ResultPageContent';
import maleNames from '../../../public/data/male_names.json';
import femaleNames from '../../../public/data/female_names.json';

// ISR 캐싱 설정 - 1시간마다 재검증
export const revalidate = 3600;

type ShortResultData = {
  mbti: string;
  gender: 'male' | 'female';
  index: number;
};

type FullResultData = {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
  imageUrl: string;
  persona: {
    nickname: string;
    slogan: string;
    description: string;
  };
};

type NameData = { [mbti: string]: { hiragana: string; katakana: string; korean: string }[] };

// 헬퍼 함수: ID를 파싱하여 축약된 결과 데이터 반환
const parseShortId = (id: string): ShortResultData | null => {
  try {
    // ID 형식: {mbti}-{gender첫글자}-{index} (예: enfp-m-21)
    const parts = id.split('-');
    
    if (parts.length !== 3) {
      console.error('Invalid ID format. Expected: mbti-gender-index');
      return null;
    }
    
    const [mbti, genderCode, indexStr] = parts;
    
    // MBTI 유효성 검사
    const validMbtis = ['enfj', 'enfp', 'entj', 'entp', 'esfj', 'esfp', 'estj', 'estp', 
                       'infj', 'infp', 'intj', 'intp', 'isfj', 'isfp', 'istj', 'istp'];
    if (!validMbtis.includes(mbti.toLowerCase())) {
      console.error(`Invalid MBTI: ${mbti}`);
      return null;
    }
    
    // 성별 코드 변환
    const gender = genderCode === 'm' ? 'male' : genderCode === 'f' ? 'female' : null;
    if (!gender) {
      console.error(`Invalid gender code: ${genderCode}`);
      return null;
    }
    
    // 인덱스 파싱 (1-30 범위)
    const index = parseInt(indexStr, 10);
    if (isNaN(index) || index < 1 || index > 30) {
      console.error(`Invalid index: ${indexStr}. Must be between 1-30`);
      return null;
    }
    
    return {
      mbti: mbti.toUpperCase(),
      gender,
      index
    };
  } catch (error) {
    console.error('Failed to parse short ID:', error);
    return null;
  }
};

// 축약된 데이터로부터 전체 결과 데이터 복원
const restoreFullResultData = (shortData: ShortResultData): FullResultData | null => {
  try {
    const { mbti, gender, index } = shortData;
    
    // 이름 데이터 가져오기
    const male = maleNames as NameData;
    const female = femaleNames as NameData;
    const names = gender === "male" ? male[mbti] : female[mbti];
    
    // 배열 인덱스는 0부터 시작하므로 index - 1 사용
    const arrayIndex = index - 1;
    if (!names || !Array.isArray(names) || names.length === 0 || !names[arrayIndex]) {
      console.error(`No names found for MBTI: ${mbti}, gender: ${gender}, index: ${index} (arrayIndex: ${arrayIndex})`);
      return null;
    }
    
    const nameData = names[arrayIndex];
    
    // MBTI 페르소나 데이터 가져오기
    const personaData = mbtiTravelPersona.mbti_types.find(
      (item) => item.type.toUpperCase() === mbti.toUpperCase()
    );
    
    if (!personaData) {
      console.error(`No persona data found for MBTI: ${mbti}`);
      return null;
    }
    
    return {
      mbti,
      gender,
      hiragana: nameData.hiragana,
      katakana: nameData.katakana,
      korean: nameData.korean,
      index,
      imageUrl: `/images/${gender}/${mbti.toLowerCase()}.webp`,
      persona: {
        nickname: personaData.nickname,
        slogan: personaData.slogan,
        description: personaData.genders[gender].description,
      }
    };
  } catch (error) {
    console.error('Failed to restore full result data:', error);
    return null;
  }
};

// 동적 OG 메타데이터 생성
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const shortData = parseShortId(id);

  if (!shortData) {
    return {
      title: "결과를 찾을 수 없습니다",
      description: "잘못된 URL이거나 만료된 결과입니다.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { mbti, gender, index } = shortData;
  
  // 실제 이름 데이터 조회
  const fullResult = restoreFullResultData(shortData);
  let nameResult = '';
  
  if (fullResult) {
    nameResult = `${fullResult.korean}(${fullResult.hiragana})`;
  } else {
    nameResult = `${mbti} 타입의 특별한 일본 이름`;
  }
  
  // 절대 URL로 OG 이미지 설정
  const ogImageUrl = `https://xotd.net/images/${gender}/${mbti.toLowerCase()}.webp`;
  const pageUrl = `https://xotd.net/result/${id}`;

  // 색인 제어: 인덱스 1-5는 색인 허용, 6-30은 색인 제한
  const shouldIndex = index <= 5;

  return {
    title: `${mbti} 타입의 일본 이름은? - MBTI 일본 이름`,
    description: `${nameResult} 입니다!`,
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: shouldIndex,
      follow: true,
      googleBot: {
        index: shouldIndex,
        follow: true,
      },
    },
    openGraph: {
      title: `${mbti} 타입의 일본 이름은?`,
      description: `${nameResult} 입니다!`,
      images: [{
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${mbti} MBTI 타입 이미지`,
        type: 'image/webp',
      }],
      url: pageUrl,
      type: 'website',
      siteName: 'XOTD - MBTI 일본 이름 생성기',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${mbti} 타입의 일본 이름은?`,
      description: `${nameResult} 입니다!`,
      images: [ogImageUrl],
    },
  };
}

// 서버 컴포넌트에서 데이터 페칭 후 클라이언트 컴포넌트에 전달
const ResultPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const shortData = parseShortId(id);

  if (!shortData) {
    return <div className="text-center p-8">잘못된 결과 URL입니다.</div>;
  }

  const fullResult = restoreFullResultData(shortData);

  if (!fullResult) {
    return <div className="text-center p-8">결과 데이터를 복원할 수 없습니다.</div>;
  }
  
  // 실제 결과 페이지를 표시 (리다이렉트 제거)
  return (
    <div className="flex flex-col items-center">
      {/* JSON-LD for BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "홈",
                "item": "https://xotd.net"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "MBTI 일본 이름 생성기",
                "item": "https://xotd.net"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": `${fullResult.mbti} 타입 결과`,
                "item": `https://xotd.net/result/${id}`
              }
            ]
          })
        }}
      />

      {/* JSON-LD for Product (Generated Name) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `${fullResult.mbti} 타입의 일본 이름: ${fullResult.korean}`,
            "description": `${fullResult.mbti} 성격 유형에 맞는 일본식 이름 ${fullResult.korean}(${fullResult.hiragana})입니다. ${fullResult.persona.description}`,
            "url": `https://xotd.net/result/${id}`,
            "image": `https://xotd.net${fullResult.imageUrl}`,
            "brand": {
              "@type": "Brand",
              "name": "XOTD",
              "url": "https://xotd.net"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "XOTD",
              "url": "https://xotd.net"
            },
            "category": "Name Generator",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "KRW",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "seller": {
                "@type": "Organization",
                "name": "XOTD"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1000",
              "bestRating": "5",
              "worstRating": "1"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "MBTI 타입",
                "value": fullResult.mbti.toUpperCase()
              },
              {
                "@type": "PropertyValue",
                "name": "성별",
                "value": fullResult.gender === 'male' ? '남성' : '여성'
              },
              {
                "@type": "PropertyValue",
                "name": "히라가나",
                "value": fullResult.hiragana
              },
              {
                "@type": "PropertyValue",
                "name": "가타카나",
                "value": fullResult.katakana
              },
              {
                "@type": "PropertyValue",
                "name": "페르소나",
                "value": fullResult.persona.nickname
              },
              {
                "@type": "PropertyValue",
                "name": "슬로건",
                "value": fullResult.persona.slogan
              },
              {
                "@type": "PropertyValue",
                "name": "인덱스",
                "value": fullResult.index.toString()
              }
            ],
            "isRelatedTo": {
              "@type": "WebApplication",
              "name": "MBTI 일본 이름 생성기",
              "url": "https://xotd.net"
            }
          })
        }}
      />

      <ResultPageContent fullResult={fullResult} />
    </div>
  );
};

// 정적 경로 생성 - 960개 페이지를 빌드 시점에 미리 생성
export async function generateStaticParams() {
  const mbtiTypes = [
    'enfj', 'enfp', 'entj', 'entp',
    'esfj', 'esfp', 'estj', 'estp', 
    'infj', 'infp', 'intj', 'intp',
    'isfj', 'isfp', 'istj', 'istp'
  ];
  
  const genders = ['m', 'f'];
  const nameIndices = Array.from({ length: 30 }, (_, i) => i + 1); // 1-30
  
  const staticParams = [];
  
  // 16 MBTI × 2 성별 × 30 인덱스 = 960개 조합 생성
  for (const mbti of mbtiTypes) {
    for (const gender of genders) {
      for (const index of nameIndices) {
        staticParams.push({
          id: `${mbti}-${gender}-${index}`
        });
      }
    }
  }
  
  console.log(`Generated ${staticParams.length} static params for result pages`);
  return staticParams;
}

export default ResultPage; 
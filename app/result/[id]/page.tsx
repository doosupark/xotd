import React from 'react';
import type { Metadata } from 'next';
import { mbtiTravelPersona } from '@/lib/mbtiNameData';
import ResultPageContent from './ResultPageContent';
import maleNames from '../../../public/data/male_names.json';
import femaleNames from '../../../public/data/female_names.json';

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
    
    // 인덱스 파싱
    const index = parseInt(indexStr, 10);
    if (isNaN(index) || index < 0) {
      console.error(`Invalid index: ${indexStr}`);
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
    
    if (!names || !Array.isArray(names) || names.length === 0 || !names[index]) {
      console.error(`No names found for MBTI: ${mbti}, gender: ${gender}, index: ${index}`);
      return null;
    }
    
    const nameData = names[index];
    
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
      imageUrl: `/images/${gender}/${mbti.toLowerCase()}.png`,
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

  const { mbti, gender } = shortData;
  
  // 기본 이름으로 폴백 (메타데이터에서는 복잡한 로직 피함)
  const koreanName = `${mbti} 타입 이름`;
  
  // 절대 URL로 OG 이미지 설정
  const ogImageUrl = `https://xotd.net/images/${gender}/${mbti.toLowerCase()}.png`;
  const pageUrl = `https://xotd.net/result/${id}`;

  return {
    title: `${koreanName} - MBTI 일본 이름`,
    description: `당신의 MBTI(${mbti}) 성향에 맞는 일본 이름입니다.`,
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: `${mbti} 타입의 일본 이름`,
      description: `${mbti} 성향에 맞는 특별한 일본 이름을 확인해보세요!`,
      images: [{
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${mbti} MBTI 타입 이미지`,
        type: 'image/png',
      }],
      url: pageUrl,
      type: 'website',
      siteName: 'XOTD - MBTI 일본 이름 생성기',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${mbti} 타입의 일본 이름`,
      description: `${mbti} 성향에 맞는 특별한 일본 이름을 확인해보세요!`,
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
      <ResultPageContent fullResult={fullResult} />
    </div>
  );
};

export default ResultPage; 
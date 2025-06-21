import MBTIPageClient from '../../components/MBTIPageClient';
// import { mbtiTravelPersona } from '../../lib/mbtiNameData';
import { Metadata } from 'next';

type DecodedData = {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
};

// URL 파라미터 디코딩 헬퍼 함수
function decodeParams(encoded: string): DecodedData | null {
  try {
    const padded = encoded.replace(/-/g, '+').replace(/_/g, '/') + '=='.substring(0, (3 * encoded.length) % 4);
    const decodedString = Buffer.from(padded, 'base64').toString('utf-8');
    const data = JSON.parse(decodedString);
    
    // 필수 데이터 검증
    if (!data.m || !data.g || !data.h || !data.k || !data.n || typeof data.i === 'undefined') {
      return null;
    }

    return {
      mbti: data.m,
      gender: data.g,
      hiragana: decodeURIComponent(data.h),
      katakana: decodeURIComponent(data.k),
      korean: decodeURIComponent(data.n),
      index: parseInt(data.i, 10),
    };
  } catch (error) {
    console.error("Failed to decode params:", error);
    return null;
  }
}

// mbtiTravelPersona에서 페르소나 데이터 가져오는 헬퍼 함수
// function getPersona(mbti: string, gender: 'male' | 'female') {
//   const mbtiData = mbtiTravelPersona.mbti_types.find((t: { type: string; }) => t.type === mbti);
//   if (!mbtiData) {
//     return { nickname: '', slogan: '', description: '' };
//   }
//   return {
//     nickname: mbtiData.nickname,
//     slogan: mbtiData.slogan,
//     description: mbtiData.genders[gender].description,
//   };
// }

// 1. 페이지 메타데이터 생성
export async function generateMetadata({ params }: { params: { encoded: string } }): Promise<Metadata> {
  const data = decodeParams(params.encoded);

  if (!data) {
    return {
      title: "MBTI 일본 이름 생성기",
      description: "잘못된 접근입니다. MBTI와 성별을 선택하고 나만의 일본식 이름을 만들어보세요.",
    };
  }

  const { mbti, gender, korean, index, hiragana, katakana } = data;
  const genderText = gender === 'male' ? "남성" : "여성";
  const ogImageUrl = `https://xotd.net/images/og-results/${mbti.toLowerCase()}-${gender}-${index}.webp`;

  return {
    title: `${mbti} ${genderText} 일본 이름 - ${korean} | xotd.net`,
    description: `${mbti} ${genderText}의 일본 이름 ${korean}(${hiragana}, ${katakana})을 확인해보세요.`,
    openGraph: {
      title: `${mbti} 일본 이름 결과`,
      description: `추천된 일본식 이름을 지금 바로 확인해보세요.`,
      url: `https://xotd.net/s/${params.encoded}`,
      siteName: 'XOTD',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${mbti} ${genderText} 일본 이름 - ${korean}`,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${mbti} 일본 이름 결과`,
      description: `${mbti} ${genderText}의 일본 이름 ${korean}(${hiragana}, ${katakana})을 확인해보세요.`,
      images: [ogImageUrl],
    },
  };
}

// 2. 페이지 컴포넌트 렌더링
export default function SharePage({ params }: { params: { encoded: string } }) {
  const decodedData = decodeParams(params.encoded);

  if (!decodedData) {
    // 디코딩 실패 시 기본 페이지 렌더링
    return <MBTIPageClient initialResult={null} />;
  }

  const { mbti, gender, index, hiragana, katakana, korean } = decodedData;
  // const persona = getPersona(mbti, gender);
  const imageUrl = `/images/${gender}/${mbti.toLowerCase()}.png`;

  const initialResult = {
    mbti,
    gender,
    hiragana,
    katakana,
    korean,
    index,
    persona: { nickname: '', slogan: '', description: '' }, // 임시 데이터
    imageUrl,
  };

  return <MBTIPageClient initialResult={initialResult} />;
} 
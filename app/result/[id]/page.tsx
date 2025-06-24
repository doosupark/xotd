import React from 'react';
import type { Metadata } from 'next';
import { createOGImageUrl } from '@/lib/canvas-utils';
import { mbtiTravelPersona } from '@/lib/mbtiNameData';
import ResultPageContent from './ResultPageContent'; // 클라이언트 컴포넌트 임포트

type ResultData = {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
};

// 헬퍼 함수: id를 디코딩하여 결과 데이터 반환
const decodeResultData = (id: string): ResultData | null => {
  try {
    const decodedString = decodeURIComponent(atob(id));
    return JSON.parse(decodedString);
  } catch (error) {
    console.error('Failed to decode result data for metadata:', error);
    return null;
  }
};

// 동적 OG 메타데이터 생성
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const data = decodeResultData(params.id);

  if (!data) {
    return {
      title: "결과를 찾을 수 없습니다",
      description: "잘못된 URL이거나 만료된 결과입니다.",
    };
  }

  const { korean, mbti } = data;
  const ogImageUrl = createOGImageUrl(data);
  const pageUrl = `https://xotd.net/result/${params.id}`;

  return {
    title: `${korean} - MBTI 일본 이름`,
    description: `당신의 MBTI(${mbti}) 성향에 맞는 일본 이름입니다.`,
    openGraph: {
      title: korean,
      description: `${mbti} 타입에게 추천하는 이름`,
      images: [{
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${korean} (${mbti})`,
      }],
      url: pageUrl,
      type: 'website',
      siteName: 'XOTD',
    },
    twitter: {
      card: 'summary_large_image',
      title: korean,
      description: `${mbti} 타입에게 추천하는 이름`,
      images: [ogImageUrl],
    },
  };
}

// 서버 컴포넌트에서 데이터 페칭 후 클라이언트 컴포넌트에 전달
const ResultPage = ({ params }: { params: { id:string } }) => {
  const resultData = decodeResultData(params.id);

  if (!resultData) {
    return <div className="text-center p-8">잘못된 결과 URL입니다.</div>;
  }

  const personaData = mbtiTravelPersona.mbti_types.find(
    (item) => item.type.toUpperCase() === resultData.mbti.toUpperCase()
  );

  if (!personaData) {
    return <div className="text-center p-8">성향 정보를 찾을 수 없습니다.</div>;
  }
  
  const fullResult = {
    ...resultData,
    imageUrl: createOGImageUrl(resultData),
    persona: {
      nickname: personaData.nickname,
      slogan: personaData.slogan,
      description: personaData.genders[resultData.gender].description,
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <ResultPageContent fullResult={fullResult} />
    </div>
  );
};

export default ResultPage; 
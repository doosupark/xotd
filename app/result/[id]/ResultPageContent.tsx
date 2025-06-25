'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MBTIResultCard from '@/app/components/MBTIResultCard';
import { createShortShareUrl } from '@/lib/canvas-utils';

// 서버에서 전달받을 데이터 타입 정의
interface ResultPageContentProps {
  fullResult: {
    mbti: string;
    gender: "male" | "female";
    imageUrl: string;
    hiragana: string;
    katakana: string;
    korean: string;
    index: number;
    persona: {
      nickname: string;
      slogan: string;
      description: string;
    };
  };
  shouldRedirect?: boolean;
}

const ResultPageContent: React.FC<ResultPageContentProps> = ({ fullResult, shouldRedirect = false }) => {
  const router = useRouter();

  // 리다이렉트 로직
  useEffect(() => {
    if (shouldRedirect) {
      // 약간의 지연 후 홈페이지로 리다이렉트 (OG 크롤링 시간 확보)
      const timer = setTimeout(() => {
        router.push('/');
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [shouldRedirect, router]);

  // 리다이렉트 중이면 로딩 표시
  if (shouldRedirect) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>페이지를 이동 중입니다...</p>
        </div>
      </div>
    );
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // UX 개선: 실제 복사 성공 시 피드백을 주는 것이 좋음 (MBTIResultCard 내부에서 처리 중)
    });
  };

  const handleShare = () => {
    const shareUrl = createShortShareUrl(fullResult);
    if (navigator.share) {
      navigator.share({
        title: `${fullResult.korean} - MBTI 일본 이름`,
        text: `내 MBTI(${fullResult.mbti})에 맞는 일본 이름은?`,
        url: shareUrl,
      });
    } else {
      // Fallback: 클립보드에 URL 복사
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert("링크가 복사되었습니다!");
      });
    }
  };

  return (
    <MBTIResultCard 
      result={fullResult} 
      onCopy={(type) => handleCopy(type === 'hiragana' ? fullResult.hiragana : fullResult.katakana)}
      onShare={handleShare}
    />
  );
};

export default ResultPageContent; 
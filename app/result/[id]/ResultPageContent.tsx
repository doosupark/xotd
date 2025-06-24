'use client';

import React from 'react';
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
}

const ResultPageContent: React.FC<ResultPageContentProps> = ({ fullResult }) => {

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
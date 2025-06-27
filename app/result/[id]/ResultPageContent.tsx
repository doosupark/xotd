'use client';

import React from 'react';
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
}

const ResultPageContent: React.FC<ResultPageContentProps> = ({ fullResult }) => {
  const router = useRouter();

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
      }).catch((error) => {
        // 공유가 취소되거나 실패한 경우 fallback
        if (error.name !== 'AbortError') {
          navigator.clipboard.writeText(shareUrl).then(() => {
            alert("링크가 복사되었습니다!");
          });
        }
      });
    } else {
      // Fallback: 클립보드에 URL 복사
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert("링크가 복사되었습니다!");
      });
    }
  };

  return (
    <div className="w-full">
      <MBTIResultCard 
        result={fullResult} 
        onCopy={(type) => handleCopy(type === 'hiragana' ? fullResult.hiragana : fullResult.katakana)}
        onShare={handleShare}
      />
      
      {/* 추가 정보 섹션 */}
      <section className="mt-8 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">더 많은 이름 찾기</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            다른 MBTI 성향의 일본 이름도 궁금하시나요?
          </p>
          <button 
            onClick={() => router.push('/')}
            className="w-full py-2 px-4 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          >
            새로운 이름 생성하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResultPageContent; 
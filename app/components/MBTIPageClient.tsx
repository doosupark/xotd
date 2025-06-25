"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import MBTISelector from "./MBTISelector";
import MBTIResultCard from "./MBTIResultCard";
import { createShortShareUrl } from "../../lib/canvas-utils";

type Gender = "male" | "female";
type ResultData = {
  mbti: string;
  gender: Gender | null;
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

export default function MBTIPageClient() {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [result, setResult] = useState<ResultData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCopy = (type: "hiragana" | "katakana") => {
    console.log(`복사: ${type}`);
  };

  const handleShare = () => {
    if (!result) return;

    // 짧은 공유 URL 생성
    const shareUrl = createShortShareUrl({
      mbti: result.mbti,
      gender: result.gender || 'male',
      hiragana: result.hiragana,
      katakana: result.katakana,
      korean: result.korean,
      index: result.index
    });

    const shareTitle = `${result.mbti} ${result.gender === 'male' ? '남성' : '여성'} 일본 이름 - ${result.korean}`;
    const shareText = `${result.mbti} ${result.gender === 'male' ? '남성' : '여성'}의 일본 이름 ${result.korean}(${result.hiragana}, ${result.katakana})을 확인해보세요!`;

    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
      }).catch((error) => {
        console.log('공유 실패:', error);
        fallbackShare(shareUrl);
      });
    } else {
      fallbackShare(shareUrl);
    }
  };

  const fallbackShare = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      alert("링크가 복사되었습니다! 카카오톡 등에서 붙여넣어 공유하세요.");
    }).catch(() => {
      // 클립보드 API가 지원되지 않는 경우
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert("링크가 복사되었습니다! 카카오톡 등에서 붙여넣어 공유하세요.");
    });
  };

  const handleGenerationComplete = (resultData: ResultData) => {
    if (!resultData.gender) {
      // gender가 null이면 함수를 실행하지 않거나 기본값을 설정합니다.
      console.error("Gender is not selected.");
      return;
    }

    setIsLoading(true);
    
    try {
      // 1. 짧은 공유 URL 생성 (핵심 데이터만 전달)
      const fullUrl = createShortShareUrl({
        mbti: resultData.mbti,
        gender: resultData.gender,
        index: resultData.index,
        // 더미 데이터 (실제로는 사용되지 않음)
        hiragana: '',
        katakana: '',
        korean: ''
      });
      
      // 2. 전체 URL에서 경로 부분만 추출하여 이동
      const pathname = new URL(fullUrl).pathname;
      router.push(pathname);
    } catch (error) {
      console.error("Error in handleGenerationComplete:", error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="mt-3 text-center text-3xl font-bold mb-2">MBTI 일본 이름 생성기</h1>
      <h2 className="text-center text-lg text-gray-500 mb-4">나만의 일본식 이름을 만들어보세요</h2>
      <MBTISelector onComplete={handleGenerationComplete} />
      
      {isLoading && <div className="text-center p-8">결과 페이지로 이동 중...</div>}

      <div id="ad-banner-placement" className="w-full h-24 my-6 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
        광고 자리 (Ad Banner Placeholder)
      </div>
      {result && <MBTIResultCard result={result} onCopy={handleCopy} onShare={handleShare} />}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-2">MBTI란?</h2>
        <p className="mb-4 text-gray-700 text-xs">MBTI는 성격 유형을 16가지로 분류하는 검사로, 각 유형별로 여행 스타일과 선호하는 활동이 다릅니다.</p>
        <h2 className="text-lg font-bold mb-2">일본 이름 생성 방법</h2>
        <p className="mb-4 text-gray-700 text-xs">성별과 MBTI를 선택하면, 해당 성향에 어울리는 일본식 이름을 추천해드립니다.</p>
        <h2 className="text-lg font-bold mb-2">자주 묻는 질문</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-sm">Q. MBTI 일본 이름 생성기는 무엇인가요?</h3>
          <p className="text-xs text-gray-600 mb-2">A. MBTI와 성별을 선택하면 일본식 이름을 추천해주는 서비스입니다.</p>
          <h3 className="font-semibold text-sm">Q. 결과를 어떻게 활용할 수 있나요?</h3>
          <p className="text-xs text-gray-600 mb-2">A. 일본 여행, 닉네임, SNS 등 다양한 곳에서 활용할 수 있습니다.</p>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <a href="/translator" className="text-blue-600 underline font-semibold text-[0.7em]">한글 이름 일본어 변환기도 이용해보세요👉</a>
        </div>
      </section>
    </div>
  );
} 
"use client";
import { useState } from "react";
import MBTISelector from "./MBTISelector";
import MBTIResultCard from "./MBTIResultCard";

export default function MBTIPageClient() {
  const [result, setResult] = useState(null);

  const handleCopy = (type: "hiragana" | "katakana") => {
    console.log(`복사: ${type}`);
  };

  const handleShare = () => {
    const shareUrl = "https://xotd.net";
    const shareTitle = "나의 일본 이름 결과";
    const shareText = "나의 일본 이름을 확인해보세요!";
    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("링크가 복사되었습니다! 원하는 곳에 붙여넣어 공유하세요.");
    }
  };

  return (
    <div>
      <h1 className="mt-6 text-center text-3xl font-bold mb-2">MBTI 일본 이름 생성기</h1>
      <h2 className="text-center text-lg text-gray-500 mb-4">나만의 일본식 이름을 만들어보세요</h2>
      <MBTISelector onComplete={setResult} />
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
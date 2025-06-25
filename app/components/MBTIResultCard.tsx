"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface MBTIResultCardProps {
  result: {
    mbti: string;
    gender: "male" | "female" | null;
    imageUrl: string;
    hiragana: string;
    katakana: string;
    korean: string;
    persona: {
      nickname: string;
      slogan: string;
      description: string;
    };
  };
  onCopy: (type: "hiragana" | "katakana") => void;
  onShare: () => void;
}

export default function MBTIResultCard({ result, onCopy, onShare }: MBTIResultCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [copySuccess, setCopySuccess] = useState<"hiragana" | "katakana" | null>(null);

  // result가 바뀔 때마다 애니메이션 트리거
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, [result]);

  // 필수 데이터가 모두 준비된 경우에만 렌더링
  if (!result || !result.hiragana || !result.katakana || !result.korean) {
    return null;
  }

  const handleCopy = (type: "hiragana" | "katakana") => {
    onCopy(type);
    setCopySuccess(type);
    setTimeout(() => setCopySuccess(null), 2000);
  };

  const handleShare = () => {
    onShare();
  };

  // 기존 180px -> 270px(150%), 이미지 112px -> 168px(150%)
  const imageBoxSize = 270;
  const imageSize = 168;

  return (
    <section className="result-card flex flex-col items-center w-full mt-4">
      {/* 결과 안내 텍스트 */}
      <div id="mbti-result-title" className="text-center text-lg font-semibold mt-2 mb-4">당신의 일본 이름은?</div>
      {/* 결과 이미지 + 이름 */}
      <div
        className="flex flex-col items-center mb-4 relative"
        style={{ width: imageBoxSize, height: imageBoxSize + 60, overflow: 'hidden' }}
      >
        {/* 이미지+블랙 외각선: relative, flex */}
        <div
          className="rounded-xl border border-black p-4 bg-white flex flex-col items-center justify-center mb-2 relative overflow-visible"
          style={{
            width: imageBoxSize,
            height: imageBoxSize,
            zIndex: 2,
            background: '#fff',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: isVisible ? 'result-img-pop 0.7s cubic-bezier(0.4,1.4,0.6,1) 0s 1' : 'none',
            }}
          >
            <Image 
              src={result.imageUrl} 
              alt={`${result.mbti} ${result.gender === 'male' ? '남성' : result.gender === 'female' ? '여성' : '성별 미지정'} MBTI 성향 이미지`} 
              width={imageSize} 
              height={imageSize} 
              className="object-contain mx-auto" 
              priority 
              quality={85}
              loading="eager"
              sizes="(max-width: 768px) 168px, 168px"
            />
          </div>
          {/* 히라가나 (이미지 하단에 겹치게, 20% 더 작게) */}
          <div
            className={`absolute left-0 w-full text-center font-bold tracking-widest transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ bottom: 10, fontSize: "0.96rem", pointerEvents: "none" }}
          >
            {result.hiragana}
          </div>
          <style>{`
            @keyframes result-img-pop {
              0% { transform: scale(0.7); opacity: 0; }
              60% { transform: scale(1.1); opacity: 1; }
              100% { transform: scale(1.0); opacity: 1; }
            }
          `}</style>
        </div>
        {/* 한글 이름(크게) + 가타카나(괄호) */}
        <div style={{ marginTop: 8 }} className={`text-2xl font-extrabold mb-0.5 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>{result.korean}</div>
        <div className={`text-base text-gray-500 mb-1 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>({result.katakana})</div>
      </div>
      {/* 복사/공유 버튼 */}
      <div className="flex gap-2 mb-2">
        <button className="px-2 py-1 rounded bg-gray-200 font-semibold text-sm transition-colors duration-300 hover:bg-gray-300 min-w-[80px]" onClick={() => handleCopy("hiragana")} aria-label="히라가나 복사하기"> 
          {copySuccess === "hiragana" ? "복사 완료!" : "히라가나 복사하기"}
        </button>
        <button className="px-2 py-1 rounded bg-gray-200 font-semibold text-sm transition-colors duration-300 hover:bg-gray-300 min-w-[80px]" onClick={() => handleCopy("katakana")} aria-label="가타카나 복사하기"> 
          {copySuccess === "katakana" ? "복사 완료!" : "가타카나 복사하기"}
        </button>
      </div>
      <button className="w-[50%] min-w-[180px] max-w-md py-3 rounded-lg font-bold text-black text-lg bg-[#FEE500] mb-4 transition-colors duration-300 hover:bg-[#ffe066]" onClick={handleShare} aria-label="결과 공유하기">결과 공유하기</button>
      {/* MBTI 설명 */}
      <div className="w-full max-w-xs bg-gray-50 rounded-lg p-4 mb-4 text-center shadow transition-shadow duration-300 hover:shadow-md">
        <div className="font-bold text-lg mb-1">{result.mbti} <span className="text-purple-500">{result.persona?.nickname}</span></div>
        <div className="text-sm text-gray-700 mb-1">{result.persona?.slogan}</div>
        <div className="text-sm text-gray-600 whitespace-pre-line">{result.persona?.description}</div>
      </div>
    </section>
  );
} 
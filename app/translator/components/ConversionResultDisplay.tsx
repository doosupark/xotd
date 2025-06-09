import React, { useState } from "react";

interface ConversionResultDisplayProps {
  katakanaFamily?: string;
  katakanaGiven?: string;
  hiraganaFamily?: string;
  hiraganaGiven?: string;
  error?: string;
}

export default function ConversionResultDisplay({
  katakanaFamily,
  katakanaGiven,
  hiraganaFamily,
  hiraganaGiven,
  error,
}: ConversionResultDisplayProps) {
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(type);
    setTimeout(() => setCopySuccess(null), 2000);
  };

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!katakanaFamily || !katakanaGiven || !hiraganaFamily || !hiraganaGiven) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
      {/* 카타카나 결과 */}
      <div className="flex flex-col gap-2">
        <div className="text-center text-sm text-gray-500">가타카나</div>
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="flex items-center justify-center text-2xl font-bold text-gray-800 mb-1">
            <span>{katakanaFamily}</span>
            <span style={{ display: 'inline-block', width: 22 }} />
            <span>{katakanaGiven}</span>
          </div>
          <div className="flex justify-center gap-2 text-sm">
            <button
              onClick={() => copyToClipboard(katakanaFamily, "katakanaFamily")}
              className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
              aria-label="가타카나 성 복사하기"
            >
              {copySuccess === "katakanaFamily" ? "복사 완료!" : "성 복사하기"}
            </button>
            <button
              onClick={() => copyToClipboard(katakanaGiven, "katakanaGiven")}
              className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
              aria-label="가타카나 이름 복사하기"
            >
              {copySuccess === "katakanaGiven" ? "복사 완료!" : "이름 복사하기"}
            </button>
          </div>
        </div>
      </div>

      {/* 히라가나 결과 */}
      <div className="flex flex-col gap-2">
        <div className="text-center text-sm text-gray-500">히라가나</div>
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="flex items-center justify-center text-xl font-medium text-gray-500">
            <span>{hiraganaFamily}</span>
            <span style={{ display: 'inline-block', width: 22 }} />
            <span>{hiraganaGiven}</span>
          </div>
          <div className="flex justify-center gap-2 text-sm">
            <button
              onClick={() => copyToClipboard(hiraganaFamily, "hiraganaFamily")}
              className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
              aria-label="히라가나 성 복사하기"
            >
              {copySuccess === "hiraganaFamily" ? "복사 완료!" : "성 복사하기"}
            </button>
            <button
              onClick={() => copyToClipboard(hiraganaGiven, "hiraganaGiven")}
              className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
              aria-label="히라가나 이름 복사하기"
            >
              {copySuccess === "hiraganaGiven" ? "복사 완료!" : "이름 복사하기"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
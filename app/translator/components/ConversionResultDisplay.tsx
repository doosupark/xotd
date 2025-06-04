import React from "react";

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
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
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
        <div className="text-center text-2xl font-bold">
          {katakanaFamily} {katakanaGiven}
        </div>
        <div className="flex justify-center gap-2 text-sm">
          <button
            onClick={() => copyToClipboard(katakanaFamily)}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
          >
            성 복사하기
          </button>
          <button
            onClick={() => copyToClipboard(katakanaGiven)}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
          >
            이름 복사하기
          </button>
        </div>
      </div>

      {/* 히라가나 결과 */}
      <div className="flex flex-col gap-2">
        <div className="text-center text-sm text-gray-500">히라가나</div>
        <div className="text-center text-2xl font-bold">
          {hiraganaFamily} {hiraganaGiven}
        </div>
        <div className="flex justify-center gap-2 text-sm">
          <button
            onClick={() => copyToClipboard(hiraganaFamily)}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
          >
            성 복사하기
          </button>
          <button
            onClick={() => copyToClipboard(hiraganaGiven)}
            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600"
          >
            이름 복사하기
          </button>
        </div>
      </div>
    </div>
  );
} 
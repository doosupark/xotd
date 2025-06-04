"use client";
import { useState } from "react";
import NameInputForm from "./components/NameInputForm";
import ConversionResultDisplay from "./components/ConversionResultDisplay";
import { Kr2JpConverter } from "../../lib/kr2jpConverter";

export default function TranslatorPage() {
  const [result, setResult] = useState<{
    katakanaFamily?: string;
    katakanaGiven?: string;
    hiraganaFamily?: string;
    hiraganaGiven?: string;
    error?: string;
  }>({});

  const handleConvert = (familyName: string, givenName: string) => {
    try {
      const katakanaFamily = Kr2JpConverter.convertFamilyName(familyName);
      const katakanaGiven = Kr2JpConverter.convertGivenNameToKatakana(givenName);
      const hiraganaFamily = Kr2JpConverter.convertKatakanaToHiragana(katakanaFamily);
      const hiraganaGiven = Kr2JpConverter.convertKatakanaToHiragana(katakanaGiven);
      setResult({ katakanaFamily, katakanaGiven, hiraganaFamily, hiraganaGiven });
    } catch (e: any) {
      setResult({ error: e.message || "변환 중 오류가 발생했습니다." });
    }
  };

  return (
    <section className="flex flex-col items-center w-full min-h-[80vh] pt-4">
      <h2 className="text-center text-lg font-semibold mb-2 text-gray-700">일본 여행자를 위한</h2>
      <h1 className="text-center text-2xl font-bold mb-4">한글 이름 일본어 변환기</h1>
      <p className="text-center text-sm text-red-500 mb-2">당신의 이름을 일본어로 변환해보세요!</p>
      <NameInputForm onConvert={handleConvert} />
      <div className="mt-6 w-full">
        <ConversionResultDisplay {...result} />
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">배너 광고 자리</div>
    </section>
  );
} 
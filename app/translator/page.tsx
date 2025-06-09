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
    <div>
      <h2 className="mt-6 text-center text-lg text-gray-500 mb-1">일본 여행자를 위한</h2>
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">한글 이름 일본어 변환기</h1>
      <p className="text-center text-sm text-red-500 font-normal mb-2">당신의 이름을 일본어로 변환해보세요!</p>
      <NameInputForm onConvert={handleConvert} />
    </div>
  );
} 
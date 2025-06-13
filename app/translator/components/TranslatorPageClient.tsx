"use client";
import { useState } from "react";
import Link from "next/link";
import NameInputForm from "./NameInputForm";
import ConversionResultDisplay from "./ConversionResultDisplay";
import { Kr2JpConverter } from "../../../lib/kr2jpConverter";

export default function TranslatorPageClient() {
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
    } catch (e: unknown) {
      setResult({ error: e instanceof Error ? e.message : "변환 중 오류가 발생했습니다." });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">일본어 번역기</h1>
      <NameInputForm onConvert={handleConvert} />
      <div className="mt-8">
        <ConversionResultDisplay {...result} />
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          &apos;MBTI 일본 이름 생성기&apos;로 돌아가기
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로
        </Link>
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-2">일본 웹사이트 가입시 주의사항</h2>
        <p className="mb-4 text-gray-700 text-xs">일본 웹사이트에 가입할 때 성씨와 이름을 함께 기입해야 하는 상황이라면 점(&middot;)을 삭제하고 입력해야 문제가 발생하지 않습니다.</p>
        <p className="mb-4 text-gray-700 text-xs">일본 웹사이트 가입시 입력 문자의 타입이 지정된 경우가 많으며 그에 맞게 입력하지 않으면 가입이 거부될 수 있습니다. 따라서 먼저 해당 사이트에서 &apos;히라가나&apos; 입력을 요구하는지, &apos;카타카나&apos;로 입력을 요구하는지 확인해주세요.</p>
        <h2 className="text-lg font-bold mb-2">자주 묻는 질문</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-sm">Q. 한글 이름 일본어 변환기는 무엇인가요?</h3>
          <p className="text-xs text-gray-600 mb-2">A. 한글 이름을 입력하면 일본어(히라가나/가타카나)로 변환해주는 서비스입니다.</p>
          <h3 className="font-semibold text-sm">Q. 결과를 어디에 쓸 수 있나요?</h3>
          <p className="text-xs text-gray-600 mb-2">A. 일본 웹/앱 서비스 가입, 닉네임, SNS 등에서 활용할 수 있습니다.</p>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Link href="/" className="text-blue-600 underline font-semibold text-xs">MBTI 일본 이름 생성기도 이용해보세요👉</Link>
        </div>
      </section>
    </div>
  );
} 
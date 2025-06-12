"use client";
import { useState } from "react";
import MBTISelector from "./components/MBTISelector";
import MBTIResultCard from "./components/MBTIResultCard";
import Head from "next/head";

export default function Home() {
  const [result, setResult] = useState(null);

  const handleCopy = (type: "hiragana" | "katakana") => {
    console.log(`복사: ${type}`);
  };

  const handleShare = () => {
    console.log("공유하기");
  };

  return (
    <>
      <Head>
        <title>XOTD - MBTI 일본 이름 생성기</title>
      </Head>
      <div className="flex flex-col items-center w-full min-h-screen py-8">
        <h2 className="text-center text-lg text-gray-500 mb-1">일본 여행자를 위한</h2>
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">MBTI 일본 이름 생성기</h1>
        <MBTISelector onComplete={setResult} />
        {result && <MBTIResultCard result={result} onCopy={handleCopy} onShare={handleShare} />}
      </div>
    </>
  );
}

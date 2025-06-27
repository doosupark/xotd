"use client";
import { useState } from "react";

interface NameInputFormProps {
  onConvert?: (familyName: string, givenName: string) => void;
}

export default function NameInputForm({ onConvert }: NameInputFormProps) {
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");

  const handleFamilyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFamilyName(e.target.value.slice(0, 4));
  };

  const handleGivenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGivenName(e.target.value.slice(0, 4));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onConvert) {
      onConvert(familyName, givenName);
    }
  };

  const isComplete = familyName.length > 0 && givenName.length > 0;

  return (
    <form className="flex flex-col gap-4 w-full items-center" onSubmit={handleSubmit}>
      <div className="flex flex-row gap-2 w-[50%] min-w-[245px] max-w-md">
        <input
          type="text"
          maxLength={4}
          placeholder="성"
          className={`border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500 w-1/2 min-w-[120px] text-gray-900 dark:text-gray-100 ${
            familyName.length === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-700"
          }`}
          value={familyName}
          onChange={handleFamilyChange}
        />
        <input
          type="text"
          maxLength={4}
          placeholder="이름"
          className={`border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-500 w-1/2 min-w-[120px] text-gray-900 dark:text-gray-100 ${
            givenName.length === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-700"
          }`}
          value={givenName}
          onChange={handleGivenChange}
        />
      </div>
      <button
        type="submit"
        className={`w-[50%] min-w-[240px] max-w-md py-3 rounded-lg font-bold text-white text-lg transition-all duration-200 ${
          isComplete ? "bg-[#0080ff] hover:bg-[#0070e0]" : "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
        }`}
        disabled={!isComplete}
      >
        일본 이름으로 변환하기
      </button>
    </form>
  );
} 
import React, { useState } from "react";

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

  return (
    <form className="flex flex-col gap-4 w-full items-center" onSubmit={handleSubmit}>
      <div className="flex flex-row gap-2 w-[50%] min-w-[240px] max-w-md">
        <input
          type="text"
          maxLength={4}
          placeholder="성"
          className="border rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 w-1/2 min-w-[120px]"
          value={familyName}
          onChange={handleFamilyChange}
        />
        <input
          type="text"
          maxLength={4}
          placeholder="이름"
          className="border rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 w-1/2 min-w-[120px]"
          value={givenName}
          onChange={handleGivenChange}
        />
      </div>
      <button
        type="submit"
        className="py-2 rounded font-bold text-white text-lg bg-purple-500 hover:bg-purple-600 transition-colors w-[50%] min-w-[240px] max-w-md"
      >
        일본이름 생성하기
      </button>
    </form>
  );
} 
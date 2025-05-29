"use client";
import { useState } from "react";
import Image from "next/image";
import mbtiTravelPersona from "@/lib/mbtiNameData";
import maleNames from "@/../public/data/male_names.json";
import femaleNames from "@/../public/data/female_names.json";

// Add debug logs
console.log("Loaded MBTI name data:", {
  maleNamesKeys: Object.keys(maleNames),
  femaleNamesKeys: Object.keys(femaleNames)
});

const GENDER = ["male", "female"] as const;
const GENDER_ICON = { male: "♂", female: "♀" };
const MBTI_FIELDS = [
  { key: "ie", left: "I", right: "E" },
  { key: "sn", left: "S", right: "N" },
  { key: "tf", left: "T", right: "F" },
  { key: "jp", left: "J", right: "P" },
];
const BLUE = "#8B8FFF";

// 성향별 이미지 파일명 규칙: public/images/{gender}/{철자}.png
function getTraitImagePath(gender: string | null, letter: string) {
  if (!gender || letter === "-") return "/images/placeholder_trait.png";
  return `/images/${gender}/${letter.toLowerCase()}.png`;
}

function getRandomName(gender: string, mbti: string) {
  const names = gender === "male" ? (maleNames as any)[mbti] : (femaleNames as any)[mbti];
  if (!names || !Array.isArray(names) || names.length === 0) {
    console.error(`No names found for MBTI: ${mbti}, gender: ${gender}`);
    return { hiragana: "-", katakana: "-", korean: "-" };
  }
  return names[Math.floor(Math.random() * names.length)];
}

export default function MBTISelector({ onComplete }: { onComplete?: (data: any) => void }) {
  const [gender, setGender] = useState<string | null>(null);
  const [mbti, setMbti] = useState<{ [key: string]: string | null }>({
    ie: null,
    sn: null,
    tf: null,
    jp: null,
  });
  // 애니메이션 트리거용
  const [animIdx, setAnimIdx] = useState<number | null>(null);
  // 점 이동 애니메이션 상태 (각 field별로 left/right 중 어디에 있는지)
  const [dotPos, setDotPos] = useState<{ [key: string]: "left" | "right" | null }>({
    ie: null, sn: null, tf: null, jp: null,
  });
  const [shakeDotIdx, setShakeDotIdx] = useState<number | null>(null);

  // 모든 선택이 완료되었는지 체크
  const isComplete = gender && Object.values(mbti).every(Boolean);

  // 선택 결과 표시용
  const selectedLetters = [
    mbti.ie || "-",
    mbti.sn || "-",
    mbti.tf || "-",
    mbti.jp || "-",
  ];

  // 박스별로 선택 여부
  const isSelectedArr = [
    !!mbti.ie && !!gender,
    !!mbti.sn && !!gender,
    !!mbti.tf && !!gender,
    !!mbti.jp && !!gender,
  ];

  // 점 이동 핸들러
  const handleSelect = (field: string, value: string, idx: number) => {
    if (!gender) {
      setShakeDotIdx(idx);
      setTimeout(() => setShakeDotIdx(null), 350);
      return;
    }
    setMbti((prev) => ({ ...prev, [field]: value }));
    setAnimIdx(["ie", "sn", "tf", "jp"].indexOf(field));
    setDotPos((prev) => ({ ...prev, [field]: value === MBTI_FIELDS.find(f => f.key === field)!.left ? "left" : "right" }));
    setTimeout(() => setAnimIdx(null), 400);
  };

  // 라운드 박스 크기/선 두께 (선택 전 50%, 선택 후 150%)
  const traitBoxSize = 24; // px, 50% 축소
  const traitBoxBorder = 0.25; // px, 50% 더 가늘게
  const traitBoxSizeSelected = 72; // px, 150% 확대

  // 이름 생성 버튼 클릭 시 결과 데이터 가공
  const handleGenerate = () => {
    if (!isComplete) return;
    const mbtiStr = `${mbti.ie}${mbti.sn}${mbti.tf}${mbti.jp}`.toUpperCase();
    const mbtiData = mbtiTravelPersona.mbti_types.find(t => t.type === mbtiStr);
    const persona = mbtiData ? {
      nickname: mbtiData.nickname,
      slogan: mbtiData.slogan,
      description: (mbtiData.genders?.[gender as "male" | "female"]?.description ?? "").replace(/\./g, '.\n'),
    } : { nickname: "", slogan: "", description: "" };
    const name = gender ? getRandomName(gender, mbtiStr) : { hiragana: "-", katakana: "-", korean: "-" };
    const resultData = {
      mbti: mbtiStr,
      gender,
      imageUrl: `/images/${gender}/${mbtiStr}.png`,
      hiragana: name.hiragana,
      katakana: name.katakana,
      korean: name.korean,
      persona,
    };
    onComplete?.(resultData);
  };

  return (
    <section className="flex flex-col items-center w-full">
      {/* 선택 결과(철자+이미지) - 개별 선택마다 순차적으로 확대 */}
      <div className="flex gap-[20px] mb-4 mt-2">
        {selectedLetters.map((letter, idx) => {
          const isSelected = isSelectedArr[idx];
          return (
            <div key={idx} className="flex flex-col items-center gap-1">
              <div
                className={`flex items-center justify-center rounded-lg bg-white overflow-hidden transition-all duration-300`}
                style={{
                  width: isSelected ? traitBoxSizeSelected : traitBoxSize,
                  height: isSelected ? traitBoxSizeSelected : traitBoxSize,
                  borderWidth: isSelected ? 0 : traitBoxBorder,
                  borderStyle: "dashed",
                  borderColor: BLUE,
                  boxShadow: isSelected ? `0 0 0 2px ${BLUE}` : undefined,
                  transform: isSelected ? "scale(1.1)" : "scale(1)",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {(!gender || letter === "-") ? (
                  <div style={{ width: isSelected ? 56 : 16, height: isSelected ? 56 : 16, background: '#fff', borderRadius: 6 }} />
                ) : (
                  <Image
                    src={getTraitImagePath(gender, letter)}
                    alt={`${letter} 성향 이미지`}
                    width={isSelected ? 56 : 16}
                    height={isSelected ? 56 : 16}
                    className="object-contain mx-auto"
                    style={{ width: "auto", height: "auto", display: 'block', margin: '0 auto' }}
                  />
                )}
              </div>
              <span className="text-2xl text-gray-400 font-bold transition-all duration-300">
                {gender ? letter : "-"}
              </span>
            </div>
          );
        })}
      </div>
      {/* 경고 문구 */}
      {!gender && (
        <div className="mb-2 text-red-500 font-semibold text-sm">성별을 먼저 선택해주세요</div>
      )}
      {/* 성별/점/성별 선택 */}
      <div className="flex items-center justify-center gap-4 mb-6">
        {/* 남자 */}
        <button
          type="button"
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-200
            ${gender === "male"
              ? "bg-[#8B8FFF] text-white border-none"
              : "border-gray-300 bg-white text-gray-400"}`}
          onClick={() => setGender("male")}
          aria-label="남성"
        >
          {GENDER_ICON.male}
        </button>
        {/* 점 */}
        <span className="w-2 h-2 rounded-full mx-2 transition-all duration-300"
          style={{
            background: BLUE,
            transform: gender === "male" ? "translateX(-32px)" : gender === "female" ? "translateX(32px)" : "translateX(0)",
          }}
        />
        {/* 여자 */}
        <button
          type="button"
          className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-200
            ${gender === "female"
              ? "bg-[#8B8FFF] text-white border-none"
              : "border-gray-300 bg-white text-gray-400"}`}
          onClick={() => setGender("female")}
          aria-label="여성"
        >
          {GENDER_ICON.female}
        </button>
      </div>
      {/* MBTI 4지표 선택 (왼쪽-점-오른쪽) */}
      <div className="flex flex-col gap-4 mb-6">
        {MBTI_FIELDS.map((field, idx) => (
          <div key={field.key} className="flex items-center gap-4 justify-center">
            {/* 왼쪽 선택지 */}
            <button
              type="button"
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-200
                ${mbti[field.key] === field.left && gender
                  ? "bg-[#8B8FFF] text-white border-none"
                  : "border-gray-300 bg-white text-gray-400"}`}
              onClick={() => handleSelect(field.key, field.left, idx)}
              aria-label={field.left}
              disabled={!gender}
            >
              {field.left}
            </button>
            {/* 점 (선택 방향으로 이동, shakeDotIdx 애니메이션) */}
            <span
              className={`w-2 h-2 rounded-full mx-2 transition-all duration-300 ${shakeDotIdx === idx ? 'scale-150' : ''}`}
              style={{
                background: BLUE,
                transform:
                  dotPos[field.key] === "left"
                    ? "translateX(-32px)"
                    : dotPos[field.key] === "right"
                    ? "translateX(32px)"
                    : "translateX(0)",
              }}
            />
            {/* 오른쪽 선택지 */}
            <button
              type="button"
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-200
                ${mbti[field.key] === field.right && gender
                  ? "bg-[#8B8FFF] text-white border-none"
                  : "border-gray-300 bg-white text-gray-400"}`}
              onClick={() => handleSelect(field.key, field.right, idx)}
              aria-label={field.right}
              disabled={!gender}
            >
              {field.right}
            </button>
          </div>
        ))}
      </div>
      {/* 이름 생성 버튼 */}
      <button
        type="button"
        className={`w-full max-w-xs py-3 rounded-lg font-bold text-white text-lg transition-all duration-200
          ${isComplete ? "bg-purple-500 hover:bg-purple-600" : "bg-gray-300 cursor-not-allowed"}`}
        disabled={!isComplete}
        onClick={handleGenerate}
      >
        일본 이름 생성하기
      </button>
    </section>
  );
} 
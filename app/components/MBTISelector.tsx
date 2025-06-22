"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { mbtiTravelPersona } from "../../lib/mbtiNameData";
import maleNames from "../../public/data/male_names.json";
import femaleNames from "../../public/data/female_names.json";

type Gender = "male" | "female";
type MBTIType = {
  ie: string;
  sn: string;
  tf: string;
  jp: string;
  [key: string]: string;
};

type ResultData = {
  mbti: string;
  gender: Gender | null;
  imageUrl: string;
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
  persona: {
    nickname: string;
    slogan: string;
    description: string;
  };
};

type NameData = { [mbti: string]: { hiragana: string; katakana: string; korean: string }[] };

const MBTI_FIELDS = [
  { key: "ie", left: "I", right: "E" },
  { key: "sn", left: "S", right: "N" },
  { key: "tf", left: "T", right: "F" },
  { key: "jp", left: "J", right: "P" },
];
const BLUE = "#8B8FFF";

// 성향별 이미지 파일명 규칙: public/images/{gender}/{철자}.webp (webp 우선, fallback으로 png)
function getTraitImagePath(gender: Gender | null, letter: string) {
  if (!gender || letter === "-") return "/images/placeholder_trait.png";
  return `/images/${gender}/${letter.toLowerCase()}.webp`;
}

// 이미지 사전 로딩 함수
function preloadImages(gender: Gender) {
  const letters = ['e', 'i', 'n', 's', 't', 'f', 'j', 'p'];
  letters.forEach(letter => {
    const img = new window.Image();
    img.src = `/images/${gender}/${letter}.webp`;
  });
}

function getRandomName(gender: string, mbti: string): { hiragana: string; katakana: string; korean: string; index: number } {
  const male = maleNames as NameData;
  const female = femaleNames as NameData;
  const names = gender === "male" ? male[mbti] : female[mbti];
  if (!names || !Array.isArray(names) || names.length === 0) {
    console.error(`No names found for MBTI: ${mbti}, gender: ${gender}`);
    return { hiragana: "-", katakana: "-", korean: "-", index: 0 };
  }
  const randomIndex = Math.floor(Math.random() * names.length);
  return { ...names[randomIndex], index: randomIndex };
}

export default function MBTISelector({ onComplete }: { onComplete?: (data: ResultData) => void }) {
  const [gender, setGender] = useState<Gender | null>(null);
  const [mbti, setMbti] = useState<MBTIType>({ ie: "-", sn: "-", tf: "-", jp: "-" });
  // 점 이동 애니메이션 상태 (각 field별로 left/right 중 어디에 있는지)
  const [dotPos, setDotPos] = useState<{ [key: string]: "left" | "right" | null }>({
    ie: null, sn: null, tf: null, jp: null,
  });
  const [shakeDotField, setShakeDotField] = useState<string | null>(null);

  // 모든 선택이 완료되었는지 체크
  const isComplete = gender && Object.values(mbti).every(Boolean);

  // 성별 선택 시 이미지 사전 로딩
  const handleGenderSelect = (selectedGender: Gender) => {
    setGender(selectedGender);
    // 성별 선택 시 해당 성별의 모든 개별 이미지를 미리 로드
    preloadImages(selectedGender);
  };

  // 점 이동 핸들러
  const handleSelect = (field: string, value: string) => {
    if (!gender) {
      setShakeDotField(field);
      setTimeout(() => setShakeDotField(null), 350);
      return;
    }
    setMbti((prev) => ({ ...prev, [field]: value }));
    setDotPos((prev) => ({ ...prev, [field]: value === MBTI_FIELDS.find(f => f.key === field)!.left ? "left" : "right" }));
    setTimeout(() => setShakeDotField(null), 400);
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
      description: mbtiData.genders?.[gender as Gender]?.description ?? "",
    } : { nickname: "", slogan: "", description: "" };
    const name = gender ? getRandomName(gender, mbtiStr) : { hiragana: "-", katakana: "-", korean: "-", index: 0 };
    const resultData: ResultData = {
      mbti: mbtiStr,
      gender,
      imageUrl: `/images/${gender}/${mbtiStr.toLowerCase()}.png`,
      hiragana: name.hiragana,
      katakana: name.katakana,
      korean: name.korean,
      index: name.index,
      persona,
    };
    onComplete?.(resultData);
  };

  return (
    <section className="flex flex-col items-center w-full">
      {/* 선택 결과(철자+이미지) - 개별 선택마다 순차적으로 확대 */}
      <div className="flex gap-[20px] mb-4 mt-2">
        {MBTI_FIELDS.map((field) => {
          const letter = mbti[field.key];
          const isSelected = letter !== "-";
          return (
            <div key={field.key} className="flex flex-col items-center gap-1">
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
                    quality={60}
                    priority={isSelected}
                    loading={isSelected ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 56px, 56px"
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
        <div className="mb-2 text-red-500 font-normal text-sm">성별을 먼저 선택해주세요</div>
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
          onClick={() => handleGenderSelect("male")}
          aria-label="남성"
        >
          ♂
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
          onClick={() => handleGenderSelect("female")}
          aria-label="여성"
        >
          ♀
        </button>
      </div>
      {/* MBTI 4지표 선택 (왼쪽-점-오른쪽) */}
      <div className="flex flex-col gap-4 mb-6">
        {MBTI_FIELDS.map((field) => (
          <div key={field.key} className="flex items-center gap-4 justify-center">
            {/* 왼쪽 선택지 */}
            <button
              type="button"
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-200
                ${mbti[field.key] === field.left && gender
                  ? "bg-[#8B8FFF] text-white border-none"
                  : "border-gray-300 bg-white text-gray-400"}`}
              onClick={() => handleSelect(field.key, field.left)}
              aria-label={field.left}
              disabled={!gender}
            >
              {field.left}
            </button>
            {/* 점 (선택 방향으로 이동, shakeDotField 애니메이션) */}
            <span
              className={`w-2 h-2 rounded-full mx-2 transition-all duration-300 ${shakeDotField === field.key ? 'scale-150' : ''}`}
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
              onClick={() => handleSelect(field.key, field.right)}
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
        className={`w-[50%] min-w-[245px] max-w-md py-3 rounded-lg font-bold text-white text-lg transition-all duration-200 ${
          isComplete ? "bg-[#0080ff] hover:bg-[#0070e0]" : "bg-gray-300 cursor-not-allowed"
        }`}
        disabled={!isComplete}
        onClick={handleGenerate}
      >
        일본 이름 생성하기
      </button>
    </section>
  );
} 
import MBTIPageClient from './components/MBTIPageClient';
import { decodeShareData } from '@/lib/canvas-utils';
import { mbtiTravelPersona } from '@/lib/mbtiNameData';

type Gender = "male" | "female";
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

function getPersona(mbti: string, gender: 'male' | 'female') {
  const mbtiData = mbtiTravelPersona.mbti_types.find(
    (item) => item.type.toUpperCase() === mbti.toUpperCase()
  );

  if (!mbtiData) {
    return null;
  }

  return {
    nickname: mbtiData.nickname,
    slogan: mbtiData.slogan,
    description: mbtiData.genders[gender].description,
  };
}

export default async function Home({ searchParams }: { searchParams?: Promise<{ share?: string }> }) {
  let initialResult: ResultData | null = null;

  if (searchParams) {
    const params = await searchParams;
    if (params?.share) {
      const decoded = decodeShareData(params.share);

      if (decoded) {
        const persona = getPersona(decoded.mbti, decoded.gender);
        if (persona) {
          initialResult = {
            ...decoded,
            imageUrl: `/images/og-results/${decoded.mbti.toLowerCase()}-${decoded.gender}-${decoded.index}.webp`,
            persona,
          };
        }
      }
    }
  }

  return <MBTIPageClient initialResult={initialResult} />;
}

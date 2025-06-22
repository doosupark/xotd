import MBTIPageClient from './components/MBTIPageClient';
import { mbtiTravelPersona } from '@/lib/mbtiNameData';

export const revalidate = 0;

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

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  let initialResult: ResultData | null = null;

  if (searchParams?.mbti && searchParams.gender && searchParams.korean && searchParams.index) {
    const { mbti, gender, korean, index, hiragana, katakana } = searchParams;
    const persona = getPersona(mbti as string, gender as 'male' | 'female');

    if (persona) {
      initialResult = {
        mbti: mbti as string,
        gender: gender as 'male' | 'female',
        korean: korean as string,
        index: Number(index),
        hiragana: hiragana as string,
        katakana: katakana as string,
        imageUrl: `/api/og-image?mbti=${mbti}&gender=${gender}&korean=${encodeURIComponent(korean as string)}&hiragana=${encodeURIComponent(hiragana as string)}&katakana=${encodeURIComponent(katakana as string)}&index=${index}`,
        persona,
      };
    }
  }

  return <MBTIPageClient initialResult={initialResult} />;
}

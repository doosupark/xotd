import MBTIPageClient from '@/components/MBTIPageClient';

export default function Home() {
  return <MBTIPageClient />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ searchParams }: { searchParams: any }) {
  const params = await searchParams;
  const img = params.img;
  const mbti = params.mbti;
  const gender = params.gender;
  const hiragana = params.hiragana;
  const katakana = params.katakana;
  const korean = params.korean;

  if (!img) {
    return {
      title: '한글 이름 일본어 변환기',
      description: '한글 이름을 일본어로 변환해보세요.',
    };
  }

  return {
    title: `${hiragana} (${katakana}) - ${korean}`,
    description: `${mbti} ${gender === 'male' ? '남성' : '여성'}의 일본어 이름입니다.`,
    openGraph: {
      title: `${hiragana} (${katakana}) - ${korean}`,
      description: `${mbti} ${gender === 'male' ? '남성' : '여성'}의 일본어 이름입니다.`,
      images: [img],
    },
  };
}

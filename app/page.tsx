import MBTIPageClient from '@/components/MBTIPageClient';

export default function Home() {
  return <MBTIPageClient />;
}

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
      title: "MBTI 일본어 이름 생성기 - 나만의 일본어 이름 찾기 | xotd.net",
      description: "MBTI 성향에 맞는 일본어 이름을 생성해보세요. 히라가나, 가타카나, 한글 표기까지 한 번에 확인할 수 있습니다.",
    };
  }

  return {
    title: `${mbti} ${gender === "male" ? "남성" : "여성"} 일본어 이름 - ${korean} | xotd.net`,
    description: `${mbti} ${gender === "male" ? "남성" : "여성"}의 일본어 이름 ${korean}(${hiragana}, ${katakana})을 확인해보세요.`,
    openGraph: {
      title: `${mbti} ${gender === "male" ? "남성" : "여성"} 일본어 이름 - ${korean}`,
      description: `${mbti} ${gender === "male" ? "남성" : "여성"}의 일본어 이름 ${korean}(${hiragana}, ${katakana})을 확인해보세요.`,
      images: [
        {
          url: img,
          width: 1200,
          height: 630,
          alt: `${mbti} ${gender === "male" ? "남성" : "여성"} 일본어 이름 - ${korean}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${mbti} ${gender === "male" ? "남성" : "여성"} 일본어 이름 - ${korean}`,
      description: `${mbti} ${gender === "male" ? "남성" : "여성"}의 일본어 이름 ${korean}(${hiragana}, ${katakana})을 확인해보세요.`,
      images: [img],
    },
  };
}

import type { Metadata } from "next";

export async function generateMetadata({ searchParams }: { searchParams: Record<string, string | undefined> }): Promise<Metadata> {
  // 기본 메타데이터 (홈/MBTI 생성기)
  const defaultMetadata = {
    title: "MBTI 일본 이름 생성기 - 나만의 일본식 이름을 찾아보세요 | xotd.net",
    description: "MBTI와 성별을 선택하면 당신만을 위한 일본식 이름을 추천해드립니다. 일본 여행, 닉네임, SNS 등에서 활용하세요!",
    openGraph: {
      title: "MBTI 일본 이름 생성기",
      description: "MBTI와 성별로 나만의 일본식 이름을 추천받으세요.",
      images: [
        {
          url: "https://xotd.net/api/og-image?title=MBTI%20일본%20이름%20생성기&description=MBTI와%20성별로%20나만의%20일본식%20이름을%20추천받으세요",
          width: 1200,
          height: 630,
          alt: "MBTI 일본 이름 생성기",
        }
      ],
      url: 'https://xotd.net',
      type: 'website',
      siteName: 'XOTD',
    },
    twitter: {
      card: "summary_large_image",
      title: "MBTI 일본 이름 생성기",
      description: "MBTI와 성별로 나만의 일본식 이름을 추천받으세요.",
      images: ["https://xotd.net/api/og-image?title=MBTI%20일본%20이름%20생성기&description=MBTI와%20성별로%20나만의%20일본식%20이름을%20추천받으세요"],
    },
  };

  // 한글 이름 일본어 변환기
  if (searchParams?.page === 'translator') {
    return {
      title: "한글 이름 일본어 변환기 - 카타카나/히라가나 변환 | xotd.net",
      description: "한글 이름을 입력하면 일본어(카타카나/히라가나)로 변환해드립니다. 일본 웹/앱 서비스 가입시 활용하세요!",
      openGraph: {
        title: "한글 이름 일본어 변환기",
        description: "한글 이름을 일본어로 쉽게 변환해보세요.",
        images: [
          {
            url: "https://xotd.net/api/og-image?title=한글%20이름%20일본어%20변환기&description=한글%20이름을%20일본어로%20쉽게%20변환해보세요",
            width: 1200,
            height: 630,
            alt: "한글 이름 일본어 변환기",
          }
        ],
        url: 'https://xotd.net/translator',
        type: 'website',
        siteName: 'XOTD',
      },
      twitter: {
        card: "summary_large_image",
        title: "한글 이름 일본어 변환기",
        description: "한글 이름을 일본어로 쉽게 변환해보세요.",
        images: ["https://xotd.net/api/og-image?title=한글%20이름%20일본어%20변환기&description=한글%20이름을%20일본어로%20쉽게%20변환해보세요"],
      },
    };
  }

  // 결과/상세 페이지 (동적 OG 이미지 사용)
  if (searchParams?.mbti && searchParams?.korean && searchParams?.index) {
    const mbti = searchParams.mbti;
    const gender = searchParams.gender === "male" ? "남성" : "여성";
    const hiragana = searchParams.hiragana || "";
    const katakana = searchParams.katakana || "";
    const korean = searchParams.korean;
    const index = searchParams.index;
    
    // 동적 OG 이미지 URL 생성
    const ogImageUrl = `https://xotd.net/api/og-image?mbti=${mbti}&gender=${searchParams.gender}&korean=${encodeURIComponent(korean)}&hiragana=${encodeURIComponent(hiragana)}&katakana=${encodeURIComponent(katakana)}&index=${index}`;
    
    return {
      title: `${mbti} ${gender} 일본 이름 - ${korean} | xotd.net`,
      description: `${mbti} ${gender}의 일본 이름 ${korean}(${hiragana}, ${katakana})을 확인해보세요.`,
      openGraph: {
        title: `${mbti} 일본 이름 결과`,
        description: `${mbti}와 성별로 추천된 일본식 이름을 확인하세요.`,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: `${mbti} ${gender} 일본 이름 - ${korean}`,
          }
        ],
        url: `https://xotd.net?mbti=${mbti}&gender=${searchParams.gender}&hiragana=${hiragana}&katakana=${katakana}&korean=${korean}&index=${index}`,
        type: 'website',
        siteName: 'XOTD',
      },
      twitter: {
        card: "summary_large_image",
        title: `${mbti} 일본 이름 결과`,
        description: `${mbti}와 성별로 추천된 일본식 이름을 확인하세요.`,
        images: [ogImageUrl],
      },
      // 카카오톡 전용 메타데이터
      other: {
        'kakao:title': `${mbti} ${gender} 일본 이름 - ${korean}`,
        'kakao:description': `${mbti} ${gender}의 일본 이름 ${korean}(${hiragana}, ${katakana})을 확인해보세요.`,
        'kakao:image': ogImageUrl,
      },
    };
  }

  return defaultMetadata;
} 
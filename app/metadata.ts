import type { Metadata } from "next";

export async function generateMetadata({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }): Promise<Metadata> {
  const defaultMetadata = {
    title: "MBTI 일본 이름 생성기 - 나만의 일본식 이름을 찾아보세요 | xotd.net",
    description: "MBTI와 성별을 선택하면 당신만을 위한 일본식 이름을 추천해드립니다. 일본 여행, 닉네임, SNS 등에서 활용하세요!",
    openGraph: {
      title: "MBTI 일본 이름 생성기",
      description: "MBTI와 성별로 나만의 일본식 이름을 추천받으세요.",
      images: [
        {
          url: "https://xotd.net/images/ci/ci_logo_small.png",
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
      images: ["https://xotd.net/images/ci/ci_logo_small.png"],
    },
  };

  // 한글 이름 일본어 변환기 페이지
  if (searchParams?.page === 'translator') {
    return {
      title: "한글 이름 일본어 변환기 - 카타카나/히라가나 변환 | xotd.net",
      description: "한글 이름을 입력하면 일본어(카타카나/히라가나)로 변환해드립니다. 일본 웹/앱 서비스 가입시 활용하세요!",
      openGraph: {
        title: "한글 이름 일본어 변환기",
        description: "한글 이름을 일본어로 쉽게 변환해보세요.",
        images: [
          {
            url: "https://xotd.net/images/ci/ci_logo_small.png",
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
        images: ["https://xotd.net/images/ci/ci_logo_small.png"],
      },
    };
  }

  return defaultMetadata;
} 
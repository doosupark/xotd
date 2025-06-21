import type { Metadata } from "next";
import { decodeShareData } from "@/lib/canvas-utils";

/*
type DecodedData = {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
};
*/

// URL 파라미터 디코딩 헬퍼 함수
/*
function decodeShareData(encoded: string): DecodedData | null {
  try {
    const padded = encoded.replace(/-/g, '+').replace(/_/g, '/') + '=='.substring(0, (3 * encoded.length) % 4);
    const decodedString = Buffer.from(padded, 'base64').toString('utf-8');
    const data = JSON.parse(decodedString);
    if (!data.m || !data.g || !data.h || !data.k || !data.n || typeof data.i === 'undefined') {
      return null;
    }
    return {
      mbti: data.m,
      gender: data.g,
      hiragana: decodeURIComponent(data.h),
      katakana: decodeURIComponent(data.k),
      korean: decodeURIComponent(data.n),
      index: parseInt(data.i, 10),
    };
  } catch (error) {
    console.error("Failed to decode share data:", error);
    return null;
  }
}
*/

export async function generateMetadata({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }): Promise<Metadata> {
  const params = await searchParams;
  
  // 공유 URL 처리
  if (params?.share) {
    const data = decodeShareData(params.share);
    if (data) {
      const { mbti, gender, korean, index, hiragana, katakana } = data;
      const genderText = gender === 'male' ? "남성" : "여성";
      const ogImageUrl = `https://xotd.net/images/og-results/${mbti.toLowerCase()}-${gender}-${index}.webp?v=1.0.7`;

      return {
        title: `${mbti} ${genderText} 일본 이름 - ${korean} | xotd.net`,
        description: `${mbti} ${genderText}의 일본 이름 ${korean}(${hiragana}, ${katakana})을 확인해보세요.`,
        openGraph: {
          title: `${mbti} 일본 이름 결과`,
          description: `추천된 일본식 이름을 지금 바로 확인해보세요.`,
          url: `https://xotd.net/?share=${params.share}`,
          siteName: 'XOTD',
          images: [{ url: ogImageUrl, width: 1200, height: 630, alt: `${mbti} ${genderText} 일본 이름 - ${korean}` }],
          locale: 'ko_KR',
          type: 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: `${mbti} 일본 이름 결과`,
          description: `${mbti} ${genderText}의 일본 이름 ${korean}(${hiragana}, ${katakana})을 확인해보세요.`,
          images: [ogImageUrl],
        },
      };
    } else {
      // 디코딩 실패 시
      return {
        title: "디버그: 데이터 디코딩 실패",
        description: "공유 데이터 디코딩에 실패했습니다.",
        openGraph: {
          title: "Debug: Decode Failed",
          description: "데이터 디코딩 실패"
        }
      }
    }
  }
  
  const debugTitle = `Debug: share=${params?.share ? 'yes' : 'no'}`;
  
  // 기본 메타데이터 (홈/MBTI 생성기)
  const defaultMetadata = {
    title: "MBTI 일본 이름 생성기 - 나만의 일본식 이름을 찾아보세요 | xotd.net",
    description: "MBTI와 성별을 선택하면 당신만을 위한 일본식 이름을 추천해드립니다. 일본 여행, 닉네임, SNS 등에서 활용하세요!",
    openGraph: {
      title: params?.share ? "MBTI 일본 이름 생성기" : debugTitle,
      description: "MBTI와 성별로 나만의 일본식 이름을 추천받으세요.",
      images: [
        {
          url: "https://xotd.net/images/og-results/enfj-female-0.webp",
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
      images: ["https://xotd.net/images/og-results/enfj-female-0.webp"],
    },
  };

  // 한글 이름 일본어 변환기
  if (params?.page === 'translator') {
    return {
      title: "한글 이름 일본어 변환기 - 카타카나/히라가나 변환 | xotd.net",
      description: "한글 이름을 입력하면 일본어(카타카나/히라가나)로 변환해드립니다. 일본 웹/앱 서비스 가입시 활용하세요!",
      openGraph: {
        title: "한글 이름 일본어 변환기",
        description: "한글 이름을 일본어로 쉽게 변환해보세요.",
        images: [
          {
            url: "https://xotd.net/images/og-results/enfp-male-0.webp",
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
        images: ["https://xotd.net/images/og-results/enfp-male-0.webp"],
      },
    };
  }

  // 결과/상세 페이지 (정적 OG 이미지 사용)
  if (params?.mbti && params?.korean && params?.index) {
    const mbti = params.mbti;
    const gender = params.gender === "male" ? "남성" : "여성";
    const hiragana = params.hiragana || "";
    const katakana = params.katakana || "";
    const korean = params.korean;
    const index = params.index;
    
    // 정적 OG 이미지 URL 생성 (캐시 무효화를 위해 버전 파라미터 사용)
    const ogImageUrl = `https://xotd.net/images/og-results/${mbti.toLowerCase()}-${params.gender}-${index}.webp?v=1.0.7`;
    
    // 디버깅용 로그
    console.log('OG Image URL:', ogImageUrl);
    console.log('Search Params:', params);
    
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
        url: `https://xotd.net?mbti=${mbti}&gender=${params.gender}&hiragana=${hiragana}&katakana=${katakana}&korean=${korean}&index=${index}`,
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
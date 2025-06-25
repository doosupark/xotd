import MBTIPageClient from './components/MBTIPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
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

export default function Home() {
  return <MBTIPageClient />;
}

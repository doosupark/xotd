import TranslatorPageClient from './components/TranslatorPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "한글 이름 일본어 변환기 - 카타카나/히라가나 변환 | xotd.net",
  description: "한글 이름을 입력하면 일본어(카타카나/히라가나)로 변환해드립니다. 일본 웹/앱 서비스 가입시 활용하세요!",
  alternates: {
    canonical: 'https://xotd.net/translator',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "한글 이름 일본어 변환기",
    description: "한글 이름을 일본어로 쉽게 변환해보세요.",
    images: [
      {
        url: "https://xotd.net/images/ci/ci_logo_small.webp",
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
    images: ["https://xotd.net/images/ci/ci_logo_small.webp"],
  },
};

export default function TranslatorPage() {
  return <TranslatorPageClient />;
} 
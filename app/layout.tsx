import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AdBanner from "../components/AdBanner";
import Image from "next/image";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://xotd.net'),
  title: {
    default: "MBTI 일본 이름 생성기 - 나만의 일본식 이름을 찾아보세요 | xotd.net",
    template: "%s | xotd.net"
  },
  description: "MBTI와 성별을 선택하면 당신만을 위한 일본식 이름을 추천해드립니다. 일본 여행, 닉네임, SNS 등에서 활용하세요!",
  keywords: ["MBTI", "일본 이름", "일본어", "카타카나", "히라가나", "이름 생성기", "한글 이름 변환기"],
  authors: [{ name: "XOTD" }],
  creator: "XOTD",
  publisher: "XOTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: 'XOTD',
    title: "MBTI 일본 이름 생성기",
    description: "MBTI와 성별로 나만의 일본식 이름을 추천받으세요.",
    url: 'https://xotd.net',
    images: [
      {
        url: '/images/og-mbti.jpg',
        width: 1200,
        height: 630,
        alt: 'MBTI 일본 이름 생성기',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MBTI 일본 이름 생성기",
    description: "MBTI와 성별로 나만의 일본식 이름을 추천받으세요.",
    images: ['/images/og-mbti.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    other: {
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
  alternates: {
    canonical: 'https://xotd.net',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "xotd.net",
          "url": "https://xotd.net",
          "description": "MBTI 일본 이름 생성기, 한글 이름 일본어 변환기 서비스"
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "MBTI 일본 이름 생성기는 무엇인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "A. MBTI와 성별을 선택하면 일본식 이름을 추천해주는 서비스입니다." }
            },
            {
              "@type": "Question",
              "name": "결과를 어떻게 활용할 수 있나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "A. 일본 여행, 닉네임, SNS 등 다양한 곳에서 활용할 수 있습니다." }
            },
            {
              "@type": "Question",
              "name": "한글 이름 일본어 변환기는 무엇인가요?",
              "acceptedAnswer": { "@type": "Answer", "text": "A. 한글 이름을 입력하면 일본어(히라가나/가타카나)로 변환해주는 서비스입니다." }
            },
            {
              "@type": "Question",
              "name": "결과를 어디에 쓸 수 있나요?",
              "acceptedAnswer": { "@type": "Answer", "text": "A. 일본 웹/앱 서비스 가입, 닉네임, SNS 등에서 활용할 수 있습니다." }
            }
          ]
        }) }} />
        {/* 카카오톡 OG 이미지 캐시 무효화 */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:alt" content="MBTI 일본 이름 생성기" />
        
        {/* 카카오톡 전용 메타데이터 */}
        <meta name="kakao:title" content="MBTI 일본 이름 생성기" />
        <meta name="kakao:description" content="MBTI와 성별로 나만의 일본식 이름을 추천받으세요." />
        <meta name="kakao:image" content="https://xotd.net/images/og-mbti.jpg" />
        
        {/* 카카오톡 OG 이미지 강제 새로고침 */}
        <meta property="og:image" content="https://xotd.net/images/og-mbti.jpg?v=1.0.5" />
        <meta property="og:image:secure_url" content="https://xotd.net/images/og-mbti.jpg?v=1.0.5" />
        
        {/* 캐시 제어 */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col md:flex-row">
          {/* PC: 좌측 네비/광고, 모바일: 상단 CI */}
          <aside className="hidden md:flex md:flex-col md:w-[179.2px] md:min-h-screen bg-white">
            <div className="flex items-center md:justify-start justify-center mt-4 md:ml-4">
              <Image src="/images/ci/ci_logo_small.png" alt="XOTD CI" width={24} height={24} priority />
            </div>
            <Navigation />
            <div className="mt-auto mb-2">
              <AdBanner position="side" />
            </div>
          </aside>
          <main className="flex-1 flex flex-col min-h-screen">
            {/* 모바일 헤더 CI */}
            <header className="md:hidden flex items-center justify-center h-8 bg-white">
              <Image src="/images/ci/ci_logo_small.png" alt="XOTD CI" width={24} height={24} priority />
            </header>
            <div className="flex-1 w-full max-w-lg mx-auto px-4 sm:px-6 py-4">
              {children}
            </div>
            {/* 모바일 네비게이션 (출력 하단) */}
            <nav className="md:hidden border-t border-gray-200 bg-white">
              <Navigation />
            </nav>
            {/* 하단 광고 영역 (공통) */}
            <footer>
              <AdBanner position="bottom" />
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}

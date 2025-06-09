import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AdBanner from "../components/AdBanner";
import Image from "next/image";
import { generateMetadata } from './metadata';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { generateMetadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}>  
        <div className="min-h-screen flex flex-col md:flex-row">
          {/* PC: 좌측 네비/광고, 모바일: 상단 CI */}
          <aside className="hidden md:flex md:flex-col md:w-[179.2px] md:min-h-screen bg-white">
            <div className="flex items-center md:justify-start justify-center mt-4 md:ml-4">
              <Image src="/images/CI/CI_Logo_small.png" alt="XOTD CI" width={24} height={24} priority />
            </div>
            <Navigation />
            <div className="mt-auto mb-2">
              <AdBanner position="side" />
            </div>
          </aside>
          <main className="flex-1 flex flex-col min-h-screen">
            {/* 모바일 헤더 CI */}
            <header className="md:hidden flex items-center justify-center h-8 bg-white">
              <Image src="/images/CI/CI_Logo_small.png" alt="XOTD CI" width={24} height={24} priority />
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

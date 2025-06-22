import { Inter } from "next/font/google";
import "./globals.css";
import AdBanner from "./components/AdBanner";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MBTI 일본 이름 생성기",
  description: "MBTI 성향에 맞는 일본식 이름을 생성해보세요!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3368149883961314" crossOrigin="anonymous"></script>
        {/* JSON-LD for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://xotd.net",
            "name": "XOTD.NET | MBTI 일본 이름 생성기",
            "description": "MBTI와 성별을 선택하면 당신만을 위한 일본식 이름을 추천해드립니다. 일본 여행, 닉네임, SNS 등에서 활용하세요!",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://xotd.net/?mbti={mbti}&gender={gender}",
              "query-input": "required name=mbti, required name=gender"
            }
          })
        }} />
      </head>
      <body className={inter.className}>
        {/* Google Analytics - Next.js Script component 사용 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1618CHK4M3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1618CHK4M3');
          `}
        </Script>

        <div className="flex min-h-screen">
          {/* PC 사이드바 */}
          <div className="hidden lg:flex lg:w-56 lg:flex-col lg:fixed lg:inset-y-0">
            <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
              {/* CI 로고 - 이미지 크기 수정 */}
              <div className="flex items-center flex-shrink-0 px-4 mb-8">
                <Image
                  src="/images/ci/ci_logo_small.png"
                  alt="XOTD Logo"
                  width={120}
                  height={40}
                  priority
                  style={{ width: 'auto', height: '40px' }}
                />
              </div>
              
              {/* 네비게이션 */}
              <nav className="mt-5 flex-1 px-2 space-y-1">
                <Link href="/" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-50">
                  MBTI 일본 이름 생성기
                </Link>
                <Link href="/translator" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                  한글 이름 일본어 변환기
                </Link>
              </nav>
              
              {/* 광고 영역 */}
              <div className="flex-shrink-0 p-4">
                <AdBanner />
              </div>
            </div>
          </div>
          
          {/* 메인 콘텐츠 */}
          <div className="lg:pl-56 flex flex-col flex-1">
            {/* 모바일 헤더 - CI 로고 */}
            <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/ci/ci_logo_small.png"
                  alt="XOTD Logo"
                  width={100}
                  height={33}
                  priority
                  style={{ width: 'auto', height: '33px' }}
                />
              </div>
            </div>

            <main className="flex-1">
              <div className="py-6 pb-20 lg:pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </div>
            </main>

            {/* 모바일 하단 네비게이션 */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
              <Navigation />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

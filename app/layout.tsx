import { Inter } from "next/font/google";
import "./globals.css";
import AdBanner from "./components/AdBanner";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// AdSense 활성화
const ADSENSE_UNDER_REVIEW = false;

export const metadata = {
  title: "MBTI 일본 이름 생성기 - XOTD",
  description: "MBTI 성향에 맞는 귀여운 이미지와 함께 일본식 이름을 생성해보세요! 16가지 성격 유형별 특별한 일본 이름 추천 서비스입니다.",
  keywords: "MBTI, 일본이름, 성격유형, 이름생성기, 일본어변환, 성격테스트",
  authors: [{ name: "XOTD Team" }],
  creator: "XOTD",
  publisher: "XOTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://xotd.net'),
  alternates: {
    canonical: 'https://xotd.net',
  },
  openGraph: {
    title: "MBTI 일본 이름 생성기 - XOTD",
    description: "MBTI 성향에 맞는 귀여운 이미지와 함께 일본식 이름을 생성해보세요!",
    url: 'https://xotd.net',
    siteName: 'XOTD',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://xotd.net/images/ci/ci_logo_small.webp',
        width: 1200,
        height: 630,
        alt: 'XOTD - MBTI 일본 이름 생성기',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MBTI 일본 이름 생성기 - XOTD",
    description: "MBTI 성향에 맞는 귀여운 이미지와 함께 일본식 이름을 생성해보세요!",
    images: ['https://xotd.net/images/ci/ci_logo_small.webp'],
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
  ...(ADSENSE_UNDER_REVIEW ? {} : {
    other: {
      "google-adsense-account": "ca-pub-8759341144415814",
    },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Naver Search Advisor 소유권 확인 */}
        <meta name="naver-site-verification" content="6abc282195a3afa3f8b71e8254e24f3ec86f89ff" />
        
        {/* Google AdSense */}
        {!ADSENSE_UNDER_REVIEW && (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8759341144415814"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
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

        {/* JSON-LD for SEO - 확장된 구조화 데이터 */}
        <Script
          id="json-ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://xotd.net",
              "name": "XOTD.NET | MBTI 일본 이름 생성기",
              "description": "MBTI 16가지 성격 유형별 귀여운 이미지와 함께 특별한 일본식 이름을 무료로 생성해보세요!",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://xotd.net/?mbti={mbti}&gender={gender}",
                "query-input": "required name=mbti, required name=gender"
              }
            })
          }}
        />

        {/* JSON-LD for WebApplication */}
        <Script
          id="json-ld-webapp"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "MBTI 일본 이름 생성기",
              "description": "MBTI 성격 유형별 귀여운 이미지와 함께 일본식 이름을 생성하는 무료 웹 애플리케이션",
              "url": "https://xotd.net",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "KRW"
              },
              "author": {
                "@type": "Organization",
                "name": "XOTD"
              },
              "featureList": [
                "MBTI 16가지 성격 유형별 일본 이름 생성",
                "귀여운 캐릭터 이미지 제공",
                "히라가나, 가타카나 표기 지원",
                "한글 이름 일본어 변환",
                "결과 공유 기능"
              ]
            })
          }}
        />

        {/* JSON-LD for FAQ */}
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "MBTI 일본 이름 생성기는 무엇인가요?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "MBTI 16가지 성격 유형과 성별을 선택하면 해당 성향에 어울리는 일본식 이름을 추천해주는 무료 서비스입니다. 귀여운 캐릭터 이미지와 함께 히라가나, 가타카나 표기도 제공합니다."
                  }
                },
                {
                  "@type": "Question",
                  "name": "생성된 일본 이름을 어떻게 활용할 수 있나요?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "일본 여행 시 별명, 온라인 게임 캐릭터명, SNS 닉네임, 창작 활동, 일본 웹사이트 가입 등 다양한 용도로 활용하실 수 있습니다."
                  }
                },
                {
                  "@type": "Question",
                  "name": "한글 이름을 일본어로 변환할 수 있나요?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "네, 별도의 한글 이름 일본어 변환기를 제공합니다. 한글 이름을 입력하면 정확한 일본어(카타카나/히라가나) 표기로 변환해드립니다."
                  }
                },
                {
                  "@type": "Question",
                  "name": "서비스 이용료가 있나요?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "모든 서비스는 완전 무료입니다. 회원가입 없이 언제든지 이용하실 수 있습니다."
                  }
                },
                {
                  "@type": "Question",
                  "name": "결과를 저장하거나 공유할 수 있나요?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "네, 생성된 결과는 고유 URL을 통해 언제든지 다시 확인할 수 있으며, 카카오톡, 페이스북 등 SNS에 공유할 때 미리보기 이미지가 함께 표시됩니다."
                  }
                },
                {
                  "@type": "Question",
                  "name": "MBTI 타입별로 어떤 차이가 있나요?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "각 MBTI 타입별로 성격 특성에 맞는 일본식 이름을 추천하며, 귀여운 캐릭터 이미지와 함께 개성 있는 페르소나 설명을 제공합니다."
                  }
                }
              ]
            })
          }}
        />

        <div className="flex min-h-screen">
          {/* PC 사이드바 */}
          <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
            <div className="flex flex-col flex-grow bg-white dark:bg-black border-r border-gray-200 dark:border-gray-700 pt-5 pb-4 overflow-y-auto">
              {/* CI 로고 - 홈페이지 링크 추가 */}
              <div className="flex items-center flex-shrink-0 px-4 mb-8">
                <Link href="/" className="transition-opacity hover:opacity-80">
                  <Image
                    src="/images/ci/ci_logo_small.webp"
                    alt="XOTD Logo - 홈으로 이동"
                    width={120}
                    height={40}
                    priority
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
              
              {/* 네비게이션 */}
              <nav className="mt-5 flex-1 px-2 space-y-1">
                <Link href="/" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
                  MBTI 일본 이름 생성기
                </Link>
                <Link href="/translator" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800">
                  한글 이름 일본어 변환기
                </Link>
              </nav>
              
              {/* 수직형 광고 영역 - PC 사이드바 */}
              <div className="flex-shrink-0 p-4">
                <AdBanner type="vertical" />
              </div>
            </div>
          </div>
          
          {/* 메인 콘텐츠 */}
          <div className="lg:pl-64 flex flex-col flex-1">
            {/* 모바일 헤더 - CI 로고에 홈페이지 링크 추가 */}
            <div className="lg:hidden bg-white dark:bg-black px-4 py-1.5">
              <div className="flex items-center justify-center">
                <Link href="/" className="transition-opacity hover:opacity-80">
                  <Image
                    src="/images/ci/ci_logo_small.webp"
                    alt="XOTD Logo - 홈으로 이동"
                    width={100}
                    height={33}
                    priority
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
            </div>

            <main className="flex-1">
              <div className="py-2 pb-20 lg:pb-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </div>
            </main>

            {/* 푸터 - PC 전용 */}
            <footer className="hidden lg:block bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <div>
                    © 2024 XOTD. All rights reserved.
                  </div>
                  <div className="flex space-x-6">
                    <Link href="/privacy" className="hover:text-gray-700 dark:hover:text-gray-300">
                      개인정보보호 정책
                    </Link>
                    <Link href="/terms" className="hover:text-gray-700 dark:hover:text-gray-300">
                      이용약관
                    </Link>
                  </div>
                </div>
              </div>
            </footer>

            {/* 모바일 하단 광고 영역 - 하단형 광고 사용 */}
            <div className="lg:hidden px-4 py-4 bg-gray-50 dark:bg-gray-900">
              <AdBanner type="bottom" />
            </div>

            {/* 모바일 푸터 */}
            <div className="lg:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pb-16">
              <div className="px-4 py-3">
                <div className="text-center text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <div>© 2024 XOTD. All rights reserved.</div>
                  <div className="flex justify-center space-x-4">
                    <Link href="/privacy" className="hover:text-gray-700 dark:hover:text-gray-300">
                      개인정보보호정책
                    </Link>
                    <Link href="/terms" className="hover:text-gray-700 dark:hover:text-gray-300">
                      이용약관
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 모바일 하단 네비게이션 */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 z-50">
              <Navigation />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

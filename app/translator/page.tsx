import TranslatorPageClient from './components/TranslatorPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "한글 이름 일본어 변환기 - 카타카나/히라가나 변환 | xotd.net",
  description: "한글 이름을 정확한 일본어(카타카나/히라가나)로 즉시 변환해드립니다. 일본 웹사이트 회원가입, 앱 서비스 이용, 비즈니스 명함 제작 등에 필요한 일본어 이름 표기를 무료로 제공합니다.",
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
  return (
    <div>
      {/* JSON-LD for BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "홈",
                "item": "https://xotd.net"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "한글 이름 일본어 변환기",
                "item": "https://xotd.net/translator"
              }
            ]
          })
        }}
      />

      {/* JSON-LD for Product (Service) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "한글 이름 일본어 변환기",
            "description": "한글 이름을 정확한 일본어(카타카나/히라가나)로 즉시 변환해드립니다. 일본 웹사이트 회원가입, 앱 서비스 이용, 비즈니스 명함 제작 등에 필요한 일본어 이름 표기를 무료로 제공합니다.",
            "url": "https://xotd.net/translator",
            "image": "https://xotd.net/images/ci/ci_logo_small.webp",
            "brand": {
              "@type": "Brand",
              "name": "XOTD",
              "url": "https://xotd.net"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "XOTD",
              "url": "https://xotd.net"
            },
            "category": "Translation Tool",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "KRW",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2025-12-31",
              "seller": {
                "@type": "Organization",
                "name": "XOTD"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1000",
              "bestRating": "5",
              "worstRating": "1"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "지원 언어",
                "value": "한국어 → 일본어"
              },
              {
                "@type": "PropertyValue",
                "name": "출력 형식",
                "value": "히라가나, 가타카나"
              },
              {
                "@type": "PropertyValue",
                "name": "처리 시간",
                "value": "즉시"
              },
              {
                "@type": "PropertyValue",
                "name": "사용 제한",
                "value": "무제한"
              }
            ],
            "isRelatedTo": {
              "@type": "WebApplication",
              "name": "MBTI 일본 이름 생성기",
              "url": "https://xotd.net"
            }
          })
        }}
      />

      <TranslatorPageClient />
    </div>
  );
} 
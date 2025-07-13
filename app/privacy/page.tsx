import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "개인정보보호 정책 - XOTD",
  description: "XOTD MBTI 일본 이름 생성기의 개인정보보호 정책을 확인하세요. Google Analytics, AdSense 사용 현황 및 쿠키 정책, 개인정보 수집 항목과 이용 목적에 대한 상세한 안내를 제공합니다.",
  alternates: {
    canonical: 'https://xotd.net/privacy',
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
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
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
                "name": "개인정보보호 정책",
                "item": "https://xotd.net/privacy"
              }
            ]
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보보호 정책</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. 개인정보 수집 및 이용</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  XOTD(이하 "회사")는 사용자의 개인정보를 중요시하며, 개인정보보호법을 준수하고 있습니다.
                </p>
                <p>
                  본 서비스는 회원가입 없이 이용 가능하며, 개인정보를 직접 수집하지 않습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Google Analytics 사용</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  본 웹사이트는 Google Analytics를 사용하여 웹사이트 사용 현황을 분석합니다.
                </p>
                <p>
                  Google Analytics는 쿠키를 사용하여 사용자의 웹사이트 이용 정보를 수집하며, 
                  이 정보는 익명화되어 처리됩니다.
                </p>
                <p>
                  Google의 개인정보 처리방침은 
                  <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://policies.google.com/privacy
                  </a>
                  에서 확인할 수 있습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Google AdSense 사용</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  본 웹사이트는 Google AdSense를 통해 광고를 게재합니다.
                </p>
                <p>
                  Google AdSense는 사용자의 관심사에 맞는 광고를 표시하기 위해 쿠키를 사용할 수 있습니다.
                </p>
                <p>
                  광고 맞춤설정은 Google 광고 설정 페이지에서 관리할 수 있습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. 쿠키 정책</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  본 웹사이트는 다음과 같은 쿠키를 사용합니다:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics 쿠키: 웹사이트 사용 현황 분석</li>
                  <li>Google AdSense 쿠키: 맞춤형 광고 제공</li>
                  <li>기능적 쿠키: 웹사이트 기본 기능 제공</li>
                </ul>
                <p>
                  브라우저 설정을 통해 쿠키를 거부할 수 있으나, 이 경우 일부 기능이 제한될 수 있습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. 개인정보 보호</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  회사는 사용자의 개인정보를 안전하게 보호하기 위해 다음과 같은 조치를 취합니다:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>HTTPS 프로토콜을 통한 데이터 암호화</li>
                  <li>정기적인 보안 점검 및 업데이트</li>
                  <li>접근 권한 제한 및 관리</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. 문의사항</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  개인정보보호 정책에 대한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
                </p>
                <p>
                  이메일: privacy@xotd.net
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. 정책 변경</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  본 개인정보보호 정책은 법령이나 서비스 변경사항을 반영하기 위해 수정될 수 있습니다.
                </p>
                <p>
                  정책 변경 시 웹사이트를 통해 공지하겠습니다.
                </p>
                <p className="font-medium">
                  최종 수정일: 2024년 12월 21일
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 
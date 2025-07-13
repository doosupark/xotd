import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "이용약관 - XOTD",
  description: "XOTD MBTI 일본 이름 생성기의 이용약관을 확인하세요. 서비스 이용 조건, 지적재산권, 면책 조항, 광고 정책 등 서비스 이용 시 필요한 모든 약관을 상세히 안내합니다.",
  alternates: {
    canonical: 'https://xotd.net/terms',
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

export default function TermsPage() {
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
                "name": "이용약관",
                "item": "https://xotd.net/terms"
              }
            ]
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">이용약관</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제1조 (목적)</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  이 약관은 XOTD(이하 "회사")가 제공하는 MBTI 일본 이름 생성기 서비스(이하 "서비스")의 
                  이용 조건 및 절차, 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제2조 (정의)</h2>
              <div className="text-gray-600 space-y-4">
                <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"서비스"라 함은 회사가 제공하는 MBTI 일본 이름 생성기 및 관련 서비스를 의미합니다.</li>
                  <li>"이용자"라 함은 이 약관에 따라 회사가 제공하는 서비스를 받는 자를 의미합니다.</li>
                  <li>"콘텐츠"라 함은 서비스를 통해 제공되는 모든 정보, 텍스트, 이미지 등을 의미합니다.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제3조 (약관의 효력 및 변경)</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  이 약관은 서비스를 이용하는 모든 이용자에게 적용되며, 
                  서비스 이용 시 이 약관에 동의한 것으로 간주됩니다.
                </p>
                <p>
                  회사는 필요한 경우 이 약관을 변경할 수 있으며, 
                  변경된 약관은 웹사이트에 공지함으로써 효력이 발생합니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제4조 (서비스의 제공)</h2>
              <div className="text-gray-600 space-y-4">
                <p>회사는 다음과 같은 서비스를 제공합니다:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>MBTI 성격 유형별 일본 이름 추천 서비스</li>
                  <li>한글 이름의 일본어 변환 서비스</li>
                  <li>생성된 결과의 공유 기능</li>
                  <li>기타 회사가 정하는 서비스</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제5조 (이용자의 의무)</h2>
              <div className="text-gray-600 space-y-4">
                <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>서비스의 정상적인 운영을 방해하는 행위</li>
                  <li>다른 이용자의 개인정보를 수집하거나 이용하는 행위</li>
                  <li>서비스를 상업적 목적으로 무단 이용하는 행위</li>
                  <li>관련 법령에 위반되는 행위</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibent text-gray-800 mb-4">제6조 (지적재산권)</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  서비스에 사용된 콘텐츠, 이미지, 소프트웨어 등의 지적재산권은 회사에 귀속됩니다.
                </p>
                <p>
                  이용자는 서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 
                  복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용할 수 없습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제7조 (광고 게재)</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  회사는 서비스 운영을 위해 Google AdSense 등을 통한 광고를 게재할 수 있습니다.
                </p>
                <p>
                  이용자는 서비스 이용 시 노출되는 광고에 대해 동의한 것으로 간주됩니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제8조 (면책조항)</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  회사는 천재지변, 전쟁, 기타 이에 준하는 불가항력으로 인하여 
                  서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                </p>
                <p>
                  회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제9조 (분쟁해결)</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  서비스 이용과 관련하여 회사와 이용자 사이에 분쟁이 발생한 경우, 
                  상호 협의를 통해 해결하는 것을 원칙으로 합니다.
                </p>
                <p>
                  협의가 이루어지지 않을 경우, 대한민국 법령에 따라 해결합니다.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">제10조 (기타)</h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  이 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다.
                </p>
                <p className="font-medium">
                  시행일: 2024년 12월 21일
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 
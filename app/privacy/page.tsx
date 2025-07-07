import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "개인정보보호 정책 - XOTD",
  description: "XOTD 서비스의 개인정보보호 정책을 확인하세요.",
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

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        개인정보보호 정책
      </h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          최종 업데이트: 2024년 12월 21일
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            1. 개인정보 수집 항목
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>• XOTD는 사용자로부터 직접적으로 개인정보를 수집하지 않습니다.</p>
            <p>• 서비스 이용 시 자동으로 수집되는 정보:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>접속 로그, IP 주소, 쿠키</li>
              <li>브라우저 정보, OS 정보</li>
              <li>서비스 이용 기록</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            2. 개인정보 이용 목적
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>수집된 정보는 다음 목적으로만 이용됩니다:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>서비스 제공 및 운영</li>
              <li>서비스 개선 및 최적화</li>
              <li>통계 분석</li>
              <li>광고 제공 (Google AdSense)</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            3. Google Analytics 및 AdSense
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>본 웹사이트는 Google Analytics와 Google AdSense를 사용합니다:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Google Analytics: 웹사이트 이용 통계 분석</li>
              <li>Google AdSense: 맞춤형 광고 제공</li>
              <li>쿠키를 통해 사용자의 관심사에 기반한 광고 표시</li>
              <li>Google의 개인정보보호 정책이 적용됩니다</li>
            </ul>
            <p className="mt-4">
              Google의 개인정보보호 정책: 
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            4. 쿠키 이용
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>본 웹사이트는 다음과 같은 쿠키를 사용합니다:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>필수 쿠키: 웹사이트 기본 기능 제공</li>
              <li>분석 쿠키: Google Analytics 통계 수집</li>
              <li>광고 쿠키: Google AdSense 맞춤형 광고</li>
            </ul>
            <p className="mt-4">
              브라우저 설정을 통해 쿠키를 거부하실 수 있으나, 
              일부 서비스 이용에 제한이 있을 수 있습니다.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            5. 개인정보 보호
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>XOTD는 사용자의 개인정보 보호를 위해 다음과 같은 조치를 취합니다:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>HTTPS 암호화 통신</li>
              <li>최소한의 정보만 수집</li>
              <li>정기적인 보안 점검</li>
              <li>관련 법령 준수</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            6. 연락처
          </h2>
          <div className="text-gray-700 dark:text-gray-300">
            <p>개인정보보호 관련 문의사항이 있으시면 다음으로 연락해 주세요:</p>
            <p className="mt-2">
              이메일: privacy@12goblins.com<br />
              웹사이트: https://xotd.net
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            7. 정책 변경
          </h2>
          <div className="text-gray-700 dark:text-gray-300">
            <p>
              본 개인정보보호 정책은 관련 법령이나 서비스 정책 변경 시 수정될 수 있으며, 
              변경 시 웹사이트를 통해 공지하겠습니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 
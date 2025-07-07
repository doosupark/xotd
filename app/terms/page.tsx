import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "이용약관 - XOTD",
  description: "XOTD 서비스의 이용약관을 확인하세요.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        이용약관
      </h1>
      
      <div className="prose max-w-none dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          최종 업데이트: 2024년 12월 21일
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            1. 서비스 소개
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>
              XOTD는 MBTI 성격 유형에 기반하여 일본식 이름을 생성하고, 
              한글 이름을 일본어로 변환하는 서비스를 제공합니다.
            </p>
            <p>
              본 서비스는 오락 및 교육 목적으로 제공되며, 
              실제 이름 작명이나 법적 용도로는 사용하실 수 없습니다.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            2. 이용 조건
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>서비스 이용 시 다음 사항을 준수해야 합니다:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>관련 법령 및 본 약관 준수</li>
              <li>타인의 권리 침해 금지</li>
              <li>서비스의 정상적인 운영 방해 금지</li>
              <li>부정한 목적으로의 서비스 이용 금지</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            3. 서비스 제공 및 변경
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>• XOTD는 서비스의 안정적 제공을 위해 최선을 다하지만, 
               기술적 문제나 기타 사유로 서비스가 중단될 수 있습니다.</p>
            <p>• 서비스 개선을 위해 기능 추가, 수정, 삭제가 이루어질 수 있습니다.</p>
            <p>• 중요한 변경사항은 웹사이트를 통해 사전 공지하겠습니다.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            4. 지적재산권
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>• 본 서비스의 모든 콘텐츠는 XOTD 또는 해당 권리자에게 귀속됩니다.</p>
            <p>• 사용자는 개인적, 비상업적 용도로만 서비스를 이용할 수 있습니다.</p>
            <p>• 서비스의 무단 복제, 배포, 상업적 이용을 금지합니다.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            5. 면책 조항
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>• 본 서비스는 &quot;있는 그대로&quot; 제공되며, 
               특정 목적에의 적합성을 보장하지 않습니다.</p>
            <p>• 서비스 이용으로 인한 직간접적 손해에 대해 책임지지 않습니다.</p>
            <p>• 생성된 이름의 정확성, 적절성에 대해 보장하지 않습니다.</p>
            <p>• 제3자 서비스(Google AdSense 등)로 인한 문제에 대해 책임지지 않습니다.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            6. 광고 정책
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>• 본 서비스는 Google AdSense를 통해 광고를 게재합니다.</p>
            <p>• 광고는 사용자의 관심사와 관련된 내용으로 표시될 수 있습니다.</p>
            <p>• 광고 클릭 시 외부 사이트로 이동하며, 
               해당 사이트의 정책이 적용됩니다.</p>
            <p>• 광고 내용에 대한 책임은 광고주에게 있습니다.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            7. 개인정보보호
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>개인정보 처리에 관한 사항은 별도의 
              <a 
                href="/privacy" 
                className="text-blue-600 dark:text-blue-400 hover:underline mx-1"
              >
                개인정보보호 정책
              </a>
              을 따릅니다.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            8. 약관 변경
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-2">
            <p>• 본 약관은 관련 법령이나 서비스 정책 변경에 따라 수정될 수 있습니다.</p>
            <p>• 중요한 변경사항은 웹사이트를 통해 사전 공지하겠습니다.</p>
            <p>• 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단하시기 바랍니다.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            9. 연락처
          </h2>
          <div className="text-gray-700 dark:text-gray-300">
            <p>이용약관 관련 문의사항이 있으시면 다음으로 연락해 주세요:</p>
            <p className="mt-2">
              이메일: support@12goblins.com<br />
              웹사이트: https://xotd.net
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 
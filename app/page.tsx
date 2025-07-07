import MBTIPageClient from './components/MBTIPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MBTI 일본 이름 생성기 - 나만의 일본식 이름을 찾아보세요 | xotd.net",
  description: "MBTI와 성별을 선택하면 당신만을 위한 일본식 이름을 추천해드립니다. 일본 여행, 닉네임, SNS 등에서 활용하세요!",
  openGraph: {
    title: "MBTI 일본 이름 생성기",
    description: "MBTI와 성별로 나만의 일본식 이름을 추천받으세요.",
    images: [
      {
        url: "https://xotd.net/images/ci/ci_logo_small.webp",
        width: 1200,
        height: 630,
        alt: "MBTI 일본 이름 생성기",
      }
    ],
    url: 'https://xotd.net',
    type: 'website',
    siteName: 'XOTD',
  },
  twitter: {
    card: "summary_large_image",
    title: "MBTI 일본 이름 생성기",
    description: "MBTI와 성별로 나만의 일본식 이름을 추천받으세요.",
          images: ["https://xotd.net/images/ci/ci_logo_small.webp"],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* 메인 서비스 */}
      <MBTIPageClient />
      
      {/* 추가 콘텐츠 섹션 - SEO 및 애드센스 정책 준수 */}
      <section className="max-w-4xl mx-auto mt-16 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
            MBTI 일본 이름 생성기란?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                🎯 정확한 성격 분석
              </h3>
              <p className="leading-relaxed">
                16가지 MBTI 성격 유형별로 특별히 설계된 일본식 이름을 제공합니다. 
                각 성격의 특성과 매력을 반영한 의미 있는 이름을 생성해드립니다.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                🌸 문화적 정확성
              </h3>
              <p className="leading-relaxed">
                실제 일본에서 사용되는 이름들을 바탕으로 하여 
                문화적 정확성과 자연스러움을 보장합니다. 
                히라가나와 가타카나 표기도 함께 제공됩니다.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                💫 다양한 활용
              </h3>
              <p className="leading-relaxed">
                일본 여행 시 별명, 온라인 게임 캐릭터명, 
                SNS 닉네임, 창작 활동 등 다양한 목적으로 활용하실 수 있습니다.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                🔄 무제한 생성
              </h3>
              <p className="leading-relaxed">
                마음에 드는 이름을 찾을 때까지 무제한으로 새로운 이름을 생성하실 수 있습니다. 
                각 MBTI 유형별로 수십 가지 이름이 준비되어 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MBTI 유형별 특징 소개 */}
      <section className="max-w-4xl mx-auto mt-12 px-4">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
            MBTI 성격 유형별 특징
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { type: 'ENFP', name: '활발한 운동가', desc: '열정적이고 창의적인 성격' },
              { type: 'INFP', name: '열정적인 중재자', desc: '이상주의적이고 충성스러운 성격' },
              { type: 'ENFJ', name: '정의로운 사회운동가', desc: '카리스마 있고 영감을 주는 리더' },
              { type: 'INFJ', name: '선의의 옹호자', desc: '창의적이고 통찰력 있는 영감가' },
              { type: 'ENTP', name: '뜨거운 논쟁꾼', desc: '똑똑하고 호기심 많은 사상가' },
              { type: 'INTP', name: '논리적인 사색가', desc: '혁신적인 발명가 기질' },
              { type: 'ENTJ', name: '대담한 통솔자', desc: '대담하고 상상력 풍부한 강한 의지력' },
              { type: 'INTJ', name: '용의주도한 전략가', desc: '상상력이 풍부한 전략가' }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
                <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">{item.type}</div>
                <div className="font-medium text-gray-800 dark:text-gray-200 mb-1 text-sm">{item.name}</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 사용법 가이드 */}
      <section className="max-w-4xl mx-auto mt-12 px-4 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
            이용 방법
          </h2>
          
          <div className="space-y-4">
            {[
              { step: '1', title: '성별 선택', desc: '먼저 남성 또는 여성을 선택해주세요.' },
              { step: '2', title: 'MBTI 성향 선택', desc: 'E/I, N/S, T/F, J/P 중에서 본인의 성향을 차례로 선택하세요.' },
              { step: '3', title: '이름 생성', desc: '모든 선택이 완료되면 자동으로 맞춤 일본 이름이 생성됩니다.' },
              { step: '4', title: '결과 확인', desc: '생성된 이름의 한글, 히라가나, 가타카나 표기를 확인하고 공유하세요.' }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

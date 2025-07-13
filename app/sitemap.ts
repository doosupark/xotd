import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xotd.net'
  
  // 모든 MBTI 타입 정의
  const mbtiTypes = [
    'enfj', 'enfp', 'entj', 'entp', 'esfj', 'esfp', 'estj', 'estp',
    'infj', 'infp', 'intj', 'intp', 'isfj', 'isfp', 'istj', 'istp'
  ];
  
  // 각 MBTI 타입별로 대표 샘플 URL만 생성 (인덱스 1-5까지만)
  // 실제로는 1-30까지 존재하지만, 사이트맵에는 샘플만 포함
  const sampleResults: string[] = [];
  mbtiTypes.forEach(mbti => {
    for (let i = 1; i <= 5; i++) { // 30개 -> 5개로 축소
      sampleResults.push(`${mbti}-m-${i}`);
      sampleResults.push(`${mbti}-f-${i}`);
    }
  });
  
  const currentDate = new Date();
  
  const routes = [
    // 핵심 페이지들 (높은 우선순위)
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const, // 메인 페이지는 매일 체크
      priority: 1.0,
    },
    {
      url: `${baseUrl}/translator`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const, // 정책 페이지는 연간 업데이트
      priority: 0.2,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const, // 약관 페이지는 연간 업데이트
      priority: 0.2,
    },
    // 각 MBTI 타입별 대표 샘플 결과 페이지들 (총 160개 URL)
    // 실제로는 더 많은 결과가 있지만, 구글이 패턴을 학습할 수 있도록 샘플만 제공
    ...sampleResults.map(resultId => ({
      url: `${baseUrl}/result/${resultId}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8, // 우선순위 더 상향 조정 (결과 페이지가 핵심 콘텐츠)
    })),
  ];
  
  return routes;
} 
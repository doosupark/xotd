import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xotd.net'
  
  // 모든 MBTI 타입 정의
  const mbtiTypes = [
    'enfj', 'enfp', 'entj', 'entp', 'esfj', 'esfp', 'estj', 'estp',
    'infj', 'infp', 'intj', 'intp', 'isfj', 'isfp', 'istj', 'istp'
  ];
  
  // 각 MBTI 타입별로 남성/여성 샘플 결과 생성 (인덱스 1-5까지)
  const sampleResults: string[] = [];
  mbtiTypes.forEach(mbti => {
    for (let i = 1; i <= 5; i++) {
      sampleResults.push(`${mbti}-m-${i}`);
      sampleResults.push(`${mbti}-f-${i}`);
    }
  });
  
  const currentDate = new Date('2025-01-01'); // 명시적 날짜로 변경
  
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/translator`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // 모든 MBTI 타입별 샘플 결과 페이지들 (총 160개 URL)
    ...sampleResults.map(resultId => ({
      url: `${baseUrl}/result/${resultId}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
  
  return routes;
} 
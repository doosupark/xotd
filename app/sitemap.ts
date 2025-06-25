import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xotd.net'
  
  // 주요 MBTI 타입과 성별 조합 샘플 (검색 엔진이 인덱싱할 수 있도록)
  const sampleResults = [
    'enfp-m-1', 'enfp-f-1', 'intj-m-1', 'intj-f-1',
    'isfj-m-1', 'isfj-f-1', 'entp-m-1', 'entp-f-1',
    'infp-m-1', 'infp-f-1', 'estj-m-1', 'estj-f-1',
    'isfp-m-1', 'isfp-f-1', 'entj-m-1', 'entj-f-1',
  ];
  
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/translator`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // 샘플 결과 페이지들 추가
    ...sampleResults.map(resultId => ({
      url: `${baseUrl}/result/${resultId}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
  
  return routes;
} 
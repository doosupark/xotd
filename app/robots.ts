import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/favicon.ico',
          '/robots.txt',
          '/sitemap.xml'
        ],
        crawlDelay: 2, // 모든 봇에 대해 2초 지연
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/favicon.ico'
        ],
        crawlDelay: 1, // 구글봇은 1초 지연으로 더 빠르게
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/favicon.ico'
        ],
        crawlDelay: 3, // 빙봇은 3초 지연
      },
      {
        userAgent: 'NaverBot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/favicon.ico'
        ],
        crawlDelay: 2, // 네이버봇 2초 지연
      },
      {
        userAgent: 'DaumBot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/favicon.ico'
        ],
        crawlDelay: 2, // 다음봇 2초 지연
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/'
        ],
        crawlDelay: 1, // 페이스북 OG 크롤러 빠르게
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/'
        ],
        crawlDelay: 1, // 트위터봇 빠르게
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/'
        ],
        crawlDelay: 2, // 링크드인봇 2초 지연
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/'
        ],
        crawlDelay: 1, // 왓츠앱 OG 크롤러 빠르게
      },
      {
        userAgent: 'KakaoTalk-Bot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/'
        ],
        crawlDelay: 1, // 카카오톡봇 빠르게 (OG 이미지 중요)
      }
    ],
    sitemap: 'https://xotd.net/sitemap.xml',
    host: 'https://xotd.net',
  }
} 
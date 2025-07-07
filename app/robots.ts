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
        crawlDelay: 1,
      }
    ],
    sitemap: 'https://xotd.net/sitemap.xml',
    host: 'https://xotd.net',
  }
} 
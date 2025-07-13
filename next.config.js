const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // AWS Amplify 배포를 위한 기본 설정
  trailingSlash: false,
  poweredByHeader: false,
  
  // 이미지 최적화 설정
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 기본 경로 별칭 설정
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
  
  // 헤더 설정
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
      // 정적 자원에 대한 캐시 제어
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // 사이트맵과 robots.txt 캐시 설정
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate', // 1시간 캐시
          },
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate', // 24시간 캐시
          },
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
      // 결과 페이지 캐시 최적화
      {
        source: '/result/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800', // 24시간 캐시, 7일 stale
          },
        ],
      },
      // API 경로 크롤링 방지
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
  
  // 압축 활성화
  compress: true,
  
  // 실험적 기능 설정 (critters 오류로 인해 임시 비활성화)
  // experimental: {
  //   optimizeCss: true,
  //   optimizeServerReact: true,
  // },
};

module.exports = nextConfig; 
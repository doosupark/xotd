'use client';

import { useEffect } from 'react';

// AdSense 활성화
const ADSENSE_UNDER_REVIEW = false;

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

type AdType = 'vertical' | 'bottom' | 'auto';

interface AdBannerProps {
  type?: AdType;
  className?: string;
}

export default function AdBanner({ type = 'auto', className = '' }: AdBannerProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && !ADSENSE_UNDER_REVIEW) {
      try {
        // 광고가 이미 로드되었는지 확인 후 푸시
        setTimeout(() => {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }, 100);
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, []);

  // 심사 중에는 플레이스홀더만 표시
  if (ADSENSE_UNDER_REVIEW) {
    return (
      <div
        className={`w-full bg-gray-100 dark:bg-gray-800 text-gray-500 flex items-center justify-center text-sm rounded-lg border border-dashed border-gray-300 dark:border-gray-600 ${className}`}
        style={{
          minHeight: type === 'vertical' ? 250 : type === 'bottom' ? 80 : 60,
          margin: "16px 0"
        }}
      >
        광고 영역 (AdSense 심사 중) - {type}
      </div>
    );
  }

  // 광고 타입별 설정
  const getAdConfig = () => {
    switch (type) {
      case 'vertical':
        return {
          slot: '6326669344',
          style: { 
            display: 'block',
            minHeight: '250px',
            width: '100%'
          }
        };
      case 'bottom':
        return {
          slot: '6352968930',
          style: { 
            display: 'block',
            minHeight: '80px',
            width: '100%'
          }
        };
      default:
        return {
          slot: 'auto',
          style: { 
            display: 'block',
            minHeight: '60px',
            width: '100%'
          }
        };
    }
  };

  const adConfig = getAdConfig();

  // AdSense 광고 표시
  return (
    <div className={`adsense-container text-center my-4 ${className}`}>
      {/* 광고 라벨 - 애드센스 정책 준수 */}
      <div 
        className="text-xs text-gray-500 mb-2" 
        style={{ 
          fontSize: '11px', 
          color: '#888', 
          marginBottom: '8px',
          fontWeight: '400'
        }}
      >
        광고
      </div>
      
      {/* 실제 광고 영역 */}
      <div className="ad-wrapper" style={{ 
        background: '#fafafa',
        borderRadius: '8px',
        padding: '8px',
        border: '1px solid #f0f0f0'
      }}>
        <ins
          className="adsbygoogle"
          style={adConfig.style}
          data-ad-client="ca-pub-8759341144415814"
          data-ad-slot={adConfig.slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      
      {/* 추가적인 spacing */}
      <div style={{ height: '8px' }} />
    </div>
  );
} 
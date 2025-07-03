'use client';

import { useEffect } from 'react';

// AdSense 활성화
const ADSENSE_UNDER_REVIEW = false;

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

export default function AdBanner() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !ADSENSE_UNDER_REVIEW) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, []);
  // 심사 중에는 플레이스홀더만 표시
  if (ADSENSE_UNDER_REVIEW) {
    return (
      <div
        style={{
          width: "100%",
          minHeight: 60,
          background: "#f3f4f6",
          color: "#888",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          borderRadius: 8,
          margin: "16px 0",
          border: "1px dashed #ccc"
        }}
      >
        광고 영역 (AdSense 심사 중)
      </div>
    );
  }

  // AdSense 광고 표시
  return (
    <div className="adsense-container" style={{ textAlign: 'center', margin: '16px 0' }}>
      {/* 광고 라벨 */}
      <div className="text-xs text-gray-500 mb-1" style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>
        광고
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8759341144415814"
        data-ad-slot="auto"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
} 
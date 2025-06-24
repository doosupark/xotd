'use client';

import { useEffect } from 'react';

// AdSense 타입 선언
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdBanner() {
  useEffect(() => {
    // 광고 로드
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className="ad-banner">
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8759341144415814"
        data-ad-slot="6326669344"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
} 
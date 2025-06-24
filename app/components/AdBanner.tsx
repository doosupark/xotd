'use client';

import { useEffect, useState } from 'react';

// AdSense 타입 선언
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdBanner() {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    // 광고 로드
    try {
      console.log('AdSense loading...', window.adsbygoogle);
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      setAdLoaded(true);
      console.log('AdSense loaded successfully');
    } catch (error) {
      console.error('AdSense error:', error);
      setAdLoaded(false);
    }
  }, []);

  return (
    <div className="ad-banner" style={{ minHeight: '250px', border: '1px solid #ccc', padding: '10px' }}>
      {!adLoaded && (
        <div style={{ 
          background: '#f0f0f0', 
          padding: '20px', 
          textAlign: 'center',
          color: '#666'
        }}>
          광고 로딩 중... (AdSense: {adLoaded ? '로드됨' : '로드 중'})
        </div>
      )}
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
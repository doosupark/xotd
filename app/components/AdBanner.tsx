'use client';

// AdSense 심사 중이므로 임시로 비활성화
const ADSENSE_UNDER_REVIEW = true;

export default function AdBanner() {
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

  // 심사 완료 후 사용할 코드 (현재 비활성화)
  return null;
} 
// 공유 URL 생성 함수 (동적 라우트 사용)
export function createShortShareUrl(data: {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
}): string {
  const baseUrl = 'https://xotd.net/result';
  try {
    // 1. 데이터를 JSON 문자열로 변환
    const jsonString = JSON.stringify(data);
    
    // 2. URL-safe Base64로 인코딩
    // (encodeURIComponent -> btoa 순서가 중요)
    const encodedId = btoa(encodeURIComponent(jsonString));
    
    return `${baseUrl}/${encodedId}`;
  } catch (error) {
    console.error('Failed to create share URL:', error);
    // 에러 발생 시 fallback URL
    return 'https://xotd.net';
  }
}

// OG 이미지 URL 생성 함수
export function createOGImageUrl(data: {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
}): string {
  // 한글과 일본어 문자를 명시적으로 인코딩
  const params = new URLSearchParams();
  params.set('mbti', data.mbti);
  params.set('gender', data.gender);
  params.set('korean', data.korean);
  params.set('hiragana', data.hiragana);
  params.set('katakana', data.katakana);
  params.set('index', data.index.toString());
  
  return `https://xotd.net/api/og-image?${params.toString()}`;
} 
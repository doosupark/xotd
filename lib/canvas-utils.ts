// 공유 URL 생성 함수 (동적 라우트 사용)
export function createShortShareUrl(data: {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
}): string {
  // 환경에 따라 baseUrl 결정
  const baseUrl = typeof window !== 'undefined' && window.location.origin 
    ? `${window.location.origin}/result`
    : process.env.NODE_ENV === 'production' 
      ? 'https://xotd.net/result'
      : 'http://localhost:3000/result';
      
  try {
    // 1. 데이터를 JSON 문자열로 변환
    const jsonString = JSON.stringify(data);
    
    // 2. 유니코드 안전 Base64 인코딩
    // UTF-8 → Base64 → URL 인코딩 순서
    const utf8Bytes = new TextEncoder().encode(jsonString);
    const base64String = btoa(String.fromCharCode(...utf8Bytes));
    const encodedId = encodeURIComponent(base64String);
    
    return `${baseUrl}/${encodedId}`;
  } catch (error) {
    console.error('Failed to create share URL:', error);
    // 에러 발생 시 fallback URL
    return typeof window !== 'undefined' && window.location.origin 
      ? window.location.origin
      : process.env.NODE_ENV === 'production' 
        ? 'https://xotd.net'
        : 'http://localhost:3000';
  }
}

 
// 공유 URL 생성 함수 (동적 OG 이미지 사용)
export function createShortShareUrl(data: {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
}): string {
  // 동적 OG 이미지 API를 사용하는 직접 쿼리 파라미터 방식
  const baseUrl = 'https://xotd.net';
  const params = new URLSearchParams();
  params.set('mbti', data.mbti);
  params.set('gender', data.gender);
  params.set('korean', data.korean);
  params.set('hiragana', data.hiragana);
  params.set('katakana', data.katakana);
  params.set('index', data.index.toString());
  
  return `${baseUrl}?${params.toString()}`;
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
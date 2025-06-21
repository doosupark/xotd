// 공유 URL 생성 함수 (동적 OG 이미지 사용)
export function createShortShareUrl(data: {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
  imageUrl: string;
}): string {
  // 동적 OG 이미지 API를 사용하는 직접 쿼리 파라미터 방식
  const baseUrl = 'https://xotd.net';
  const params = new URLSearchParams({
    mbti: data.mbti,
    gender: data.gender,
    hiragana: data.hiragana,
    katakana: data.katakana,
    korean: data.korean,
    index: data.index.toString()
  });
  
  return `${baseUrl}?${params.toString()}`;
} 
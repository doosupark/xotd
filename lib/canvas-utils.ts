// 간단한 공유 URL 생성 함수
export function createShareUrl(data: {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
}): string {
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

// 더 짧은 URL 생성 함수 (base64 인코딩 사용)
export function createShortShareUrl(data: {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
  imageUrl: string;
}): string {
  const dataString = JSON.stringify({
    m: data.mbti,
    g: data.gender,
    h: data.hiragana,
    k: data.katakana,
    n: data.korean,
    i: data.index
  });
  
  // base64 인코딩으로 URL 단축
  const encoded = Buffer.from(dataString).toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
  
  return `https://xotd.net/s/${encoded}`;
} 
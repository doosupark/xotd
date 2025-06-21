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
  // 한글을 안전하게 인코딩
  const dataString = JSON.stringify({
    m: data.mbti,
    g: data.gender,
    h: encodeURIComponent(data.hiragana),
    k: encodeURIComponent(data.katakana),
    n: encodeURIComponent(data.korean),
    i: data.index
  });
  
  // base64 인코딩으로 URL 단축
  const encoded = Buffer.from(dataString).toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
  
  return `https://xotd.net/?share=${encoded}`;
}

export type DecodedData = {
  mbti: string;
  gender: 'male' | 'female';
  hiragana: string;
  katakana: string;
  korean: string;
  index: number;
};

export function decodeShareData(encoded: string): DecodedData | null {
  try {
    const padded = encoded.replace(/-/g, '+').replace(/_/g, '/') + '=='.substring(0, (3 * encoded.length) % 4);
    const decodedString = Buffer.from(padded, 'base64').toString('utf-8');
    const data = JSON.parse(decodedString);
    if (!data.m || !data.g || !data.h || !data.k || !data.n || typeof data.i === 'undefined') {
      return null;
    }
    return {
      mbti: data.m,
      gender: data.g,
      hiragana: decodeURIComponent(data.h),
      katakana: decodeURIComponent(data.k),
      korean: decodeURIComponent(data.n),
      index: parseInt(data.i, 10),
    };
  } catch (error) {
    console.error("Failed to decode share data:", error);
    return null;
  }
} 
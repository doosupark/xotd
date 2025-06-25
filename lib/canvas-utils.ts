// 극단적으로 짧은 공유 URL 생성 함수
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
    // 극단적으로 짧은 ID 생성: {mbti}-{gender첫글자}-{index}
    const genderCode = data.gender === 'male' ? 'm' : 'f';
    const shortId = `${data.mbti.toLowerCase()}-${genderCode}-${data.index}`;
    
    // 디버깅: 어떤 데이터가 전달되는지 확인
    console.log('createShortShareUrl received:', data);
    console.log('Generated short ID:', shortId);
    
    return `${baseUrl}/${shortId}`;
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

 
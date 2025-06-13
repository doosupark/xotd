import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mbti = (searchParams.get('mbti') || 'ENTP').toUpperCase();
  const name = searchParams.get('name') || '키무라 료';
  const hiragana = searchParams.get('hiragana') || 'きむら りょう';
  const gender = searchParams.get('gender') || 'male';
  const img = searchParams.get('img') || 'entp.png';

  // 이미지 경로 결정
  const imgUrl = `https://xotd.net/images/${gender}/${img}`;
  const ciUrl = 'https://xotd.net/images/ci/ci_logo_small.png';

  return new ImageResponse(
    (
      <div
        style={{
          width: 500,
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'white',
          fontFamily: 'sans-serif',
          border: '2px solid #eee',
        }}
      >
        {/* CI */}
        <img src={ciUrl} width={40} style={{ marginTop: 24 }} />
        {/* MBTI 안내 */}
        <div style={{ fontSize: 24, fontWeight: 700, color: '#7C3AED', margin: '12px 0 0 0', letterSpacing: 1 }}>
          {mbti} 당신의 일본 이름은?
        </div>
        {/* 결과 이미지 */}
        <img src={imgUrl} width={120} height={120} style={{ margin: '16px 0' }} />
        {/* 히라가나 + 한글 이름 */}
        <div style={{ textAlign: 'center', margin: '0 0 8px 0' }}>
          <div style={{ fontSize: 22, color: '#222', fontWeight: 600 }}>{hiragana}</div>
          <div style={{ fontSize: 20, color: '#222', fontWeight: 700, marginTop: 4 }}>{name}</div>
        </div>
        {/* 콜투액션 */}
        <div style={{ fontSize: 18, color: '#7C3AED', fontWeight: 600, marginBottom: 24 }}>
          MBTI로 일본이름 만들러 가기
        </div>
      </div>
    ),
    {
      width: 500,
      height: 500,
    }
  );
} 
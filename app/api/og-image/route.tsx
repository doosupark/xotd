import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

// Node.js Runtime 사용
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const mbti = searchParams.get('mbti') || 'ISFP';
    const gender = searchParams.get('gender') || 'male';
    const korean = searchParams.get('korean') || '이름';
    const hiragana = searchParams.get('hiragana') || 'なまえ';
    const katakana = searchParams.get('katakana') || 'ナマエ';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              border: '2px solid #e2e8f0',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              maxWidth: '800px',
              width: '90%',
            }}
          >
            {/* MBTI 타입 */}
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#1e40af',
                marginBottom: '20px',
              }}
            >
              {mbti}
            </div>
            
            {/* 한국어 이름 */}
            <div
              style={{
                fontSize: '40px',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '16px',
              }}
            >
              {korean}
            </div>
            
            {/* 히라가나 */}
            <div
              style={{
                fontSize: '28px',
                color: '#6b7280',
                marginBottom: '8px',
              }}
            >
              {hiragana}
            </div>
            
            {/* 카타카나 */}
            <div
              style={{
                fontSize: '28px',
                color: '#6b7280',
                marginBottom: '24px',
              }}
            >
              {katakana}
            </div>
            
            {/* 브랜드 로고/텍스트 */}
            <div
              style={{
                fontSize: '20px',
                color: '#9ca3af',
                marginTop: '20px',
              }}
            >
              MBTI 일본 이름 생성기
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`Failed to generate OG image: ${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 
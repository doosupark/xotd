import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';
import React from 'react';

// Node.js Runtime 사용
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const mbti = searchParams.get('mbti');
    const gender = searchParams.get('gender');
    const korean = searchParams.get('korean');
    const hiragana = searchParams.get('hiragana');
    const katakana = searchParams.get('katakana');
    const index = searchParams.get('index');
    const title = searchParams.get('title');
    const description = searchParams.get('description');

    // 디버깅용 로그
    console.log('OG Image API called with params:', {
      mbti, gender, korean, hiragana, katakana, index, title, description
    });

    // 기본 OG 이미지 (MBTI 생성기 홈페이지)
    if (title && description) {
      console.log('Generating basic OG image with title:', title);
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
              backgroundColor: '#f0f9ff',
              backgroundImage: 'linear-gradient(45deg, #f0f9ff 0%, #e0e7ff 100%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '80px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
                maxWidth: '1080px',
                width: '90%',
                height: '80%',
              }}
            >
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '20px',
                  textAlign: 'center',
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  fontSize: '24px',
                  color: '#6b7280',
                  marginBottom: '30px',
                  textAlign: 'center',
                }}
              >
                {description}
              </p>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#3b82f6',
                }}
              >
                xotd.net
              </p>
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        },
      );
    }
    // MBTI 결과 OG 이미지
    else if (mbti && gender && korean && hiragana && katakana && index) {
      console.log('Generating MBTI result OG image for:', korean, mbti, gender);
      
      return new ImageResponse(
        (
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              backgroundColor: '#f0f9ff',
              backgroundImage: 'linear-gradient(45deg, #f0f9ff 0%, #e0e7ff 100%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                backgroundColor: 'white',
                borderRadius: '20px',
                margin: '60px',
                padding: '40px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
                width: '100%',
                height: '100%',
              }}
            >
              {/* 왼쪽: 캐릭터 영역 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fafafa',
                  border: '3px solid #e5e7eb',
                  borderRadius: '10px',
                  width: '450px',
                  height: '450px',
                  marginRight: '60px',
                  position: 'relative',
                }}
              >
                {/* TODO: 여기에 실제 결과 이미지가 들어갈 예정 */}
                <div
                  style={{
                    fontSize: '48px',
                    color: '#9ca3af',
                    textAlign: 'center',
                  }}
                >
                  결과 이미지
                </div>
                
                {/* 히라가나를 이미지 하단에 배치 */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#4b5563',
                  }}
                >
                  {hiragana}
                </div>
              </div>
              
              {/* 오른쪽: 텍스트 영역 */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  flex: 1,
                }}
              >
                {/* 한글 이름 (150% 더 크게) */}
                <h1
                  style={{
                    fontSize: '126px', // 84px * 1.5 = 126px
                    fontWeight: 'bold',
                    color: '#111827',
                    marginBottom: '60px',
                    lineHeight: 1.1,
                  }}
                >
                  {korean}
                </h1>
                
                {/* 카타카나 정보 */}
                <p
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#374151',
                    marginBottom: '80px',
                  }}
                >
                  カタカナ: {katakana}
                </p>
                
                {/* MBTI 성향과 문구 (줄간격 좁게) */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px', // 줄간격 좁게
                  }}
                >
                  <p
                    style={{
                      fontSize: '42px',
                      fontWeight: 'bold',
                      color: '#8b5cf6',
                      margin: 0,
                    }}
                  >
                    {mbti}
                  </p>
                  <p
                    style={{
                      fontSize: '28px',
                      color: '#6b7280',
                      margin: 0,
                    }}
                  >
                    인생은 즐기는 거야!
                  </p>
                </div>
              </div>
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        },
      );
    }
    // 기본 이미지 (파라미터가 없는 경우)
    else {
      console.log('Generating default OG image - no params received');
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
              backgroundColor: '#f0f9ff',
              backgroundImage: 'linear-gradient(45deg, #f0f9ff 0%, #e0e7ff 100%)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                borderRadius: '20px',
                padding: '80px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
                maxWidth: '1080px',
                width: '90%',
                height: '80%',
              }}
            >
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '20px',
                  textAlign: 'center',
                }}
              >
                MBTI 일본 이름 생성기
              </h1>
              <p
                style={{
                  fontSize: '24px',
                  color: '#6b7280',
                  marginBottom: '30px',
                  textAlign: 'center',
                }}
              >
                나만의 일본식 이름을 찾아보세요
              </p>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#3b82f6',
                }}
              >
                xotd.net
              </p>
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        },
      );
    }
  } catch (error) {
    console.error('Error generating OG image:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response('Error generating OG image: ' + errorMessage, { status: 500 });
  }
} 
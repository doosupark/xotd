import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const mbti = searchParams.get('mbti');
  const gender = searchParams.get('gender');
  const korean = searchParams.get('korean');
  const hiragana = searchParams.get('hiragana');
  const katakana = searchParams.get('katakana');
  const index = searchParams.get('index');
  const title = searchParams.get('title');
  const description = searchParams.get('description');

  // Canvas 크기 설정
  const width = 1200;
  const height = 630;

  // Canvas 생성
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return new Response('Failed to create canvas context', { status: 500 });
  }

  // 배경 그라데이션
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#667eea');
  gradient.addColorStop(1, '#764ba2');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // 메인 컨테이너
  const containerX = 60;
  const containerY = 60;
  const containerWidth = width - 120;
  const containerHeight = height - 120;

  // 흰색 배경 박스
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 10;
  ctx.fillRect(containerX, containerY, containerWidth, containerHeight);
  ctx.shadowColor = 'transparent';

  // 기본 OG 이미지 (MBTI 생성기 홈페이지)
  if (title && description) {
    // 제목
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(title, width / 2, containerY + 120);

    // 설명
    ctx.fillStyle = '#6b7280';
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText(description, width / 2, containerY + 180);

    // 사이트 URL
    ctx.fillStyle = '#3b82f6';
    ctx.font = 'bold 20px Arial, sans-serif';
    ctx.fillText('xotd.net', width / 2, containerY + 240);
  }
  // MBTI 결과 OG 이미지
  else if (mbti && gender && korean && hiragana && katakana && index) {
    const genderText = gender === 'male' ? '남성' : '여성';
    
    // MBTI 및 성별
    ctx.fillStyle = '#3b82f6';
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${mbti} ${genderText}`, width / 2, containerY + 80);

    // 한국어 이름
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 56px Arial, sans-serif';
    ctx.fillText(korean, width / 2, containerY + 160);

    // 히라가나와 카타카나
    const centerX = width / 2;
    const textY = containerY + 220;

    // 히라가나
    ctx.fillStyle = '#6b7280';
    ctx.font = '20px Arial, sans-serif';
    ctx.fillText('히라가나', centerX - 150, textY);

    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.fillText(hiragana, centerX - 150, textY + 40);

    // 카타카나
    ctx.fillStyle = '#6b7280';
    ctx.font = '20px Arial, sans-serif';
    ctx.fillText('카타카나', centerX + 150, textY);

    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.fillText(katakana, centerX + 150, textY + 40);

    // 사이트 URL
    ctx.fillStyle = '#3b82f6';
    ctx.font = 'bold 20px Arial, sans-serif';
    ctx.fillText('xotd.net', width / 2, containerY + 300);
  }
  // 기본 이미지 (파라미터가 없는 경우)
  else {
    // 제목
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('MBTI 일본 이름 생성기', width / 2, containerY + 120);

    // 설명
    ctx.fillStyle = '#6b7280';
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText('나만의 일본식 이름을 찾아보세요', width / 2, containerY + 180);

    // 사이트 URL
    ctx.fillStyle = '#3b82f6';
    ctx.font = 'bold 20px Arial, sans-serif';
    ctx.fillText('xotd.net', width / 2, containerY + 240);
  }

  // Canvas를 이미지로 변환
  const imageBuffer = await canvas.convertToBlob();
  const arrayBuffer = await imageBuffer.arrayBuffer();

  return new Response(arrayBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
} 
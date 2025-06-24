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

  // 배경 그라데이션 (더 밝고 부드러운 색상)
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f0f9ff');
  gradient.addColorStop(1, '#e0e7ff');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // 메인 컨테이너
  const containerX = 60;
  const containerY = 60;
  const containerWidth = width - 120;
  const containerHeight = height - 120;

  // 흰색 배경 박스 (더 부드러운 그림자)
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.08)';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 15;
  ctx.beginPath();
  ctx.roundRect(containerX, containerY, containerWidth, containerHeight, 20);
  ctx.fill();
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
    
    // 레이아웃: 왼쪽 캐릭터 영역 (정사각형), 오른쪽 텍스트 영역
    const leftBoxX = containerX + 40;
    const leftBoxY = containerY + 40;
    const leftBoxSize = containerHeight - 80; // 정사각형
    
    const rightAreaX = leftBoxX + leftBoxSize + 60;
    const rightAreaY = containerY + 40;
    const rightAreaWidth = containerWidth - leftBoxSize - 140;
    
    // 왼쪽: 캐릭터 배경 (둥근 사각형, 더 밝은 색상)
    ctx.fillStyle = '#fafafa';
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(leftBoxX, leftBoxY, leftBoxSize, leftBoxSize, 25);
    ctx.fill();
    ctx.stroke();
    
    // 캐릭터 영역에 실제 MBTI 이미지 로드 시도 (fallback으로 이모지 사용)
    try {
      // 실제 환경에서는 이미지 로드가 복잡하므로, 일단 텍스트로 표현
      ctx.fillStyle = '#6366f1';
      ctx.font = 'bold 64px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(mbti, leftBoxX + leftBoxSize / 2, leftBoxY + leftBoxSize / 2 - 20);
    } catch (error) {
      // fallback: MBTI 텍스트 표시
      ctx.fillStyle = '#6366f1';
      ctx.font = 'bold 64px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(mbti, leftBoxX + leftBoxSize / 2, leftBoxY + leftBoxSize / 2 - 20);
    }
    
    // 캐릭터 영역 하단에 히라가나
    ctx.fillStyle = '#4b5563';
    ctx.font = 'bold 28px Arial, sans-serif';
    ctx.fillText(hiragana, leftBoxX + leftBoxSize / 2, leftBoxY + leftBoxSize - 40);
    
    // 오른쪽: 한국어 이름 (큰 제목) - 더 큰 폰트
    ctx.fillStyle = '#111827';
    ctx.font = 'bold 84px Arial, sans-serif';
    ctx.textAlign = 'left';
    const nameY = rightAreaY + 100;
    ctx.fillText(korean, rightAreaX, nameY);
    
    // MBTI 타입과 성별 정보 - 보라색으로 강조
    ctx.fillStyle = '#8b5cf6';
    ctx.font = 'bold 42px Arial, sans-serif';
    ctx.fillText(`${mbti} ${genderText}`, rightAreaX, nameY + 70);
    
    // 부제목 - 더 부드러운 회색
    ctx.fillStyle = '#6b7280';
    ctx.font = '28px Arial, sans-serif';
    ctx.fillText('인생은 즐기는 거야!', rightAreaX, nameY + 120);
    
    // 카타카나 - 작은 정보
    ctx.fillStyle = '#374151';
    ctx.font = 'bold 24px Arial, sans-serif';
    ctx.fillText(`カタカナ: ${katakana}`, rightAreaX, nameY + 170);
    
    // 사이트 정보 (하단) - 더 세련된 스타일
    ctx.fillStyle = '#3b82f6';
    ctx.font = 'bold 22px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('xotd.net - MBTI 일본 이름 생성기', width / 2, containerY + containerHeight - 25);
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
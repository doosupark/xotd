import { NextRequest } from 'next/server';

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

    // Canvas 크기 설정
    const width = 1200;
    const height = 630;

    // Canvas 생성
    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Failed to create canvas context');
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

    // 흰색 배경 박스 (더 부드러운 그림자) - roundRect 대신 일반 사각형 사용
    ctx.fillStyle = 'white';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.08)';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 15;
    ctx.fillRect(containerX, containerY, containerWidth, containerHeight);
    ctx.shadowColor = 'transparent';

    // 기본 OG 이미지 (MBTI 생성기 홈페이지)
    if (title && description) {
      console.log('Generating basic OG image with title:', title);
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
      console.log('Generating MBTI result OG image for:', korean, mbti, gender);
      const genderText = gender === 'male' ? '남성' : '여성';
      
      // 레이아웃: 왼쪽 캐릭터 영역 (정사각형), 오른쪽 텍스트 영역
      const leftBoxX = containerX + 40;
      const leftBoxY = containerY + 40;
      const leftBoxSize = containerHeight - 80; // 정사각형
      
      const rightAreaX = leftBoxX + leftBoxSize + 60;
      const rightAreaY = containerY + 40;
      const rightAreaWidth = containerWidth - leftBoxSize - 140;
      
      // 왼쪽: 캐릭터 배경 (사각형, 더 밝은 색상)
      ctx.fillStyle = '#fafafa';
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 3;
      ctx.fillRect(leftBoxX, leftBoxY, leftBoxSize, leftBoxSize);
      ctx.strokeRect(leftBoxX, leftBoxY, leftBoxSize, leftBoxSize);
      
      // 캐릭터 영역에 MBTI 텍스트 표시
      ctx.fillStyle = '#6366f1';
      ctx.font = 'bold 64px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(mbti || 'MBTI', leftBoxX + leftBoxSize / 2, leftBoxY + leftBoxSize / 2 - 20);
      
      // 캐릭터 영역 하단에 히라가나
      ctx.fillStyle = '#4b5563';
      ctx.font = 'bold 28px Arial, sans-serif';
      ctx.fillText(hiragana || 'ひらがな', leftBoxX + leftBoxSize / 2, leftBoxY + leftBoxSize - 40);
      
      // 오른쪽: 한국어 이름 (큰 제목) - 더 큰 폰트
      ctx.fillStyle = '#111827';
      ctx.font = 'bold 84px Arial, sans-serif';
      ctx.textAlign = 'left';
      const nameY = rightAreaY + 100;
      ctx.fillText(korean || '이름', rightAreaX, nameY);
      
      // MBTI 타입과 성별 정보 - 보라색으로 강조
      ctx.fillStyle = '#8b5cf6';
      ctx.font = 'bold 42px Arial, sans-serif';
      ctx.fillText(`${mbti || 'MBTI'} ${genderText}`, rightAreaX, nameY + 70);
      
      // 부제목 - 더 부드러운 회색
      ctx.fillStyle = '#6b7280';
      ctx.font = '28px Arial, sans-serif';
      ctx.fillText('인생은 즐기는 거야!', rightAreaX, nameY + 120);
      
      // 카타카나 - 작은 정보
      ctx.fillStyle = '#374151';
      ctx.font = 'bold 24px Arial, sans-serif';
      ctx.fillText(`カタカナ: ${katakana || 'カタカナ'}`, rightAreaX, nameY + 170);
      
      // 사이트 정보 (하단) - 더 세련된 스타일
      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 22px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('xotd.net - MBTI 일본 이름 생성기', width / 2, containerY + containerHeight - 25);
    }
    // 기본 이미지 (파라미터가 없는 경우)
    else {
      console.log('Generating default OG image - no params received');
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

    console.log('OG image generated successfully, size:', arrayBuffer.byteLength);

    return new Response(arrayBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating OG image', { status: 500 });
  }
} 
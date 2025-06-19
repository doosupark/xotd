const { createCanvas, loadImage } = require('canvas');
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// MBTI 타입들
const MBTI_TYPES = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESFP', 'ENFP', 'ENTP',
  'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
];

const GENDERS = ['male', 'female'];

// 이름 데이터 로드
async function loadNameData() {
  const maleData = JSON.parse(await fs.readFile('./public/data/male_names.json', 'utf8'));
  const femaleData = JSON.parse(await fs.readFile('./public/data/female_names.json', 'utf8'));
  return { male: maleData, female: femaleData };
}

// OG 이미지 생성 함수
async function generateOGImage(mbti, gender, nameInfo) {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  // 배경 그라데이션
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#f8fafc');
  gradient.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);

  // MBTI 이미지 로드 및 그리기
  try {
    const imagePath = `./public/images/${gender}/${mbti.toLowerCase()}.png`;
    const image = await loadImage(imagePath);
    const imageSize = 300;
    const imageX = 100;
    const imageY = 165;
    
    // 이미지 원형 마스크
    ctx.save();
    ctx.beginPath();
    ctx.arc(imageX + imageSize/2, imageY + imageSize/2, imageSize/2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(image, imageX, imageY, imageSize, imageSize);
    ctx.restore();
  } catch (error) {
    console.error(`이미지 로드 실패 (${mbti} ${gender}):`, error.message);
    // 이미지가 없으면 기본 원형 그리기
    ctx.save();
    ctx.beginPath();
    ctx.arc(250, 315, 150, 0, Math.PI * 2);
    ctx.fillStyle = '#8b5cf6';
    ctx.fill();
    ctx.restore();
  }

  // 텍스트 스타일 설정
  ctx.textAlign = 'left';
  
  // 히라가나 이름 (큰 글씨)
  ctx.font = 'bold 72px Arial, sans-serif';
  ctx.fillStyle = '#1f2937';
  ctx.fillText(nameInfo.hiragana, 450, 280);

  // 한글 이름 (중간 글씨)
  ctx.font = 'bold 48px Arial, sans-serif';
  ctx.fillStyle = '#374151';
  ctx.fillText(nameInfo.korean, 450, 350);

  // 가타카나 (작은 글씨, 괄호)
  ctx.font = '32px Arial, sans-serif';
  ctx.fillStyle = '#6b7280';
  ctx.fillText(`(${nameInfo.katakana})`, 450, 390);

  // MBTI 타입 표시
  ctx.font = 'bold 36px Arial, sans-serif';
  ctx.fillStyle = '#8b5cf6';
  ctx.fillText(mbti, 450, 450);

  // 사이트 로고/텍스트
  ctx.font = '24px Arial, sans-serif';
  ctx.fillStyle = '#9ca3af';
  ctx.fillText('MBTI 일본 이름 생성기', 450, 520);
  ctx.fillText('xotd.net', 450, 550);

  // PNG 형식으로 반환
  return canvas.toBuffer('image/png');
}

// 메인 실행 함수
async function generateAllOGImages() {
  try {
    console.log('이름 데이터 로딩 중...');
    const allNameData = await loadNameData();
    
    // OG 이미지 저장 디렉토리 생성
    const ogDir = './public/images/og-results';
    await fs.mkdir(ogDir, { recursive: true });
    
    console.log('OG 이미지 생성 시작...');
    let successCount = 0;
    let errorCount = 0;
    
    for (const mbti of MBTI_TYPES) {
      for (const gender of GENDERS) {
        const names = allNameData[gender][mbti];
        if (!names || names.length === 0) {
          console.warn(`이름 데이터 없음: ${mbti} ${gender}`);
          continue;
        }
        for (let i = 0; i < names.length; i++) {
          const nameInfo = names[i];
          try {
            console.log(`생성 중: ${mbti} ${gender} [${i}] - ${nameInfo.korean}`);
            // Canvas로 이미지 생성
            const pngBuffer = await generateOGImage(mbti, gender, nameInfo);
            // Sharp로 WebP 변환
            const webpBuffer = await sharp(pngBuffer)
              .webp({ quality: 80 })
              .toBuffer();
            // 파일 저장
            const filename = `${mbti.toLowerCase()}-${gender}-${i}.webp`;
            const filepath = path.join(ogDir, filename);
            await fs.writeFile(filepath, webpBuffer);
            successCount++;
            console.log(`✅ 완료: ${filename}`);
          } catch (error) {
            errorCount++;
            console.error(`❌ 오류 (${mbti} ${gender} [${i}]):`, error.message);
          }
        }
      }
    }
    
    console.log(`\n🎉 완료! 성공: ${successCount}개, 실패: ${errorCount}개`);
    console.log(`이미지 저장 위치: ${ogDir}`);
    
  } catch (error) {
    console.error('스크립트 실행 오류:', error);
  }
}

// 스크립트 실행
if (require.main === module) {
  generateAllOGImages();
}

module.exports = { generateAllOGImages }; 
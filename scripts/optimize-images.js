const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 개별 성향 이미지들 (기존 webp 크기 50% 축소용)
const individualTraits = ['e', 'i', 'n', 's', 't', 'f', 'j', 'p'];

// MBTI 전체 조합 이미지들 (PNG → WebP 변환용)
const mbtiCombinations = [
  'enfj', 'enfp', 'entj', 'entp', 'esfj', 'esfp', 'estj', 'estp',
  'infj', 'infp', 'intj', 'intp', 'isfj', 'isfp', 'istj', 'istp'
];

// CI 로고 이미지
const ciImages = ['ci_logo_small.png'];

const maleDir = path.join(__dirname, '../public/images/male');
const femaleDir = path.join(__dirname, '../public/images/female');
const ciDir = path.join(__dirname, '../public/images/ci');

async function optimizeImage(inputPath, outputPath, quality = 60, maxWidth = 200, maxHeight = 200) {
  try {
    await sharp(inputPath)
      .resize(maxWidth, maxHeight, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ 
        quality,
        effort: 6 // 최대 압축 노력
      })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${(stats.size / 1024).toFixed(1)}KB)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function resizeExistingWebp(inputPath, outputPath, maxWidth = 100, maxHeight = 100) {
  try {
    await sharp(inputPath)
      .resize(maxWidth, maxHeight, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ 
        quality: 70,
        effort: 6
      })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${(stats.size / 1024).toFixed(1)}KB)`);
  } catch (error) {
    console.error(`❌ Error resizing ${inputPath}:`, error.message);
  }
}

async function replaceFile(oldPath, newPath) {
  try {
    // Windows에서 파일이 사용 중일 수 있으므로 잠시 대기
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (fs.existsSync(oldPath)) {
      fs.unlinkSync(oldPath);
    }
    fs.renameSync(newPath, oldPath);
  } catch (error) {
    console.error(`❌ Error replacing file: ${error.message}`);
    // 실패해도 새 파일은 남겨둠
  }
}

async function optimizeAllImages() {
  console.log('🔄 Starting comprehensive image optimization...\n');

  // 1. MBTI 전체 조합 PNG → WebP 변환 (Male)
  console.log('📁 Converting male MBTI combinations (PNG → WebP):');
  for (const mbti of mbtiCombinations) {
    const inputPath = path.join(maleDir, `${mbti}.png`);
    const outputPath = path.join(maleDir, `${mbti}.webp`);
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath, 65, 200, 200);
    } else {
      console.log(`⚠️  ${mbti}.png not found in male directory`);
    }
  }

  // 2. MBTI 전체 조합 PNG → WebP 변환 (Female)
  console.log('\n📁 Converting female MBTI combinations (PNG → WebP):');
  for (const mbti of mbtiCombinations) {
    const inputPath = path.join(femaleDir, `${mbti}.png`);
    const outputPath = path.join(femaleDir, `${mbti}.webp`);
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath, 70, 200, 200);
    } else {
      console.log(`⚠️  ${mbti}.png not found in female directory`);
    }
  }

  // 3. 개별 성향 WebP 크기 50% 축소 (Male)
  console.log('\n📁 Resizing male individual traits (50% smaller):');
  for (const trait of individualTraits) {
    const inputPath = path.join(maleDir, `${trait}.webp`);
    const tempPath = path.join(maleDir, `${trait}_temp.webp`);
    
    if (fs.existsSync(inputPath)) {
      await resizeExistingWebp(inputPath, tempPath, 75, 75);
      // 원본 파일 교체
      await replaceFile(inputPath, tempPath);
    } else {
      console.log(`⚠️  ${trait}.webp not found in male directory`);
    }
  }

  // 4. 개별 성향 WebP 크기 50% 축소 (Female)
  console.log('\n📁 Resizing female individual traits (50% smaller):');
  for (const trait of individualTraits) {
    const inputPath = path.join(femaleDir, `${trait}.webp`);
    const tempPath = path.join(femaleDir, `${trait}_temp.webp`);
    
    if (fs.existsSync(inputPath)) {
      await resizeExistingWebp(inputPath, tempPath, 75, 75);
      // 원본 파일 교체
      await replaceFile(inputPath, tempPath);
    } else {
      console.log(`⚠️  ${trait}.webp not found in female directory`);
    }
  }

  // 5. CI 로고 이미지 최적화
  console.log('\n📁 Optimizing CI logo:');
  for (const image of ciImages) {
    const inputPath = path.join(ciDir, image);
    const outputPath = path.join(ciDir, image.replace('.png', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath, 85, 300, 100);
    }
  }

  console.log('\n✅ Comprehensive image optimization completed!');
  console.log('📊 Expected results:');
  console.log('   - MBTI combinations: PNG → WebP (32 files)');
  console.log('   - Individual traits: 50% size reduction (16 files)');
  console.log('   - Total preload size: ~40-80KB (vs 400-600KB before)');
}

optimizeAllImages().catch(console.error); 
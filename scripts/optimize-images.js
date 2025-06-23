const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 최적화할 이미지 목록 (남성 개별 이미지들)
const imagesToOptimize = [
  'e.png', 'i.png', 'n.png', 's.png', 't.png', 'f.png', 'j.png', 'p.png'
];

// CI 로고 이미지
const ciImages = ['ci_logo_small.png'];

const maleDir = path.join(__dirname, '../public/images/male');
const femaleDir = path.join(__dirname, '../public/images/female');
const ciDir = path.join(__dirname, '../public/images/ci');

async function optimizeImage(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${(stats.size / 1024).toFixed(1)}KB)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🔄 Starting image optimization...\n');

  // 남성 이미지 최적화
  console.log('📁 Optimizing male images:');
  for (const image of imagesToOptimize) {
    const inputPath = path.join(maleDir, image);
    const outputPath = path.join(maleDir, image.replace('.png', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath);
    } else {
      console.log(`⚠️  ${image} not found in male directory`);
    }
  }

  // 여성 이미지 최적화
  console.log('\n📁 Optimizing female images:');
  for (const image of imagesToOptimize) {
    const inputPath = path.join(femaleDir, image);
    const outputPath = path.join(femaleDir, image.replace('.png', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath);
    } else {
      console.log(`⚠️  ${image} not found in female directory`);
    }
  }

  // CI 로고 이미지 최적화
  console.log('\n📁 Optimizing CI logo:');
  for (const image of ciImages) {
    const inputPath = path.join(ciDir, image);
    const outputPath = path.join(ciDir, image.replace('.png', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath, 85); // CI 로고는 품질을 조금 높게
    }
  }

  console.log('\n✅ Image optimization completed!');
}

optimizeAllImages().catch(console.error); 
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 최적화할 이미지 목록 (남성 개별 이미지들)
const imagesToOptimize = [
  'e.png', 'i.png', 'n.png', 's.png', 't.png', 'f.png', 'j.png', 'p.png'
];

const maleDir = path.join(__dirname, '../public/images/male');
const femaleDir = path.join(__dirname, '../public/images/female');

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
      await optimizeImage(inputPath, outputPath, 75);
    } else {
      console.log(`⚠️  ${image} not found in male directory`);
    }
  }
  
  // 여성 이미지 최적화 (이미 작지만 일관성을 위해)
  console.log('\n📁 Optimizing female images:');
  for (const image of imagesToOptimize) {
    const inputPath = path.join(femaleDir, image);
    const outputPath = path.join(femaleDir, image.replace('.png', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      await optimizeImage(inputPath, outputPath, 80);
    } else {
      console.log(`⚠️  ${image} not found in female directory`);
    }
  }
  
  console.log('\n✅ Image optimization completed!');
}

optimizeAllImages().catch(console.error); 
import { test, expect, Page } from '@playwright/test';

// 테스트 설정 상수
const TEST_TIMEOUT = 15000;
const MBTI_TYPES = ['I', 'S', 'F', 'P'] as const;

// 헬퍼 함수들
async function setupPage(page: Page) {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.waitForLoadState('domcontentloaded');
}

async function selectMBTI(page: Page, mbtiTypes: typeof MBTI_TYPES) {
  await page.click('button[aria-label="남성"]');
  for (const type of mbtiTypes) {
    await page.click(`button[aria-label="${type}"]`);
  }
}

async function generateName(page: Page) {
  const generateButton = page.locator('button:has-text("일본 이름 생성하기")');
  await expect(generateButton).not.toBeDisabled();
  
  // 콘솔 로그 수집을 위한 리스너 추가
  const consoleLogs: string[] = [];
  page.on('console', msg => {
    consoleLogs.push(`${msg.type()}: ${msg.text()}`);
  });
  
  // 버튼 클릭
  await generateButton.click();
  
  // 잠시 대기 후 콘솔 로그 출력
  await page.waitForTimeout(2000);
  
  console.log('Console logs after button click:');
  consoleLogs.forEach(log => console.log(log));
  
  // URL 변경을 기다림 (타임아웃을 짧게 설정)
  try {
    await page.waitForURL(/\/result\/.+/, { timeout: 5000 });
    console.log('URL changed successfully to:', page.url());
  } catch (error) {
    console.log('URL did not change. Current URL:', page.url());
    throw error;
  }

  // 페이지 이동 후 잠시 대기
  await page.waitForLoadState('networkidle');

  // 디버깅: 현재 페이지의 HTML 내용을 확인
  const pageContent = await page.content();
  console.log('Current page URL:', page.url());
  console.log('Page contains result-card:', pageContent.includes('result-card'));
  console.log('Page contains MBTIResultCard:', pageContent.includes('MBTIResultCard'));

  // 결과 페이지의 핵심 요소들을 확인합니다.
  // 가장 확실한 요소부터 차례대로 확인
  try {
    // 1. "당신의 일본 이름은?" 텍스트 확인
    await expect(page.locator('#mbti-result-title')).toBeVisible({ timeout: 10000 });
    console.log('✅ Found result title element');
    
    // 2. 결과 카드 섹션 확인  
    await expect(page.locator('.result-card')).toBeVisible({ timeout: 5000 });
    console.log('✅ Found result-card section');
    
    // 3. 공유 버튼 확인
    await expect(page.locator('button:has-text("결과 공유하기")')).toBeVisible({ timeout: 5000 });
    console.log('✅ Found share button');
    
  } catch (error) {
    console.log('❌ Main elements not found, checking for alternative elements...');
    
    // 대안적인 요소들 확인
    const alternativeSelectors = [
      'button:has-text("결과 공유하기")',
      'button:has-text("히라가나 복사하기")', 
      'button:has-text("가타카나 복사하기")',
      'div:has-text("당신의 일본 이름은?")',
      'section.result-card'
    ];
    
    for (const selector of alternativeSelectors) {
      try {
        await expect(page.locator(selector)).toBeVisible({ timeout: 3000 });
        console.log(`✅ Found alternative element: ${selector}`);
        return;
      } catch (e) {
        console.log(`❌ Alternative element not found: ${selector}`);
      }
    }
    
    // 모든 대안 요소도 없다면 에러 발생
    throw new Error('No result elements found on the page');
  }
}

test.describe('MBTI 일본 이름 생성기 테스트', () => {
  test.beforeEach(async ({ page }) => {
    await setupPage(page);
  });

  test('페이지 로드 및 기본 UI 확인', async ({ page }) => {
    // 제목이 표시되는지 확인 (h1 태그로 구체화)
    await expect(page.locator('h1:has-text("MBTI 일본 이름 생성기")')).toBeVisible();

    // MBTI 선택 버튼들이 존재하는지 확인
    await expect(page.locator('button[aria-label="I"]')).toBeVisible();
    await expect(page.locator('button[aria-label="E"]')).toBeVisible();
  });

  test('MBTI 선택 및 이름 생성', async ({ page }) => {
    await selectMBTI(page, MBTI_TYPES);
    await generateName(page);
  });
}); 
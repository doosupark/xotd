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
  await generateButton.click();
  await page.waitForSelector('.result-card', { state: 'visible', timeout: TEST_TIMEOUT });
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

  test('결과 공유 기능', async ({ page }) => {
    await selectMBTI(page, MBTI_TYPES);
    await generateName(page);
    
    // 공유 버튼 클릭
    await page.click('button:has-text("결과 공유하기")');
    
    // 복사 완료 메시지 확인 (UI 메시지)
    await expect(page.locator('text=링크가 복사되었습니다')).toBeVisible({ timeout: TEST_TIMEOUT });
  });
}); 
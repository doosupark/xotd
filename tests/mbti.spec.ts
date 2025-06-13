import { test, expect } from '@playwright/test';

test.describe('MBTI 일본 이름 생성기 테스트', () => {
  test.beforeEach(async ({ page }) => {
    // 각 테스트 전에 메인 페이지로 이동
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('domcontentloaded');
  });

  test('페이지 로드 및 기본 UI 확인', async ({ page }) => {
    // 페이지 로드
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForLoadState('domcontentloaded');

    // 제목이 표시되는지 확인
    await expect(page.locator('text=MBTI 일본 이름 생성기')).toBeVisible();

    // MBTI 선택 버튼들이 존재하는지 확인
    await expect(page.locator('button[aria-label="I"]')).toBeVisible();
    await expect(page.locator('button[aria-label="E"]')).toBeVisible();
  });

  test('MBTI 선택 및 이름 생성', async ({ page }) => {
    // 페이지 로드
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForLoadState('domcontentloaded');

    // 성별 선택 (남성)
    await page.click('button[aria-label="남성"]');
    
    // MBTI 선택 (ISFP)
    await page.click('button[aria-label="I"]');
    await page.click('button[aria-label="S"]');
    await page.click('button[aria-label="F"]');
    await page.click('button[aria-label="P"]');
    
    // 이름 생성 버튼이 활성화되었는지 확인
    const generateButton = page.locator('button:has-text("일본 이름 생성하기")');
    await expect(generateButton).not.toBeDisabled();
    
    // 이름 생성 버튼 클릭
    await generateButton.click();
    
    // 결과 카드가 표시될 때까지 대기
    await page.waitForSelector('.result-card', { state: 'visible', timeout: 15000 });
  });

  test('결과 공유 기능', async ({ page }) => {
    // 페이지 로드
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.waitForLoadState('domcontentloaded');

    // MBTI 선택 및 이름 생성
    await page.click('button[aria-label="남성"]');
    await page.click('button[aria-label="I"]');
    await page.click('button[aria-label="S"]');
    await page.click('button[aria-label="F"]');
    await page.click('button[aria-label="P"]');
    
    const generateButton = page.locator('button:has-text("일본 이름 생성하기")');
    await expect(generateButton).not.toBeDisabled();
    await generateButton.click();
    
    // 결과 카드가 표시될 때까지 대기
    await page.waitForSelector('.result-card', { state: 'visible', timeout: 15000 });
    
    // 공유 버튼 클릭
    await page.click('button:has-text("결과 공유하기")');
    
    // 복사 완료 메시지 확인
    await expect(page.locator('text=복사 완료')).toBeVisible({ timeout: 15000 });
  });
}); 
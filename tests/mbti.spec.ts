import { test, expect } from '@playwright/test';

test.describe('MBTI 일본 이름 생성기 테스트', () => {
  test.beforeEach(async ({ page }) => {
    // 각 테스트 전에 메인 페이지로 이동
    await page.goto('http://localhost:3000');
    // 페이지가 완전히 로드될 때까지 대기
    await page.waitForLoadState('networkidle');
  });

  test('페이지 로드 및 기본 UI 확인', async ({ page }) => {
    // 페이지 타이틀 확인
    await expect(page).toHaveTitle(/일본/);
    
    // MBTI 선택 버튼들이 존재하는지 확인
    await expect(page.locator('button[aria-label="MBTI 선택"]')).toBeVisible();
  });

  test('MBTI 선택 및 이름 생성', async ({ page }) => {
    // 성별 선택 (남성)
    await page.click('button[aria-label="남성"]');
    
    // MBTI 선택 (ISFP)
    await page.click('button[aria-label="I"]');
    await page.click('button[aria-label="S"]');
    await page.click('button[aria-label="F"]');
    await page.click('button[aria-label="P"]');
    
    // 이름 생성 버튼 클릭
    await page.click('button:has-text("일본 이름 생성하기")');
    
    // 결과가 표시될 때까지 대기
    await page.waitForSelector('text=타나카', { state: 'visible', timeout: 10000 });
    
    // 결과 확인
    await expect(page.locator('text=타나카')).toBeVisible();
  });

  test('결과 공유 기능', async ({ page }) => {
    // MBTI 선택 및 이름 생성 후
    await page.click('button[aria-label="남성"]');
    await page.click('button[aria-label="I"]');
    await page.click('button[aria-label="S"]');
    await page.click('button[aria-label="F"]');
    await page.click('button[aria-label="P"]');
    await page.click('button:has-text("일본 이름 생성하기")');
    
    // 결과가 표시될 때까지 대기
    await page.waitForSelector('text=타나카', { state: 'visible', timeout: 10000 });
    
    // 공유 버튼 클릭
    await page.click('button:has-text("결과 공유하기")');
    
    // 공유 다이얼로그가 표시되는지 확인 (Web Share API)
    await expect(page.locator('text=복사 완료')).toBeVisible({ timeout: 10000 });
  });
}); 
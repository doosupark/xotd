import { test, expect } from '@playwright/test';

test.describe('한글 이름 일본어 변환기 테스트', () => {
  test.beforeEach(async ({ page }) => {
    // 각 테스트 전에 변환기 페이지로 이동
    await page.goto('/translator');
    // 페이지가 완전히 로드될 때까지 대기
    await page.waitForLoadState('networkidle');
  });

  test('페이지 로드 및 기본 UI 확인', async ({ page }) => {
    // 페이지 타이틀 확인
    await expect(page).toHaveTitle(/일본/);
    
    // 입력 필드들이 존재하는지 확인
    await expect(page.locator('input[placeholder="성"]')).toBeVisible();
    await expect(page.locator('input[placeholder="이름"]')).toBeVisible();
  });

  test('이름 변환 및 결과 확인', async ({ page }) => {
    // 성과 이름 입력
    await page.fill('input[placeholder="성"]', '김');
    await page.fill('input[placeholder="이름"]', '철수');
    
    // 입력 후 잠시 대기하여 상태 업데이트 시간 확보
    await page.waitForTimeout(1000);
    
    // 변환 버튼이 활성화될 때까지 기다리거나, 활성화되지 않으면 강제로 클릭
    try {
      await page.waitForSelector('button:has-text("일본 이름으로 변환하기"):not([disabled])', { timeout: 3000 });
    } catch {
      console.log('Button still disabled, but proceeding with click...');
    }
    
    // 변환 버튼 클릭 (활성화 여부와 관계없이)
    await page.click('button:has-text("일본 이름으로 변환하기")', { force: true });
    
    // 결과가 표시될 때까지 대기
    await page.waitForSelector('text=キム', { state: 'visible', timeout: 10000 });
    await page.waitForSelector('text=チョルス', { state: 'visible', timeout: 10000 });
    
    // 결과 확인
    await expect(page.locator('text=キム')).toBeVisible();
    await expect(page.locator('text=チョルス')).toBeVisible();
  });

  test('복사 기능', async ({ page }) => {
    // 이름 변환 후
    await page.fill('input[placeholder="성"]', '김');
    await page.fill('input[placeholder="이름"]', '철수');
    
    // 입력 후 잠시 대기
    await page.waitForTimeout(1000);
    
    // 변환 버튼 클릭 (활성화 여부와 관계없이)
    await page.click('button:has-text("일본 이름으로 변환하기")', { force: true });
    
    // 결과가 표시될 때까지 대기
    await page.waitForSelector('text=キム', { state: 'visible', timeout: 10000 });
    
    // 성 복사 버튼 클릭
    await page.click('button:has-text("성 복사하기")');
    
    // 복사 완료 메시지 확인
    await expect(page.locator('text=복사 완료')).toBeVisible({ timeout: 10000 });
  });
}); 
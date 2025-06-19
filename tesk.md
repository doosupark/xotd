# XOTD 개발 TASK (v1.0.5)

## ✅ 완료된 주요 작업
- 정적 OG 이미지 생성 및 적용 (약 890개 이미지)
- 짧은 공유 URL 시스템 구현 (base64 인코딩)
- MBTI 결과 공유 시 정적 이미지 사용으로 안정성 향상
- 카카오톡 등 SNS에서 OG 이미지 정상 표시
- 공유 URL 단축으로 사용자 경험 개선
- 불필요한 동적 OG 이미지 관련 코드 정리 (API routes, 중복 함수 제거)
- 빌드/타입스크립트/ESLint 오류 수정 및 CI/CD 안정화
- AWS Amplify 배포 워크플로우 점검
- MBTIResultCard 타입 호환성 개선
- 기타 코드 품질 개선
- SEO 고도화 (메타데이터, Open Graph, 구조화 데이터, 동적 sitemap/robots.txt, 이미지 최적화, 접근성 개선 등)
- MBTI 일본 이름 생성기/한글 이름 일본어 변환기 UI/UX 통일 및 반응형 개선
- 본문 상단 여백(PC/모바일) 완전 통일 (mt-6 적용)
- PC 사이드바 CI 로고 LCP 최적화(priority 적용) 및 자연스러운 여백 적용
- 레이아웃 불필요 요소 정리 및 사이드바/네비/헤더/광고 영역 구조 개선
- Tailwind 클래스 통일, 불필요한 section/div 제거, linter 오류 해결
- favicon, cross-origin 등 Next.js 경고/에러 대응
- README/TASK.md 버전 관리 및 진행상황 기록
- 페이지 속도 최적화 (불필요 JS/CSS 제거, 이미지 최적화, 동적 임포트 등)
- 접근성 개선(alt, aria-label, 색상 대비 등)

## 🕒 다음 작업 후보
- 광고 영역 실제 적용 및 모니터링
- 결과 공유 기능(Web Share API, SNS 등) 고도화
- 코드 리팩토링 및 불필요 파일/컴포넌트 정리
- 테스트 및 품질 관리(단위/E2E 테스트, 크로스 브라우저 등)
- 성능 모니터링 및 추가 최적화
- E2E 테스트 구축 (Cypress/Playwright 등 활용)
- 구글, 네이버 검색 등록 및 사이트맵 제출

---
최신 버전: **v1.0.5**
최종 업데이트: 2024-12-19

# Version History

- **v1.0.5** (2024-12-19):
  - 정적 OG 이미지 생성 및 적용 (약 890개 이미지)
  - 짧은 공유 URL 시스템 구현 (base64 인코딩)
  - MBTI 결과 공유 시 정적 이미지 사용으로 안정성 향상
  - 카카오톡 등 SNS에서 OG 이미지 정상 표시
  - 공유 URL 단축으로 사용자 경험 개선
- **v1.0.2** (2024-06-15):
  - 빌드/타입스크립트/ESLint 오류 수정 및 CI/CD 안정화
  - AWS Amplify 배포 워크플로우 점검
  - MBTIResultCard 타입 호환성 개선
  - 기타 코드 품질 개선
- **v1.0** (2024-06-14):
  - SEO 고도화, UX/반응형 개선, 속도 최적화 마무리
  - 광고 영역 제외한 1.0 주요 기능 완성

---

# TODO / 진행상황

- [x] 한글 이름 입력 필드 (성/이름, 4글자 제한)
- [x] 입력값 유효성 단순화 (글자수만 제한)
- [x] 변환 버튼 always enabled
- [x] 변환 결과 카타카나/히라가나 표시
- [x] 각 결과 하단에 '성 복사하기', '이름 복사하기' 버튼 추가 (가로 정렬, 작게)
- [x] MBTI 이름 생성기 페이지 및 결과 표시
- [ ] (다음 버전) UX 개선, 모바일 최적화, 추가 피드백 반영

# XOTD.NET Project Tasks (v0.1)

## 0.1 버전 릴리즈 기준 (2024-05-26)
- 메인 UI 및 MBTI/성별 선택 UX 고도화 완료
- 반응형 레이아웃, 네비/광고/헤더 구조 적용
- 성별/MBTI 선택 애니메이션, 점 이동, 개별 이미지 확대 등 고급 UX 반영
- 성별 미선택 시 경고 및 선택 제한, 안내 문구 등 UX 친화적 처리
- 플레이스홀더/이미지/컬러/간격 등 디자인 디테일 반영

## 1. Project Setup
- [x] Initialize Next.js + TypeScript project
- [x] Configure TailwindCSS
- [x] Set up ESLint and Prettier
- [x] Create project structure according to the technical specification
- [ ] Configure AWS Amplify for deployment
- [ ] Set up domain configuration for xotd.net

## 2. Common Components Development
- [x] Create base layout component (app/layout.tsx)
- [x] Implement navigation header with links between services
- [x] Create footer component
- [x] Develop reusable UI components:
  - [x] Button component
  - [x] Input field component
  - [x] Card component
  - [x] Copy to clipboard button
  - [x] Ad banner component

## 3. MBTI Japanese Name Generator (Homepage)
- [x] Create homepage UI (app/page.tsx)
- [x] Implement MBTI selector component (고도화: 점 이동, 개별 이미지 확대, 성별 미선택 UX 등)
- [x] Create MBTI result card component (기본 구조)
- [x] Set up MBTI data management:
  - [x] Create mbtiNameData.ts with personality data
  - [x] Implement MBTI result generation logic
- [x] Add MBTI personality images
- [x] Style MBTI selector interface (고도화 반영)
- [x] 성별/MBTI 선택 UX 고도화 (점 이동, 경고, 개별 애니메이션 등)
- [x] Implement results display with animations
- [ ] Add social sharing functionality

## 4. Korean to Japanese Name Translator
- [ ] Create translator page (app/translator/page.tsx)
- [ ] Port existing Korean to Japanese conversion logic
- [ ] Implement name input form
- [ ] Create conversion result display
- [ ] Add copy functionality for results
- [ ] Style translator interface
- [ ] Implement error handling

## 5. SEO & Performance
- [x] Configure metadata for both pages
- [x] Add Open Graph tags
- [x] Implement dynamic meta descriptions
- [x] Optimize images and assets
- [ ] Set up analytics
- [x] Configure robots.txt and sitemap

## 6. Testing & Quality Assurance
- [ ] Write unit tests for conversion logic
- [ ] Test responsive design
- [ ] Cross-browser testing
- [ ] Performance testing
- [ ] SEO audit
- [ ] Accessibility testing

## 7. Deployment & Monitoring
- [ ] Set up AWS S3 for static assets
- [ ] Configure AWS Amplify deployment
- [ ] Set up continuous deployment
- [ ] Configure domain and SSL
- [ ] Set up monitoring and alerts
- [ ] Implement error tracking

## 8. Monetization
- [ ] Set up Google AdSense
- [ ] Configure ad placements
- [ ] Implement ad tracking
- [ ] Test ad performance

## 9. Documentation
- [ ] Create README.md
- [ ] Document component usage
- [ ] Add deployment instructions
- [ ] Create maintenance guide

## 10. Post-Launch
- [ ] Monitor site performance
- [ ] Gather user feedback
- [ ] Plan future improvements
- [ ] Regular content updates

## E2E 테스트 구축 절차
1. **테스트 도구 선택**
   - Cypress 또는 Playwright 중 선택
   - 설치 및 초기 설정

2. **테스트 환경 구성**
   - 테스트 스크립트 작성
   - 테스트 데이터 준비

3. **테스트 케이스 작성**
   - 주요 기능에 대한 테스트 케이스 작성
   - 예: MBTI 선택, 이름 생성, 결과 공유 등

4. **테스트 실행 및 결과 분석**
   - 테스트 실행 및 결과 확인
   - 실패한 테스트 케이스 디버깅 및 수정

5. **CI/CD 통합**
   - GitHub Actions 또는 Jenkins 등에 테스트 통합
   - 자동화된 테스트 실행 설정

6. **문서화 및 유지보수**
   - 테스트 문서 작성
   - 테스트 케이스 유지보수 및 업데이트 
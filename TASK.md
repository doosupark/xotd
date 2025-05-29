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
- [ ] Implement results display with animations
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
- [ ] Configure metadata for both pages
- [ ] Add Open Graph tags
- [ ] Implement dynamic meta descriptions
- [ ] Optimize images and assets
- [ ] Set up analytics
- [ ] Configure robots.txt and sitemap

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
# XOTD (v1.0.5)

## 소개
- MBTI 기반 일본 이름 생성기 & 한글 이름 일본어 변환기
- Next.js 15, Tailwind CSS 기반
- SEO 고도화, 반응형 UX, 속도 최적화 완료 (v1.0)
- 정적 OG 이미지 및 짧은 공유 URL 지원 (v1.0.5)

## 최근 변경사항 (v1.0.5)
- 정적 OG 이미지 생성 및 적용 (약 890개 이미지)
- 짧은 공유 URL 시스템 구현 (base64 인코딩)
- MBTI 결과 공유 시 정적 이미지 사용으로 안정성 향상
- 카카오톡 등 SNS에서 OG 이미지 정상 표시
- 공유 URL 단축으로 사용자 경험 개선

## 이전 변경사항 (v1.0.2)
- 빌드/타입스크립트/ESLint 오류 수정 및 CI/CD 안정화
- AWS Amplify 배포 워크플로우 점검
- MBTIResultCard 타입 호환성 개선
- 기타 코드 품질 개선

## 실행 방법
```bash
npm install
npm run dev
```

## TODO
- 광고 영역 실제 적용 및 모니터링
- 결과 공유 기능(Web Share API, SNS 등) 고도화
- 코드 리팩토링 및 불필요 파일/컴포넌트 정리
- 테스트 및 품질 관리(단위/E2E 테스트, 크로스 브라우저 등)
- 성능 모니터링 및 추가 최적화
- E2E 테스트 구축 (Cypress/Playwright 등 활용)
- 구글, 네이버 검색 등록 및 사이트맵 제출

## Version 0.7

### Latest Updates
- **PC Layout**: Reduced the sidebar (header + navigation) width to 80% of its original size (now 179.2px).
- **Navigation**: Centered the navigation link texts ("MBTI 일본 이름 생성기", "한글 이름 일본어 변환기") within the navigation area.
- **UI Cleanup**: Removed all gray borders from the header, navigation, and ad banner components for a cleaner look.

### Task List
- [x] Set up Next.js project with TypeScript and Tailwind CSS
- [x] Create basic layout with header, navigation, and main content area
- [x] Implement responsive design for mobile and desktop
- [x] Add MBTI name generator functionality
- [x] Add Korean to Japanese name translator functionality
- [x] Optimize UI for better user experience
- [x] Remove gray borders and adjust sidebar width for a cleaner look
- [ ] Add unit tests
- [ ] Deploy to production

### Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Technologies Used
- Next.js
- TypeScript
- Tailwind CSS
- React
- Node.js

### License
MIT

## Version History

- **v0.5** (2024-06-09)
  - MBTI 일본이름 생성기 완성
  - 한글→일본어 이름 변환기(카타카나/히라가나) 완성
  - 입력 필드: 4글자 제한, 단순화
  - 결과 하단에 복사 버튼(성/이름) 추가

## 주요 기능

- **MBTI 일본이름 생성기**
  - MBTI와 성별을 선택하면 일본식 이름을 추천
- **한글→일본어 이름 변환기**
  - 한글 성/이름 입력(각 4글자 제한)
  - 일본어(카타카나/히라가나)로 변환
  - 각 결과 하단에 '성 복사하기', '이름 복사하기' 버튼 제공

## 향후 계획
- 모바일/UX 개선
- 추가 피드백 반영
- 기타 기능 확장

## 프로젝트 개요
- MBTI 일본 이름 생성기 (메인)
- 한글 이름 일본어 변환기 (서브)

## 주요 변경 이력 (v0.4)
- 모든 MBTI 타입(남/여) 이름 데이터 완비 및 JSON 파일 보강
- MBTI 설명 텍스트 좌측 정렬 및 마침표 뒤 줄바꿈 처리
- favicon 및 LCP 이미지 경고 해결
- README, tesk.md 등 문서 최신화
- 사이트 정상 동작 및 주요 기능 점검 완료

## 폴더 구조
```
D:/dev/xotd
├── app/                # Next.js App Router (메인)
├── public/             # 정적 파일 (favicon 등)
├── src/                # 이전 코드(백업용)
├── ...
```

## 개발/운영 참고
- favicon은 반드시 public/favicon.ico에 위치해야 함
- src/app은 더 이상 사용하지 않음 (app만 유지)
- 서버 재시작 필요시: `npm run dev`
- 기본 포트(3000) 사용 불가 시, 자동으로 3001 등으로 변경됨

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Version

Current version: 1.0.5

## Recent Changes
- 정적 OG 이미지 생성 및 적용 (약 890개 이미지)
- 짧은 공유 URL 시스템 구현 (base64 인코딩)
- MBTI 결과 공유 시 정적 이미지 사용으로 안정성 향상
- 카카오톡 등 SNS에서 OG 이미지 정상 표시
- 공유 URL 단축으로 사용자 경험 개선

# MBTI 일본 이름 생성기 & 한글 이름 일본어 변환기

## 버전 0.9

### 최근 업데이트
- **MBTI 일본 이름 생성기**:
  - "일본 이름 생성하기" 버튼 활성화 시 컬러를 #0080ff로 변경
  - "결과 공유하기" 버튼 활성화 시 컬러를 #d1e231로 변경, 호버 시 #ffcc33, 텍스트는 검정색으로 설정
  - PC 환경에서 "결과 공유하기" 버튼 클릭 시 Web Share API 또는 링크 복사 기능 추가

- **한글 이름 일본어 변환기**:
  - "일본 이름으로 변환하기" 버튼 활성화 시 컬러를 #0080ff로 변경
  - "성 복사하기", "이름 복사하기" 버튼 클릭 시 2초간 "복사 완료!" 피드백 추가

### 다음 작업 제안
1. **UI/UX 개선**:
   - 모바일 환경에서의 반응형 디자인 최적화
   - 애니메이션 및 전환 효과 추가

2. **기능 확장**:
   - MBTI 결과에 따른 추가 정보 제공
   - 사용자 피드백 수집 및 분석 기능

3. **성능 최적화**:
   - 이미지 로딩 속도 개선
   - 코드 최적화 및 번들 크기 감소

4. **테스트 및 안정화**:
   - 단위 테스트 및 통합 테스트 추가
   - 크로스 브라우저 호환성 검증

5. **문서화**:
   - API 문서 및 사용자 가이드 작성
   - 개발 환경 설정 가이드 업데이트

## Version History

- **v1.0.5** (2024-12-19)
  - 정적 OG 이미지 생성 및 적용 (약 890개 이미지)
  - 짧은 공유 URL 시스템 구현 (base64 인코딩)
  - MBTI 결과 공유 시 정적 이미지 사용으로 안정성 향상
  - 카카오톡 등 SNS에서 OG 이미지 정상 표시
  - 공유 URL 단축으로 사용자 경험 개선
- **v1.0.2** (2024-06-15)
  - 빌드/타입스크립트/ESLint 오류 수정 및 CI/CD 안정화
  - AWS Amplify 배포 워크플로우 점검
  - MBTIResultCard 타입 호환성 개선
  - 기타 코드 품질 개선
- **v1.0** (2024-06-14)
  - SEO 고도화, UX/반응형 개선, 속도 최적화 마무리
  - 광고 영역 제외한 1.0 주요 기능 완성

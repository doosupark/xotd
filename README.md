# XOTD (v0.8)

## 소개
- MBTI 기반 일본 이름 생성기 & 한글 이름 일본어 변환기
- Next.js 15, Tailwind CSS 기반

## 최근 변경사항 (v0.8)
- 두 주요 페이지(생성기/변환기) 본문 상단 여백 완전 통일 (mt-6)
- PC 사이드바 CI 로고 LCP 최적화(priority 적용) 및 자연스러운 여백 적용
- 레이아웃 구조 및 불필요 요소 정리
- Tailwind 클래스 통일, linter 오류 해결

## 실행 방법
```bash
npm install
npm run dev
```

## TODO
- 반응형 세부 개선
- 결과 UX 개선
- 광고 영역 실제 적용
- 접근성/SEO 점검

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

Current version: 0.4

## Recent Changes
- 모든 MBTI 타입(남/여) 이름 데이터 완비 및 JSON 파일 보강
- MBTI 설명 텍스트 좌측 정렬 및 마침표 뒤 줄바꿈 처리
- favicon 및 LCP 이미지 경고 해결
- README, tesk.md 등 문서 최신화
- 사이트 정상 동작 및 주요 기능 점검 완료

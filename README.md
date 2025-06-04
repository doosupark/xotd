# xotd.net

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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

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

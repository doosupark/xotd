# XOTD 개발 TASK (v1.0.8)

## 🗂️ 업무 순서 제안 (우선순위)
1. 구글 애즈(AdSense) 적용
2. 광고 영역 실제 적용 및 모니터링
3. 결과 공유 기능(Web Share API, SNS 등) 고도화
4. 테스트 및 품질 관리(단위/E2E 테스트, 크로스 브라우저 등)
5. 성능 모니터링 및 추가 최적화
6. E2E 테스트 구축 (Cypress/Playwright 등 활용)
7. 구글, 네이버 검색 등록 및 사이트맵 제출

## ✅ 완료된 주요 작업
- **극단적 URL 단축 시스템 구현**: Base64 인코딩에서 ID 방식(`enfp-m-21`)으로 변경하여 URL 길이를 95% 단축 (500자+ → 10-15자)
- **Amplify 배포 안정성 개선**: React 18 안정 버전 사용, Node.js 18.18.2 고정, 복잡한 웹팩 설정 제거로 빌드 환경 최적화
- **빌드 환경 표준화**: .nvmrc 파일 추가, package.json engines 필드 명시, amplify.yml 개선으로 일관된 빌드 환경 구축
- 동적 라우트(`/result/[id]`) 기반 공유 시스템 도입으로 OG 미리보기 안정화
- CI/CD 파이프라인 최적화: GitHub Actions는 테스트만, AWS Amplify는 자동 배포만 담당하도록 역할을 분리하여 프로세스 단순화
- 코드 리팩토링: 불필요한 `src`, `components` 디렉토리 및 레거시 파일(`utils.js`, `nameGenerator.js`) 제거
- 짧은 공유 URL 시스템 구현 (쿼리 파라미터 → 동적 라우트 방식으로 변경)
- MBTI 결과 공유 시 동적 이미지 사용으로 안정성 향상
- 카카오톡 등 SNS에서 OG 이미지 정상 표시
- 공유 URL 단축으로 사용자 경험 개선
- 불필요한 동적 OG 이미지 관련 코드 정리 (API routes, 중복 함수 제거)
- 빌드/타입스크립트/ESLint 오류 수정 및 CI/CD 안정화
- AWS Amplify 배포 워크플로우 점검
- SEO 고도화 (메타데이터, Open Graph, 구조화 데이터, 동적 sitemap/robots.txt, 이미지 최적화, 접근성 개선 등)
- MBTI 일본 이름 생성기/한글 이름 일본어 변환기 UI/UX 통일 및 반응형 개선
- 페이지 속도 최적화 (불필요 JS/CSS 제거, 이미지 최적화, 동적 임포트 등)
- 접근성 개선(alt, aria-label, 색상 대비 등)
- **브라우저 캐시 문제 해결**: 성별/성향 선택 클릭 이벤트가 작동하지 않는 브라우저 캐시 이슈 진단 및 해결 (강화된 캐시 제어 헤더 적용)

## 🕒 다음 작업 후보
- 광고 영역 실제 적용 및 모니터링
- 결과 공유 기능(Web Share API, SNS 등) 고도화
- 테스트 및 품질 관리(단위/E2E 테스트, 크로스 브라우저 등)
- 성능 모니터링 및 추가 최적화
- E2E 테스트 구축 (Cypress/Playwright 등 활용)
- 구글, 네이버 검색 등록 및 사이트맵 제출

## 📋 브라우저 캐시 문제 해결 방법
사용자가 성별이나 성향 선택 시 클릭이 안 되는 경우:
1. **브라우저 새로고침**: `Ctrl+F5` (Windows) 또는 `Cmd+Shift+R` (Mac)으로 강제 새로고침
2. **브라우저 캐시 삭제**: 개발자 도구 → Application → Storage → Clear storage
3. **시크릿 모드**: 새 시크릿/프라이빗 브라우징 창에서 사이트 접속

## 🔧 개발자 캐시 제어 설정
- `next.config.js`에서 정적 자원 및 페이지별 캐시 헤더 제어
- 개발 환경에서는 `no-cache` 설정으로 캐시 비활성화
- 프로덕션에서는 정적 자원은 장기 캐시, 동적 콘텐츠는 적절한 캐시 정책 적용

## 🔗 극단적 URL 단축 시스템
- **기존**: `/result/eyJtYnRpIjoiRU5GUCIsImdlbmRlciI6Im1hbGUi...` (500자 이상)
- **현재**: `/result/enfp-m-21` (10-15자, **95% 단축**)
- **형식**: `{mbti}-{gender첫글자}-{index}` (예: `enfp-m-21`, `isfj-f-5`)
- **장점**: 
  - 카카오톡 OG 이미지 호환성 극대화
  - 가독성 및 디버깅 용이성
  - SEO 친화적 URL 구조
  - 브라우저/SNS 플랫폼 호환성

---
최신 버전: **v1.0.8**
최종 업데이트: 2024-12-21

# Version History

- **v1.0.8** (2024-12-21):
  - 극단적 URL 단축 시스템 구현: ID 방식(`enfp-m-21`)으로 URL 길이 95% 단축
  - 카카오톡 OG 이미지 호환성 극대화를 위한 URL 최적화
- **v1.0.7** (2024-12-21):
  - 동적 라우트(`/result/[id]`) 기반 공유 URL 시스템 도입
  - SNS/메신저 OG 이미지 미리보기 기능 안정화
- **v1.0.6** (2024-12-20):
  - CI/CD 파이프라인 최적화: GitHub Actions와 AWS Amplify의 역할을 분리하여 배포 프로세스 단순화
  - 코드 리팩토링: 불필요한 `src`, `components` 디렉토리 및 레거시 파일(`utils.js`, `nameGenerator.js`) 제거
- **v1.0.5** (2024-12-19):
  - 정적 OG 이미지 생성 및 적용 (약 890개 이미지)
  - 짧은 공유 URL 시스템 구현 (쿼리 파라미터 기반)
- **v1.0.2** (2024-06-15):
  - 빌드/타입스크립트/ESLint 오류 수정 및 CI/CD 안정화
- **v1.0** (2024-06-14):
  - SEO 고도화, UX/반응형 개선, 속도 최적화 마무리

---

# E2E 테스트 구축 절차
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

# 구글 애즈(AdSense) 적용 절차
1. **AdSense 계정 생성 및 사이트 등록**
   - [Google AdSense](https://www.google.com/adsense/start/) 가입 및 사이트 등록
   - 소유권 인증(HTML 태그 삽입 또는 DNS)
2. **광고 단위 생성**
   - 광고 유형(디스플레이, 인피드, 앵커 등) 및 위치 선정
   - 광고 코드 발급
3. **코드 삽입**
   - Next.js의 경우 `_app.tsx` 또는 각 페이지/컴포넌트에 `<script>` 및 광고 코드 삽입
   - 광고 위치에 맞게 레이아웃/스타일 조정
4. **광고 노출 테스트**
   - 실제 광고 노출 여부 확인(최초 승인까지 1~2일 소요 가능)
   - 광고 차단/레이아웃 깨짐 등 이슈 점검

# 구글, 네이버 검색 등록 및 사이트맵 제출
1. **구글 검색 등록**
   - [Google Search Console](https://search.google.com/search-console/)에 사이트 등록
   - 사이트 맵 제출
2. **네이버 검색 등록**
   - [Naver Search Advisor](https://searchadvisor.naver.com/)에 사이트 등록
   - 사이트 맵 제출 
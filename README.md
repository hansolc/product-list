## 상품 검색 페이지 프로젝트

프로젝트 수행기간: 2024-12-18 ~ 2024-12-25

## 사용기술

- Next.js 15
- axios
- vanilla-extract/css
- @tanstack/react-query
- zod

## 아키텍쳐

```
src/
├── actions/
│ ├── product.ts
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── api/
│   ├── routes.ts
├── components/
│ └── ...
├── constant/
├── lib/
├── schema/
├── styles/
├── types/
```

**app** - App routing 구성

**app/api** - API Routes를 사용하여 외부 서버 요청 처리 및 간단한 서버로직 구현.

**actions** - 클라이언트-서버 간 데이터 요청 로직 정의, API 호출 처리.

**components** - 재사용 컴포넌트

**constant** - 글로벌 상수 정의

**lib** - 유틸 함수 및 헬퍼 정의. TanStack Query 및 기타 Provider 설정 포함.

**schema** - Zod를 사용하여 서버 및 클라이언트 데이터의 타입 및 구조 검증.

**styles** - vanilla-extract/css를 사용한 글로벌, 리셋 및 유틸리티 CSS 정의. 컴포넌트 별 스타일 분리 포함.

**types** - 프로젝트 전반에 사용되는 타입 정의

## External APIs

This project uses the dummyjson API for generating dummy data.

## 상품 검색 페이지 프로젝트

프로젝트 수행기간: 2024-12-18 ~ 2024-12-25

배포 페이지: https://product-list-three-tau.vercel.app/

## 🚀 사용기술

- **Framework**: Next.js v14 (App Router)
- **Language**: TypeScript
- **Styling**: vanilla-extract/css
- **State & Data Fetching**: @tanstack/react-query, axios
- **Validation**: Zod
- **Database**: MongoDB Atlas (with mongoose)
- **Auth**: JWT + HttpOnly Cookie
- **CI/CD**: Vercel

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

## 주요기능

### 1. 로그인 & 회원가입 (Serverless + MongoDB)

- **Next.js API Routes + mongoose** 조합으로 간단한 인증 API 구현  
- JWT를 생성해 **HttpOnly Cookie**에 저장, 보안 강화  
- `<UserInitializer>` 컴포넌트를 통해 새로고침 시 사용자 인증 상태 유지  

### 2. SEO & 성능 최적화

- **서버/클라이언트 컴포넌트 분리**  
  - 서버 컴포넌트에서 초기 상품 데이터를 pre-fetch
  - 클라이언트에서 상호작용 처리 (검색, 버튼 등)

- **SSR 기반 meta 데이터 설정**으로 검색 노출 강화  
```tsx
path: `/src/app/search/[product]`

interface ProductSearchedPageProps {
  params: {
    product: string
  }
}

export function generateMetadata({
  params,
}: ProductSearchedPageProps): Metadata {
  return {
    title: `${params.product} - Product Search`,
    description: `Find the best deals on ${params.product}`,
    openGraph: {
      title: `${params.product} - Product Search`,
      description: `Find the best deals on ${params.product}`,
    },
  }
}
```

### 3. Infinite Scroll
- 상품 검색 결과 페이지에 무한 스크롤 기능 적용
- useInfiniteQuery + Intersection Observer를 결합한 useObserver 훅 사용
- 마지막 아이템이 뷰포트에 들어오면 다음 페이지 자동 요청

## 개발일지 & 추가 기능 구현

[Blog Velog](https://velog.io/@soll/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%B9%9C%ED%99%94%EC%A0%81-%ED%99%94%EB%A9%B4-%EC%88%98%EC%A0%95)

## External APIs

This project uses the dummyjson API for generating dummy data.

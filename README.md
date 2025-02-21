## 상품 검색 페이지 프로젝트

프로젝트 수행기간: 2024-12-18 ~ 2024-12-25

배포 페이지: https://product-list-three-tau.vercel.app/

## 사용기술

- Next.js 14
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

## 주요기능

### 1. css Grid을 사용한 반응형 웹

컴포넌트 `GridContainer`을 통해 브라우저 크기마다 다른 개수를 배치하여 반응형 웹으로 구현하도록 구현했습니다.

### 2. Next.js Api Routes을 사용해 serverless 환경으로 Login/Registration 기능 구현

MongoDB Atlas을 통해 DB을 관리하고 Api Routes을 사용해 간단한 Authentication 로직을 구현하였습니다. `mongoose`을 사용해 사용자 정보를 저장하는 데이터 모델, 스키마를 생성하였으며 `<UserInitializer>` 컴포넌트를 통해 새로고침시 쿠키에 저장된 JWT 토큰을 기반으로 사용자 정보를 유지하였습니다.

### 3. SEO 최적화, 성능개선

Next.js App Router 기반으로 Server Component, Client Component을 구분하여 SSR, SSG, CSR을 분리하여 성능을 개선하였습니다. 간단한 예로, 아래 코드에서 `<Title>`은 SSG로 빌드 과정에서 렌더링 되며, 그 외 `input`, `button` 등의 사용으로 사용자와 상호 작용이 필요한 컴포넌트의 경우 Client Component로 구성하였습니다.

```tsx
const HomePage = () => {
  return (
    <Main centered>
      <Section maxWidth={584}>
        <Title>Product Search Helper</Title>
        <SearchWithButton />
      </Section>
    </Main>
  )
}
```

SEO 최적화를 위해 SSR을 통해 meta 데이터를 동적으로 설정해 주었습니다. 상품 검색 후 페이지의 일부분입니다. 상품 검색 페이지 또한 검색 엔진에 노출을 의도하여 url을 통해 받아온 값을 meta 데이터에 넣어 주었습니다.

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

### 4. Infinite Scroll

상품 검색 페이지에서 Infinite Scroll을 통해 사용자 경험을 개선하였습니다. `tanstackquery`의 `useInfiniteQuery`을 통해 구현했으며 `Intersection Observer`을 사용한 `useObserver` custom hook을 통해 마지막 item값을 감지하며 Infinite Scroll을 구현하였습니다.

## 개발일지 & 추가 기능 구현

[Blog Velog](https://velog.io/@soll/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%B9%9C%ED%99%94%EC%A0%81-%ED%99%94%EB%A9%B4-%EC%88%98%EC%A0%95)

## External APIs

This project uses the dummyjson API for generating dummy data.

## 상품 검색 페이지 프로젝트

프로젝트 수행기간: 2024-12-18 ~ 2024-12-25

배포 페이지: https://product-list-three-tau.vercel.app/

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

## 주요기능

### 1. css Grid을 사용한 반응형 웹

컴포넌트 `GridContainer`을 통해 브라우저 크기마다 다른 개수를 배치하여 반응형 웹으로 구현하도록 구현했습니다.

### 2. tanstackquery을 사용하여 상품 정보 가져오는 과정

**1. ProductList 컴포넌트의 데이터 요청**

- ProductList 컴포넌트가 마운트될 때, 내부에서 useProducts 커스텀 훅을 호출하여 상품 정보를 가져옵니다.
- useProducts 훅은 검색어(q)를 URL에서 추출하고, 페이지네이션을 위해 useProductPaginationContext에서 page 값을 받아 API 요청 파라미터를 구성합니다.
- 이 구조 덕분에 새로고침해도 URL에 포함된 검색어와 페이지 정보가 유지되어 동일한 상태를 복원할 수 있습니다.

**2. getProducts 함수로 API 호출**

- useProducts 훅 내부에서 getProducts 함수를 호출하여 데이터를 요청합니다.
- 이 함수는 Next.js API Routes를 통해 내부 서버(/api/product)로 요청을 보냅니다.

**3. API Routes에서 외부 서버로 데이터 요청**

- 내부 서버의 GET 메서드는 외부 서버(https://dummyjson.com/products)로 요청을 전달하며, URL에 포함된 검색어, 페이지네이션 정보(limit, skip)에 따라 적절한 데이터를 가져옵니다.

**4. 외부 서버로부터 응답 처리**

- 외부 서버로부터 데이터를 성공적으로 수신하면, zod 라이브러리를 사용해 데이터의 타입을 검증합니다.
- 타입 검증에 실패할 경우 에러 메시지를 반환하고, 성공 시 데이터를 useQuery를 통해 React 컴포넌트에서 사용할 수 있게 합니다.

## 개선사항 & 추가 기능 구현

[velog blog](https://velog.io/@soll/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%B9%9C%ED%99%94%EC%A0%81-%ED%99%94%EB%A9%B4-%EC%88%98%EC%A0%95)

## External APIs

This project uses the dummyjson API for generating dummy data.

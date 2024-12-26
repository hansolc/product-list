import '@styles/reset.css'
import '@/styles/globalTheme.css'
import type { Metadata } from 'next'
import ReactQueryProvider from '@/lib/tanstack-query/client'
import { ProductPaginationProvider } from '@/components/product-list/context'

export const metadata: Metadata = {
  title: 'Search Product',
  // description: 'Search Products',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}

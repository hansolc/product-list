import '@styles/reset.css'
import '@/styles/globalTheme.css'
import type { Metadata } from 'next'
import ReactQueryProvider from '@/lib/tanstack-query/client'
import RecoilRootComponent from '@/lib/recoil/RecoilRoot'
import UserInitializer from '@/components/auth/UserInitializer'
import Header from '@/components/header/Header'

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
        <ReactQueryProvider>
          <RecoilRootComponent>
            <UserInitializer>
              <Header />
              {children}
            </UserInitializer>
          </RecoilRootComponent>
        </ReactQueryProvider>
      </body>
    </html>
  )
}

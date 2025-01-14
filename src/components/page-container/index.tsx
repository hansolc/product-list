import { PropsWithChildren } from 'react'
import { container } from './PageContainer.css'

const PageContainer = ({ children }: PropsWithChildren) => {
  return <main className={container}>{children}</main>
}

export default PageContainer

import { PropsWithChildren } from 'react'
import { title } from '../page.css'

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className={title}>{children}</h1>
}

export default Title

import { PropsWithChildren } from 'react'
import { container } from './GridContainer.css'

const GridContainer = ({ children }: PropsWithChildren) => {
  return <div className={container}>{children}</div>
}

export default GridContainer

import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { mainContainer } from './Main.css'

interface MainProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  centered?: boolean
}

const Main = ({ children, centered, ...rest }: MainProps) => {
  return (
    <main className={mainContainer({ centered })} {...rest}>
      {children}
    </main>
  )
}

export default Main

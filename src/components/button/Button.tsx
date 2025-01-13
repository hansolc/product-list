import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from 'react'
import { button } from './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
}

const Button = ({
  children,
  color = 'primary',
  size = 'medium',
  rounded = false,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      {...rest}
      className={button({
        color,
        size,
        rounded,
      })}
    >
      {children}
    </button>
  )
}

export default Button

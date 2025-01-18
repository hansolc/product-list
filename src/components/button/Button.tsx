import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { button } from './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
  isLoading?: boolean
}

const Button = ({
  children,
  color = 'primary',
  size = 'medium',
  rounded = false,
  isLoading = false,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      {...rest}
      className={`${button({
        color,
        size,
        rounded,
      })} ${isLoading ? 'loading' : ''}`}
    >
      {children}
    </button>
  )
}

export default Button

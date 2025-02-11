import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { button } from './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
  isLoading?: boolean
  className?: string
}

const Button = ({
  children,
  color = 'primary',
  size = 'medium',
  rounded = false,
  isLoading = false,
  className = '',
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      {...rest}
      className={`${button({
        color,
        size,
        rounded,
      })} ${isLoading ? 'loading' : ''} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

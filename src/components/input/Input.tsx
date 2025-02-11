import React, { InputHTMLAttributes } from 'react'
import { input, msg } from './Input.css'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large'
  color?: 'default' | 'primary' | 'error' | 'success'
  rounded?: boolean
  isValid?: {
    condition: boolean
    msg: string
  }
  className?: string
}

const Input = ({
  size = 'medium',
  color = 'default',
  rounded = false,
  isValid,
  className,
  ...rest
}: InputProps) => {
  return (
    <>
      <input
        className={`${input({ size, color, rounded })} ${className}`}
        {...rest}
      />
      {isValid?.condition && <p className={msg}>{isValid.msg}</p>}
    </>
  )
}

export default Input

import React, { InputHTMLAttributes } from 'react'
import { input } from './Input.css'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large'
  color?: 'default' | 'primary' | 'error' | 'success'
  rounded?: boolean
}

const Input = ({
  size = 'medium',
  color = 'default',
  rounded = false,
  ...rest
}: InputProps) => {
  return <input className={input({ size, color, rounded })} {...rest} />
}

export default Input

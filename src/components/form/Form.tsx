'use client'

import React, { HTMLAttributes, PropsWithChildren } from 'react'
import Input, { InputProps } from '@/components/input/Input'
import { formContainer, title } from './Form.css'

interface FormTitleProps extends HTMLAttributes<HTMLHeadElement> {
  position?: 'left' | 'center' | 'right'
}

interface FormInputProps extends InputProps {
  label: string
}

const Form = ({
  children,
  className = '',
  ...rest
}: React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form {...rest} className={`${formContainer} ${className}`}>
      {children}
    </form>
  )
}

const FormInput = ({ label, ...rest }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <Input id={label} {...rest} style={{ marginTop: '0.5rem' }} />
    </div>
  )
}

const FormTitle = ({
  children,
  position,
  className,
  ...rest
}: PropsWithChildren<FormTitleProps>) => {
  return (
    <h1 className={`${title({ position })} ${className}`} {...rest}>
      {children}
    </h1>
  )
}

Form.Title = FormTitle
Form.Input = FormInput

export default Form

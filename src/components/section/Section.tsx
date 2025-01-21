import React, { HTMLAttributes, PropsWithChildren } from 'react'
import {
  sectionBase,
  sectionVariants,
  maxWidth as MaxWidth,
} from './Section.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'

interface SectionProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  maxWidth?: number
  row?: boolean
  className?: string
}

const Section = ({
  children,
  row = false,
  maxWidth,
  className,
  ...rest
}: SectionProps) => {
  return (
    <section
      className={`${sectionBase} ${row && sectionVariants.row} ${className}`}
      style={
        maxWidth ? assignInlineVars({ [MaxWidth]: `${maxWidth}px` }) : undefined
      }
      {...rest}
    >
      {children}
    </section>
  )
}

export default Section

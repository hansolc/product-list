import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { sectionBase, sectionVariants } from './Section.css'

interface SectionProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {
  row?: boolean
  className?: string
}

const Section = ({
  children,
  row = false,
  className,
  ...rest
}: SectionProps) => {
  return (
    <section
      className={`${sectionBase} ${row && sectionVariants.row} ${className}`}
      {...rest}
    >
      {children}
    </section>
  )
}

export default Section

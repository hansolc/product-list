import { columnFlex, flex } from '@/styles/utils.css'
import { createVar, style, styleVariants } from '@vanilla-extract/css'

export const sectionBase = style([
  columnFlex,
  {
    width: '100%',
  },
])

export const sectionVariants = styleVariants({
  row: {
    flexDirection: 'row',
  },
})

import { columnFlex, flex } from '@/styles/utils.css'
import { createVar, style, styleVariants } from '@vanilla-extract/css'

export const maxWidth = createVar()

export const sectionBase = style([
  columnFlex,
  {
    width: '100%',
    vars: {
      [maxWidth]: 'none',
    },
    maxWidth,
  },
])

export const sectionVariants = styleVariants({
  row: {
    flexDirection: 'row',
  },
})

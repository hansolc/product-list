import { columnFlex } from '@/styles/utils.css'
import { style, styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const formContainer = style([
  columnFlex,
  {
    gap: '1rem',
  },
])

export const title = recipe({
  base: {
    fontSize: '2rem',
  },
  variants: {
    position: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
  },
  defaultVariants: {
    position: 'center',
  },
})

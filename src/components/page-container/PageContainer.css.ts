import { columnFlex } from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  columnFlex,
  {
    maxWidth: '1280px',
    width: '100%',
    margin: '0 auto',
    padding: '50px 0',
  },
])

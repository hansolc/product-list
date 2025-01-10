import {
  columnFlex,
  containerByMaxWidth,
  responsiveStyle,
} from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  columnFlex,
  containerByMaxWidth(500),
  responsiveStyle('paddingTop', {
    tablet: '80px',
    desktop: '80px',
  }),
  {
    gap: '10px',
  },
])

export const title = style({
  fontSize: '2rem',
  textAlign: 'center',
})

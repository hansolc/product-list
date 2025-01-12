import {
  containerByMaxWidth,
  errorMessage,
  responsiveStyle,
} from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  containerByMaxWidth(500),
  responsiveStyle('paddingTop', {
    tablet: '80px',
    desktop: '80px',
  }),
])

export const msg = style([errorMessage])

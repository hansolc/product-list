import { style } from '@vanilla-extract/css'

export const flex = style({
  display: 'flex',
})

export const columnFlex = style([
  flex,
  {
    flexDirection: 'column',
  },
])

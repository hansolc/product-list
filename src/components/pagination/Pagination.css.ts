import { flex } from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  flex,
  {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
    gap: '15px',
  },
])

export const indexBox = style({
  border: '1px solid black',
  padding: '10px',
  cursor: 'pointer',
  borderRadius: '5px',
})

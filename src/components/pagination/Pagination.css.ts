import { flex } from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  flex,
  {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 0',
    gap: '15px',
    flexWrap: 'wrap',
  },
])

export const indexBox = style({
  border: '1px solid black',
  padding: '10px',
  cursor: 'pointer',
  borderRadius: '5px',
})

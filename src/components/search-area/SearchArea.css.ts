import { columnFlex, flex } from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  columnFlex,
  {
    border: `1px solid black`,
    padding: '12px',
    borderRadius: '8px',
  },
])

export const input = style({
  selectors: {
    '&::placeholder': {
      color: 'gray',
    },
  },
  border: 'none',
  outline: 'none',
  flex: '1 1 0',
  fontSize: '1.5rem',
})

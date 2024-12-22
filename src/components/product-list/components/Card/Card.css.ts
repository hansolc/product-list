import { columnFlex, flex, lineClampByNumber } from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'

export const card = style([
  columnFlex,
  {
    justifyContent: 'center',
  },
])

export const imageWrapper = style([
  flex,
  {
    borderRadius: '8px',
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
])

export const cardTitle = style([
  lineClampByNumber(1),
  {
    lineHeight: '1.6',
  },
])

export const cardPrice = style({
  fontSize: '1.5rem',
  lineHeight: '1.6',
})

export const cardDescription = style([
  lineClampByNumber(1),
  {
    color: 'gray',
    fontSize: '0.875rem',
  },
])

import { flex, responsiveContainer, responsiveStyle } from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  flex,
  responsiveStyle('padding', {
    tablet: '0 5%',
    mobile: '0 5%',
    desktop: '0 !important',
  }),
  {
    maxWidth: 1280,
    margin: '0 auto',
    justifyContent: 'space-between',
  },
])

export const header = style([
  {
    position: 'fixed',
    width: '100%',
    padding: '20px 0',
    zIndex: 9999,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
  },
])

export const list = style([
  flex,
  {
    color: 'darkgray',
    cursor: 'pointer',
  },
])

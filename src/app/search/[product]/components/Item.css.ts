import { columnFlex, flex, responsiveStyle } from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'

export const container = style([
  flex,
  responsiveStyle('flex-direction', {
    desktop: 'row',
    tablet: 'row',
    mobile: 'column',
  }),
  responsiveStyle('max-width', {
    desktop: 'none',
    tablet: 'none',
    mobile: '300px',
  }),
  {
    position: 'relative',
    alignSelf: 'center',
    width: '100%',
    gap: '1rem',
  },
])

export const image = style({
  alignSelf: 'center',
})

export const descriptionContainer = style([
  columnFlex,
  {
    padding: '1.5rem 0',
    gap: '0.5rem',
  },
])

export const title = style({
  fontSize: '2rem',
})

export const description = style({})

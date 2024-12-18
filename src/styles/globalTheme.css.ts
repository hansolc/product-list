import { globalStyle } from '@vanilla-extract/css'
export const vars = {
  fontSize: {
    base: '16px',
  },
}

globalStyle('*', {
  boxSizing: 'border-box',
})

globalStyle('html', {})

globalStyle('body', {
  fontSize: vars.fontSize.base,
})

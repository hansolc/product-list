import { globalStyle } from '@vanilla-extract/css'
export const vars = {
  fontSize: {
    base: '16px',
  },
}

globalStyle('*', {
  boxSizing: 'border-box',
})

globalStyle('html', {
  height: '100%',
})

globalStyle('body', {
  fontSize: vars.fontSize.base,
  height: '100%',
})

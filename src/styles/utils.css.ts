import { style } from '@vanilla-extract/css'

// flexbox

export const flex = style({
  display: 'flex',
})

export const columnFlex = style([
  flex,
  {
    flexDirection: 'column',
  },
])

// lineclamp
export const lineClampByNumber = (line: number) =>
  style({
    display: '-webkit-box',
    WebkitLineClamp: line,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  })

export const containerByMaxWidth = (width: number) =>
  style({
    width: '100%',
    maxWidth: `${width}px`,
    margin: '0 auto',
  })

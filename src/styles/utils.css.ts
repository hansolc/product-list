import { style } from '@vanilla-extract/css'
import { vars } from './globalTheme.css'

// reusable func
export const responsiveStyle = (
  property: string,
  values: {
    mobile?: string | number
    tablet?: string | number
    desktop?: string | number
  }
) =>
  style({
    [property]: values.mobile,
    '@media': {
      ...(values.mobile && {
        [vars.media.mobile]: { [property]: values.mobile },
      }),
      ...(values.tablet && {
        [vars.media.tablet]: { [property]: values.tablet },
      }),
      ...(values.desktop && {
        [vars.media.desktop]: { [property]: values.desktop },
      }),
    },
  })

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

export const errorMessage = style({
  color: 'red',
  fontStyle: 'italic',
  fontSize: '0.875rem',
  fontWeight: 'lighter',
})

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

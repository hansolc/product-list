import { vars } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'grid',
  columnGap: '20px',
  rowGap: '40px',
  paddingTop: '50px',
  '@media': {
    [vars.media.desktop]: {
      gridTemplateColumns: 'repeat(4, minmax(300px, auto))',
    },
    [vars.media.tablet]: {
      gridTemplateColumns: 'repeat(2, minmax(300px, auto))',
    },
    [vars.media.mobile]: {
      gridTemplateColumns: 'repeat(1,minmax(auto, auto))',
    },
  },
})

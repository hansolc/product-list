import { vars } from '@/styles/globalTheme.css'
import { createVar, style } from '@vanilla-extract/css'

export const gridVar = {
  columns: {
    desktop: createVar(),
    tablet: createVar(),
    mobile: createVar(),
  },
  gap: {
    row: createVar(),
    col: createVar(),
  },
}

export const container = style({
  display: 'grid',
  columnGap: `${gridVar.gap.col}`,
  rowGap: `${gridVar.gap.row}`,
  paddingTop: '50px',
  '@media': {
    [vars.media.desktop]: {
      gridTemplateColumns: `repeat(${gridVar.columns.desktop}, minmax(auto, auto))`,
    },
    [vars.media.tablet]: {
      gridTemplateColumns: `repeat(${gridVar.columns.tablet}, minmax(300px, auto))`,
    },
    [vars.media.mobile]: {
      gridTemplateColumns: `repeat(${gridVar.columns.mobile}, minmax(300px, auto))`,
    },
  },
})

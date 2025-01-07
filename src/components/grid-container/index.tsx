import React, { PropsWithChildren } from 'react'
import { container, gridVar } from './GridContainer.css'
import { GridColumnProps } from '@/types/grid'
import { assignInlineVars } from '@vanilla-extract/dynamic'

const GridContainer = ({
  column,
  gap,
  children,
}: GridColumnProps & PropsWithChildren) => {
  return (
    <div
      className={container}
      style={assignInlineVars({
        [gridVar.columns.desktop]: column.desktop.toString(),
        [gridVar.columns.tablet]: column.tablet.toString(),
        [gridVar.columns.mobile]: column.mobile.toString(),
        [gridVar.gap.col]: gap.col.toString() + 'px',
        [gridVar.gap.row]: gap.row.toString() + 'px',
      })}
    >
      {children}
    </div>
  )
}

export default GridContainer

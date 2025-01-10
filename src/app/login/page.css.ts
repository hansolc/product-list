import { columnFlex, containerByMaxWidth } from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'

export const container = style([columnFlex, containerByMaxWidth(500)])

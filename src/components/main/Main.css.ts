import { columnFlex, responsiveContainer } from '@/styles/utils.css'
import { recipe } from '@vanilla-extract/recipes'

export const mainContainer = recipe({
  base: [columnFlex, responsiveContainer],
  variants: {
    centered: {
      true: {
        height: '100%',
        alignItems: 'center',
      },
    },
  },
})

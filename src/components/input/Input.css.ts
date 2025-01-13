import { errorMessage } from '@/styles/utils.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const input = recipe({
  base: {
    border: '1px solid #ccc',
    padding: '8px 12px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    width: '100%',
  },
  variants: {
    size: {
      small: { fontSize: '0.875rem', padding: '6px 8px' },
      medium: { fontSize: '1rem', padding: '8px 12px' },
      large: { fontSize: '1.25rem', padding: '10px 14px' },
    },
    color: {
      default: {
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        color: '#333',
      },
      primary: {
        border: '1px solid #007BFF',
        backgroundColor: '#EAF4FF',
        color: '#007BFF',
      },
      error: {
        border: '1px solid #DC3545',
        backgroundColor: '#FFE5E9',
        color: '#DC3545',
      },
      success: {
        border: '1px solid #28A745',
        backgroundColor: '#EAF9EA',
        color: '#28A745',
      },
    },
    rounded: {
      true: { borderRadius: '9999px' },
      false: { borderRadius: '4px' },
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'default',
    rounded: false,
  },
  //   compoundVariants: [

  //   ],
})

export const msg = style([errorMessage, { paddingTop: '0.5rem' }])

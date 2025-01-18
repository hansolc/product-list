import { createVar, keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const loading = keyframes({
  from: { backgroundSize: '0% 100%' },
  to: { backgroundSize: '100% 100%' },
})

const loadingColor = createVar()

export const button = recipe({
  base: {
    borderRadius: 6,
    outline: 'none',
    border: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    vars: {
      [loadingColor]: '#007BFF',
    },
    selectors: {
      '&:hover': {
        opacity: '0.8',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: '0.5',
      },
      '&.loading': {
        background: `linear-gradient(${loadingColor} 0 0) 0/0% no-repeat #ddd`,
        // backgroundImage: 'linear-gradient(#000 0 0)',
        // backgroundPosition: '0% 0%',
        // backgroundSize: '0%',
        // backgroundRepeat: 'no-repeat',
        // backgroundColor: '#ddd',
        animation: `${loading} 2s infinite ease-in-out`,
      },
    },
  },

  variants: {
    color: {
      primary: {
        background: '#007BFF',
        color: '#FFFFFF',
        vars: { [loadingColor]: '#007BFF' },
      },
      secondary: {
        background: '#6C757D',
        color: '#FFFFFF',
        vars: { [loadingColor]: '#6C757D' },
      },
      success: {
        background: '#28A745',
        color: '#FFFFFF',
        vars: { [loadingColor]: '#28A745' },
      },
      warning: {
        background: '#FFC107',
        color: '#212529',
        vars: { [loadingColor]: '#FFC107' },
      },
      danger: {
        background: '#DC3545',
        color: '#FFFFFF',
        vars: { [loadingColor]: '#DC3545' },
      },
    },
    size: {
      small: { padding: '8px 12px' },
      medium: { padding: '12px 16px' },
      large: { padding: '16px 20px' },
    },
    rounded: {
      true: { borderRadius: '9999px' },
      false: { borderRadius: '6px' },
    },
  },

  compoundVariants: [
    {
      variants: { size: 'large' },
      style: { fontSize: '1.5rem' },
    },
  ],

  defaultVariants: {
    color: 'primary',
    size: 'medium',
    rounded: false,
  },
})

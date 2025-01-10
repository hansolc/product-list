import { recipe } from '@vanilla-extract/recipes'

export const button = recipe({
  base: {
    borderRadius: 6,
    outline: 'none',
    border: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    selectors: {
      '&:hover': {
        opacity: '0.8',
      },
    },
  },

  variants: {
    color: {
      primary: { background: '#007BFF', color: '#FFFFFF' },
      secondary: { background: '#6C757D', color: '#FFFFFF' },
      success: { background: '#28A745', color: '#FFFFFF' },
      warning: { background: '#FFC107', color: '#212529' },
      danger: { background: '#DC3545', color: '#FFFFFF' },
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

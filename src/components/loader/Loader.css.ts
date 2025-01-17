import { style, keyframes } from '@vanilla-extract/css'

const rotate = keyframes({
  to: { transform: 'rotate(1turn)' },
})

export const loaderContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh', // 부모 요소가 전체 화면을 차지할 때
})

export const loader = style({
  width: 50,
  padding: 8,
  background: '#25b09b',
  borderRadius: '50%',
  aspectRatio: '1',
  vars: {
    '--loader-background':
      'conic-gradient(#0000 10%, #000), linear-gradient(#000, #000) content-box',
  },
  mask: 'var(--loader-background)',
  maskComposite: 'subtract',
  animation: `${rotate} 1s infinite linear`,
})

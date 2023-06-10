import { keyframes } from '@mantine/core'

const ripple = keyframes({
  '0%': { boxShadow: `0 0 0 0 #845EF7` },
  '70%': {
    boxShadow: `0 0 0 10px rgb(255 91 67 / 0%)`,
  },
  '100%': {
    boxShadow: `0 0 0 0 rgb(255 91 67 / 0%)`,
  },
})

export default ripple

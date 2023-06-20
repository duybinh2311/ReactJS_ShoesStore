import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  wrapper: {
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: 10,
  },
  controlQuantity: {
    '&:hover': {
      animation: 'unset',
    },
    '&:disabled': {
      backgroundColor: theme.colors.dark[6],
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  },
}))

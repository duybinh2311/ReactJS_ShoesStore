import { createStyles, rem } from '@mantine/core'

const styleQuantityInput = createStyles((theme) => ({
  wrapper: {
    width: 'fit-content',
    padding: `${rem(6)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    border: `${rem(1)} solid transparent`,
    backgroundColor: theme.colors.dark[5],
    '&:focus-within': {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },
  control: {
    backgroundColor: theme.colors.dark[7],
    '&:disabled': {
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },
}))

export default styleQuantityInput

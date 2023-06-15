import { createStyles } from '@mantine/core'

export default createStyles((theme) => ({
  likeIcon: {
    backgroundColor: theme.colors.dark[5],
    transition: 'all 0.2s linear',
    '&:hover': {
      backgroundColor: theme.colors.dark[4],
    },
  },
  btnAdd: {
    flexGrow: 10,
  },
  wrapQuantity: {
    flexGrow: 1,
  },
}))

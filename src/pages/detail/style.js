import { createStyles } from '@mantine/core'

const styleDetailProduct = createStyles((theme) => ({
  detailProduct: {
    margin: `${theme.spacing.xl} 0`,
  },
  likeIcon: {
    backgroundColor: theme.colors.dark[5],
    border: `1px solid ${theme.fn.primaryColor()}`,
    transition: 'all 0.2s linear',
    '&:hover': {
      backgroundColor: theme.colors.dark[4],
    },
  },
}))

export default styleDetailProduct

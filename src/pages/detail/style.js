import { createStyles, rem } from '@mantine/core'

const styleDetailPage = createStyles((theme) => ({
  detailProduct: {
    margin: `${rem(50)} 0`,
  },
  relatedProduct: {
    margin: `${theme.spacing.xl} 0`,
  },
}))

export default styleDetailPage

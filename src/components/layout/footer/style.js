import { createStyles, rem } from '@mantine/core'

const styleFooter = createStyles({
  footer: {
    margin: `${rem(50)} 0`,
  },
  link: {
    transition: 'all 0.2s linear',
    '&:hover': {
      color: 'white',
    },
  },
})

export default styleFooter

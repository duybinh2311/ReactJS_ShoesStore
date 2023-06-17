import { createStyles, rem } from '@mantine/core'

export default createStyles((theme) => ({
  sidebar: {
    margin: `${rem(50)} 0`,
  },
  tabs: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  tabsList: {},
  tab: {
    backgroundColor: theme.colors.gray[9],
    marginRight: 10,
    marginBottom: 10,
    border: 'none',
    transition: 'all 0.4s ease',
    '&[data-active]': {
      backgroundColor: theme.fn.primaryColor(),
    },
    '&:not([data-active]):hover': {
      backgroundColor: theme.colors.gray[7],
    },
  },
}))

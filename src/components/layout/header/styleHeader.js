import { createStyles } from '@mantine/core'

const styleHeader = createStyles((theme) => ({
  header: {
    padding: '15px 0',
    backgroundColor: 'transparent',
    transition: 'all 0.4s',
  },
  headerActive: {
    padding: '10px 0',
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colors.gray[9],
    transition: 'all 0.4s',
  },
  tabs: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  tabsActive: {
    padding: '15px 0',
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
  tabsList: {
    borderBottom: '0 !important',
  },
  tab: {
    color: theme.white,
    fontWeight: 'bold',
    marginRight: 10,
    '&[data-active]': {
      backgroundColor: theme.fn.primaryColor(),
      color: theme.white,
      '&:hover': {
        backgroundColor: theme.fn.darken(theme.fn.primaryColor(), 0.2),
        color: theme.white,
      },
    },
  },
  title: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  icon: {
    cursor: 'pointer',
  },
  burger: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
}))

export default styleHeader

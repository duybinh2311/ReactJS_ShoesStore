import { createStyles } from '@mantine/core'

const styleHeader = createStyles((theme) => ({
  header: {
    padding: '15px 0',
    position: 'sticky',
    marginTop: 15,
    top: 0,
    backgroundColor: theme.colors.gray[9],
  },
  tabs: {
    [theme.fn.smallerThan('sm')]: {
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
      backgroundColor: 'white',
      color: '#228be7',
      '&:hover': {
        backgroundColor: theme.black,
        color: theme.white,
      },
    },
  },
}))

export default styleHeader

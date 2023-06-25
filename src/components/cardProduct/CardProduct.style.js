import { createStyles, rem } from '@mantine/core'

export default createStyles((theme) => ({
  card: {
    position: 'relative',
    boxShadow:
      '0 0.0625rem 0.1875rem rgb(255 255 255 / 5%), rgb(255 255 255 / 5%) 0 1.25rem 1.5625rem -0.3125rem, rgb(255 255 255 / 4%) 0 0.625rem 0.625rem -0.3125rem',
  },
  cardSection: {
    position: 'relative',
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(1px) brightness(0.7)',
    },
  },
  image: {
    transition: 'all 0.6s ease',
    '&:hover': {
      transform: 'rotate(-5deg) scale(1.05)',
      filter: 'drop-shadow(5px 5px 10px #6741D9)',
    },
  },
  badgeTop: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: 'none',
  },
  title: {
    display: 'block',
    marginBottom: rem(5),
    color: theme.white,
  },
  likeIcon: {
    position: 'absolute',
    top: theme.spacing.xs,
    left: rem(12),
    backgroundColor: theme.colors.dark[5],
    border: `1px solid ${theme.fn.primaryColor()}`,
    transition: 'all 0.2s linear',
    '&:hover': {
      backgroundColor: theme.colors.dark[4],
    },
  },
}))
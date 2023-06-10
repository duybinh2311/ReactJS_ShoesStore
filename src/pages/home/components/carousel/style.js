import { createStyles } from '@mantine/core'
import moveY from 'utils/keyframes/moveY'

const carouselStyle = createStyles((theme) => ({
  imageWrapper: {
    width: '40%',
    margin: '0 auto',
    transform: 'translate(-10px, -20px)',
    [theme.fn.smallerThan('md')]: {
      width: '70%',
    },
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
    },
  },
  image: {
    margin: '0 auto',
    transform: 'rotate(-10deg)',
    filter: 'drop-shadow(0 0 50px rgba(102, 63, 217, 0.4))',
    transition: 'all 0.4s',
    animation: `${moveY} 2s ease-in-out infinite alternate`,
  },
  imageWrapper2: {
    background: theme.white,
    borderRadius: 30,
  },
  rootImage2: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  figure2: {
    position: 'relative',
    '&:after': {
      content: "''",
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 10,
      left: 10,
      zIndex: '-5',
      background: theme.fn.gradient(),
      borderRadius: 30,
    },
  },
  image2: {
    filter: `drop-shadow(0 0 10px ${theme.fn.rgba(theme.black, 0.2)})`,
  },
}))

export default carouselStyle

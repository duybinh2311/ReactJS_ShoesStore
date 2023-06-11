import { createStyles } from '@mantine/core'
import moveY from 'utils/keyframes/moveY'
import dataCarousel from './data'

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
    position: 'relative',
    borderRadius: 20,
    border: `2px solid ${theme.fn.rgba('#fff', 0.7)}`,
    '&:before': {
      content: "''",
      borderRadius: 20,
      padding: 10,
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundImage: `url(${dataCarousel.backgroundSub})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center right bottom',
      backgroundRepeat: 'no-repeat',
      transition: 'all 0.4s ease-in',
      filter: 'grayscale(1) blur(1px)',
    },
    '&:hover:before': {
      filter: 'grayscale(0) blur(0)',
    },
    '&:hover img': {
      scale: '1.1',
      filter: 'grayscale(0)',
    },
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
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 7,
      left: 7,
      zIndex: '-5',
      background: theme.fn.gradient(),
      borderRadius: 20,
    },
  },
  image2: {
    transition: 'all 0.4s ease-in',
  },
}))

export default carouselStyle

import { createStyles, rem } from '@mantine/core'
import dataCarousel from './layouts/carousel/data'

const styleHomePage = createStyles({
  carousel: {
    backgroundImage: `url(${dataCarousel.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  popularProduct: {
    margin: `${rem(50)} 0`,
  },
})

export default styleHomePage

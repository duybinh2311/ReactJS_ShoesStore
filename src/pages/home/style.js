import { createStyles } from '@mantine/core'
import dataCarousel from './components/carousel/data'

const homePageStyle = createStyles({
  carousel: {
    backgroundImage: `url(${dataCarousel.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
})

export default homePageStyle

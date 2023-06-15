import React from 'react'
import useNaviProgress from 'hooks/useNaviProgress'
import { Container } from '@mantine/core'
import styleHomePage from './style'
import Carousel from './layouts/carousel/Carousel'
import PopularProduct from './layouts/popularProduct/PopularProduct'

export default function HomePage() {
  useNaviProgress()
  /* Style */
  const { classes } = styleHomePage()
  return (
    <>
      <section className={classes.carousel}>
        <Container fluid>
          <Carousel />
        </Container>
      </section>
      <section className={classes.popularProduct}>
        <Container size={'xl'}>
          <PopularProduct />
        </Container>
      </section>
    </>
  )
}

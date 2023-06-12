import React from 'react'
import useNaviProgress from 'hooks/useNaviProgress'
import { Container, Group } from '@mantine/core'
import styleHomePage from './style'
import Carousel from './components/carousel'
import PopularProduct from './components/popularProduct'

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

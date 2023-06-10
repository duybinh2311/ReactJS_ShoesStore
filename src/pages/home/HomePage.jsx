import useNaviProgress from 'hooks/useNaviProgress'
import React from 'react'
import Carousel from './components/carousel/Carousel'
import { Container } from '@mantine/core'
import homePageStyle from './style'

export default function HomePage() {
  useNaviProgress()
  const { classes } = homePageStyle()
  return (
    <>
      <section className={classes.carousel}>
        <Container fluid>
          <Carousel />
        </Container>
      </section>
    </>
  )
}

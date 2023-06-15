import { Container } from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React from 'react'
import styleDetailPage from './style'
import DetailProduct from './layouts/detailProduct/DetailProduct'
import RelatedProduct from './layouts/relatedProduct/RelatedProduct'

export default function DetailPage() {
  useNaviProgress()
  /* Style */
  const { classes } = styleDetailPage()
  return (
    <>
      <section className={classes.detailProduct}>
        <Container size={'xl'}>
          <DetailProduct />
        </Container>
      </section>
      <section className={classes.relatedProduct}>
        <Container size={'xl'}>
          <RelatedProduct />
        </Container>
      </section>
    </>
  )
}

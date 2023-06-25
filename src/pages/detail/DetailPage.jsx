import { Container } from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React from 'react'
import useStyles from './DetailPage.style'
import DetailProduct from './detailProduct/DetailProduct'
import RelatedProduct from './relatedProduct/RelatedProduct'

export default function DetailPage() {
  useNaviProgress()
  /* Style */
  const { classes } = useStyles()
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

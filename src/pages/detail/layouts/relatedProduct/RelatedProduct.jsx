import { Divider, Grid, Title } from '@mantine/core'
import CardProduct from 'components/base/cardProduct'
import React from 'react'

export default function RelatedProduct() {
  return (
    <>
      <Divider
        label={<Title order={3}>Related Product</Title>}
        labelPosition="center"
        mt={70}
        mb={'xl'}
      />
      <Grid>
        <Grid.Col sm={6} md={3}>
          <CardProduct maxWidth={150} />
        </Grid.Col>
        <Grid.Col sm={6} md={3}>
          <CardProduct maxWidth={150} />
        </Grid.Col>
        <Grid.Col sm={6} md={3}>
          <CardProduct maxWidth={150} />
        </Grid.Col>
        <Grid.Col sm={6} md={3}>
          <CardProduct maxWidth={150} />
        </Grid.Col>
      </Grid>
    </>
  )
}

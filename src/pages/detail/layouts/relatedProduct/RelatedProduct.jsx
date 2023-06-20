import { Divider, SimpleGrid, Title } from '@mantine/core'
import CardProduct from 'components/base/CardProduct'
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
      <SimpleGrid
        cols={4}
        breakpoints={[
          {
            maxWidth: 'lg',
            cols: 3,
          },
          {
            maxWidth: 'md',
            cols: 2,
          },
          {
            maxWidth: 'xs',
            cols: 1,
          },
        ]}
      >
        <CardProduct maxWidth={150} />
        <CardProduct maxWidth={150} />
        <CardProduct maxWidth={150} />
        <CardProduct maxWidth={150} />
      </SimpleGrid>
    </>
  )
}

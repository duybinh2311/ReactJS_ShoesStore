import { Divider, Grid, MediaQuery, Title } from '@mantine/core'
import CardProduct from 'components/base/cardProduct'
import React from 'react'

export default function PopularProduct() {
  return (
    <>
      <Divider
        label={
          <Title order={2} italic mr={10}>
            Popular Product
          </Title>
        }
        labelPosition="left"
        my={30}
      />
      <Grid justify="center">
        <Grid.Col lg={6} md={5}>
          <CardProduct maxWidth={520} height={'100%'} />
        </Grid.Col>
        <MediaQuery
          query="(max-width: 992px)"
          styles={(theme) => ({
            display: 'block',
            margin: `${theme.spacing.md} 0`,
          })}
        >
          <Title order={2} display={'none'}>
            Hot Collection
          </Title>
        </MediaQuery>
        <Grid.Col lg={6} md={7}>
          <Grid>
            <Grid.Col xs={6}>
              <CardProduct maxWidth={150} />
            </Grid.Col>
            <Grid.Col xs={6}>
              <CardProduct maxWidth={150} />
            </Grid.Col>
            <Grid.Col xs={6}>
              <CardProduct maxWidth={150} />
            </Grid.Col>
            <Grid.Col xs={6}>
              <CardProduct maxWidth={150} />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </>
  )
}

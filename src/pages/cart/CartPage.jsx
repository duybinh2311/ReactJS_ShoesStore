import { Container, Grid, Text, Title } from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React from 'react'
import useStyles from './CartPage.style'
import CartList from './components/CartList/CartList'
import OrderDetail from './components/OrderDetail/OrderDetail'

export default function CartPage() {
  useNaviProgress()
  /* Style */
  const { classes } = useStyles()
  return (
    <>
      <section className={classes.cart}>
        <Container size={'xl'}>
          <Title tt={'uppercase'} order={4}>
            your order
          </Title>
          <Text color="dimmed" fz={14} mb={'xs'} tt={'uppercase'}>
            there are 11 item(s) in your cart
          </Text>
          <Grid>
            <Grid.Col md={8}>
              <CartList maxHeight={501} maxWidthItem={80} />
            </Grid.Col>
            <Grid.Col md={4}>
              <OrderDetail />
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  )
}

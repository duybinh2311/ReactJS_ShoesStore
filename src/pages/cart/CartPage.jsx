import { Container, Grid, Text, Title } from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React from 'react'
import useStyles from './CartPage.style'
import CartList from './cartList/CartList'
import OrderDetail from './orderDetail/OrderDetail'
import { useSelector } from 'react-redux'

export default function CartPage() {
  useNaviProgress()
  /* App State */
  const { totalItem } = useSelector((state) => state.cart)
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
            there are {totalItem} item(s) in your cart
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

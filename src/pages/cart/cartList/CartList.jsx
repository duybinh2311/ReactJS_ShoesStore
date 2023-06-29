import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Stack } from '@mantine/core'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../cartItem/CartItem'
import { randomId } from '@mantine/hooks'

export default function CartList({ maxHeight, maxWidthItem }) {
  /* App State */
  const { cartList, totalItem } = useSelector((state) => state.cart)
  /* Render */
  const renderCartItem = () => {
    return cartList.map((item) => {
      return (
        <CartItem key={randomId()} maxWidth={maxWidthItem} product={item} />
      )
    })
  }
  return (
    <>
      <Badge
        variant="filled"
        color="violet"
        fullWidth
        py={15}
        radius={'xs'}
        leftSection={
          totalItem !== 0 && (
            <FontAwesomeIcon icon={faBell} fontSize={12} shake />
          )
        }
      >
        {totalItem
          ? `${
              cartList[cartList.length - 1].name
            } - has been added to the shopping cart`
          : 'Empty Cart'}
      </Badge>
      <Stack
        display={totalItem ? 'flex' : 'none'}
        mt={20}
        mah={maxHeight}
        p={10}
        spacing={10}
        style={{
          overflowY: 'scroll',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {renderCartItem()}
      </Stack>
    </>
  )
}

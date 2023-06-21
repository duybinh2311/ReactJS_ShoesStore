import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Stack } from '@mantine/core'
import React from 'react'
import CartItem from '../CartItem/CartItem'

export default function CartList({ maxHeight, maxWidthItem }) {
  return (
    <>
      <Badge
        variant="filled"
        color="violet"
        fullWidth
        py={15}
        radius={'xs'}
        leftSection={<FontAwesomeIcon icon={faBell} fontSize={12} shake />}
      >
        Men's Air Jordan 2 Retro - 42 - has been added to the shopping cart
      </Badge>
      <Stack
        mt={20}
        mah={maxHeight}
        p={10}
        spacing={10}
        style={{
          overflowY: 'auto',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <CartItem maxWidth={maxWidthItem} />
        <CartItem maxWidth={maxWidthItem} />
        <CartItem maxWidth={maxWidthItem} />
        <CartItem maxWidth={maxWidthItem} />
        <CartItem maxWidth={maxWidthItem} />
        <CartItem maxWidth={maxWidthItem} />
        <CartItem maxWidth={maxWidthItem} />
        <CartItem maxWidth={maxWidthItem} />
        <CartItem maxWidth={maxWidthItem} />
      </Stack>
    </>
  )
}



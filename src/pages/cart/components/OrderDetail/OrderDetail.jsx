import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Group,
  Progress,
  Stack,
  Text,
  Textarea,
  Title,
} from '@mantine/core'
import PaymentIcon from 'components/base/PaymentIcon'
import React from 'react'

export default function OrderDetail() {
  return (
    <Stack
      h={'100%'}
      style={{
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Title
        p={15}
        order={4}
        bg={'gray.9'}
        fw={'bold'}
        ta={'center'}
        tt={'uppercase'}
      >
        Order Detail
      </Title>
      <Box>
        <Group position="apart" p={10}>
          <Text tt={'uppercase'} fw={'bold'}>
            Total :
          </Text>
          <Text tt={'uppercase'} fw={'bold'}>
            $ 10.000
          </Text>
        </Group>
        <Group position="apart" p={10}>
          <Text tt={'uppercase'} fw={'bold'}>
            Shipping :
          </Text>
          <Text tt={'capitalize'} fz={12} color="dimmed">
            Shipping & taxes calculated at checkout
          </Text>
        </Group>
        <Stack p={10}>
          <Text color="green" fz={12} fw={500}>
            CONGRATULATIONS! YOU'VE GOT FREE SHIPPING!
            <FontAwesomeIcon
              icon={faTruckFast}
              bounce
              style={{
                marginLeft: 5,
              }}
            />
          </Text>
          <Progress value={50} color="green" w={'100%'} striped animate />
          <Text tt={'capitalize'} fz={12} color="dimmed">
            Free shipping for any orders above{' '}
            <span
              style={{
                color: '#2F9E44',
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              $200
            </span>
          </Text>
        </Stack>
      </Box>
      <PaymentIcon />
      <Stack p={10}>
        <Text tt={'uppercase'} fw={'bold'}>
          Add a note to your order :
        </Text>
        <Textarea placeholder="Your note" />
        <Button tt={'uppercase'}>Confirm Order</Button>
      </Stack>
    </Stack>
  )
}

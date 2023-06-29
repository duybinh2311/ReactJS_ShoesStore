import {
  Box,
  Button,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import React from 'react'
import useStyles from './CartItem.style'
import { useDispatch } from 'react-redux'
import { cartAction } from 'services/redux/slices/cartSlice'

export default function CartItem({ maxWidth, product }) {
  /* Hook Init */
  const dispatch = useDispatch()
  /* Styles */
  const { classes } = useStyles()
  /* Logic */
  const increaseQuantity = () => {
    const action = cartAction.increaseQuantity(product.id)
    dispatch(action)
  }
  const reduceQuantity = () => {
    if (product.quantity === 1) {
      const action = cartAction.delete(product.id)
      dispatch(action)
      return
    }
    const action = cartAction.reduceQuantity(product.id)
    dispatch(action)
  }
  return (
    <Box className={classes.wrapper}>
      <Grid>
        <Grid.Col span={12} sm={8}>
          <Group align="flex-start">
            <Image src={product.image} maw={maxWidth} bg={'white'} />
            <Stack spacing={5}>
              <Text
                fz={14}
                fw={'bold'}
                tt={'uppercase'}
                truncate
                sx={(theme) => ({
                  [theme.fn.smallerThan('lg')]: {
                    width: 300,
                  },
                  [theme.fn.smallerThan('md')]: {
                    width: 250,
                  },
                  [theme.fn.smallerThan('sm')]: {
                    width: 200,
                  },
                })}
              >
                {product.name}
              </Text>
              <Text fz={14} color="dimmed">
                {`$ ${product.price}`}
              </Text>
              <Text
                fz={12}
                color="dimmed"
                tt={'capitalize'}
                truncate
                w={350}
                sx={(theme) => ({
                  [theme.fn.smallerThan('lg')]: {
                    width: 300,
                  },
                  [theme.fn.smallerThan('md')]: {
                    width: 250,
                  },
                  [theme.fn.smallerThan('sm')]: {
                    width: 200,
                  },
                })}
              >
                {product.shortDescription}
              </Text>
            </Stack>
          </Group>
        </Grid.Col>
        <Grid.Col span={12} sm={4}>
          <Group position="apart" align="flex-start">
            <Button.Group>
              <Button
                size="xs"
                variant="default"
                className={classes.controlQuantity}
                onClick={reduceQuantity}
              >
                -
              </Button>
              <Button
                size="xs"
                variant="default"
                disabled
                className={classes.controlQuantity}
              >
                {product.quantity}
              </Button>
              <Button
                size="xs"
                variant="default"
                className={classes.controlQuantity}
                onClick={increaseQuantity}
              >
                +
              </Button>
            </Button.Group>
            <Title order={5} fw={'bold'}>
              {`$ ${product.total}`}
            </Title>
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  )
}

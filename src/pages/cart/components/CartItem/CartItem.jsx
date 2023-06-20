import { Button, Group, Image, Stack, Text, Title } from '@mantine/core'
import dataCarousel from 'pages/home/layouts/carousel/data'
import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './CartItem.style'

export default function CartItem({ maxWidth }) {
  /* Styles */
  const { classes } = useStyles()
  return (
    <Group align="flex-start" position="apart" className={classes.wrapper}>
      <Group align="flex-start">
        <Image src={dataCarousel.productItem[1]} maw={maxWidth} bg={'white'} />
        <Stack spacing={5}>
          <Text fz={14} fw={'bold'} tt={'uppercase'}>
            MEN'S AIR JORDAN 2 RETRO
          </Text>
          <Text fz={14} color="dimmed">
            $ 10.000
          </Text>
          <Text fz={12} color="dimmed" tt={'capitalize'}>
            Size : 30, 31, 32
          </Text>
        </Stack>
      </Group>
      <Button.Group>
        <Button size="xs" variant="default" className={classes.controlQuantity}>
          -
        </Button>
        <Button
          size="xs"
          variant="default"
          disabled
          className={classes.controlQuantity}
        >
          10
        </Button>
        <Button size="xs" variant="default" className={classes.controlQuantity}>
          +
        </Button>
      </Button.Group>
      <Title order={5} fw={'bold'}>
        $ 10.000
      </Title>
    </Group>
  )
}

CartItem.propTypes = {
  maxWidth: PropTypes.number,
}

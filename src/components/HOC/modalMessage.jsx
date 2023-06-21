import React from 'react'
import { Button, Group, Text } from '@mantine/core'
import { modals } from '@mantine/modals'

export default function modalMessage({ message, handle, btnTitle }) {
  return modals.open({
    centered: true,
    transitionProps: {
      transition: 'scale',
      duration: 300,
      timingFunction: 'ease',
    },
    children: (
      <>
        <Text fw={'bold'} fz={18} ta={'center'} mb={20} color="white">
          {message}
        </Text>
        <Button fullWidth onClick={handle}>
          {btnTitle}
        </Button>
      </>
    ),
  })
}

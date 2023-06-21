import React from 'react'
import { Button, Text } from '@mantine/core'
import { modals } from '@mantine/modals'

export default function modalMessage({ title, handle, btnTitle }) {
  return modals.open({
    centered: true,
    withCloseButton: false,
    overlayProps: {
      blur: 5,
      opacity: 0.7,
    },
    transitionProps: {
      transition: 'scale',
      duration: 300,
      timingFunction: 'ease',
    },
    children: (
      <>
        <Text fw={'bold'} fz={18} ta={'center'} mb={20} color="white">
          {title}
        </Text>
        <Button fullWidth onClick={handle}>
          {btnTitle}
        </Button>
      </>
    ),
  })
}

import React from 'react'
import { Modal, Text } from '@mantine/core'
import { useDispatch } from 'react-redux'

export default function ModalCenter(Component) {
  return ({ title, opened, typeReducer }) => {
    const dispatch = useDispatch()
    const action = {
      type: `modalSlice/${typeReducer}`,
      action: !opened,
    }
    return (
      <Modal
        centered
        opened={opened}
        onClose={() => dispatch(action)}
        withCloseButton={false}
        size={'lg'}
        overlayProps={{
          blur: 5,
          opacity: 0.5,
        }}
        transitionProps={{
          transition: 'scale',
          duration: 300,
          timingFunction: 'ease',
        }}
        title={
          <Text fw={'bold'} fz={24} color="white">
            {title}
          </Text>
        }
      >
        <Component />
      </Modal>
    )
  }
}

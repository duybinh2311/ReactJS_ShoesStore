import { ActionIcon, Group, Text } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import React, { useState } from 'react'

export default function SizeGroup() {
  /* Local State */
  const [sizeClick, setSizeClick] = useState(null)
  const sizes = [36, 37, 38, 39, 40, 41, 42, 43]
  return (
    <Group>
      {sizes.map((size) => {
        return (
          <ActionIcon
            key={randomId()}
            variant={sizeClick === size ? 'filled' : 'outline'}
            color={sizeClick === size ? 'violet' : 'gray'}
            sx={{
              border: `1px solid ${
                sizeClick === size ? 'transparent' : 'gray'
              }`,
            }}
            onClick={() => setSizeClick(size)}
          >
            <Text>{size}</Text>
          </ActionIcon>
        )
      })}
    </Group>
  )
}

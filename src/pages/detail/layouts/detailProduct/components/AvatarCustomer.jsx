import { Avatar, Tooltip } from '@mantine/core'
import React from 'react'

const avatarData = [
  { name: 'Eva Elfie', email: 'human' },
  { name: 'Eva Elfie', email: 'human_2' },
  { name: 'Eva Elfie', email: 'human_3' },
  { name: 'Eva Elfie', email: 'human_4' },
  { name: 'Eva Elfie', email: 'human_5' },
]

export default function AvatarCustomer() {
  return (
    <Tooltip.Group>
      <Avatar.Group spacing={'sm'}>
        {avatarData.map((customer, index) => {
          return (
            <Tooltip
              color="violet"
              label={customer.name}
              withArrow
              key={index}
              transitionProps={{
                transition: 'scale',
                duration: 300,
              }}
            >
              <Avatar
                radius={'xl'}
                src={`https://i.pravatar.cc/150?u=${customer.email}@pravatar.com`}
              />
            </Tooltip>
          )
        })}
        <Tooltip
          color="violet"
          label="More than 9 other people have rated this product."
          multiline
          width={220}
          withArrow
          transitionProps={{
            transition: 'scale',
            duration: 300,
          }}
        >
          <Avatar radius={'xl'}>+9</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  )
}

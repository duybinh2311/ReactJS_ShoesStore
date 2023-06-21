import React from 'react'
import {
  faCartPlus,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Group, Indicator, Menu } from '@mantine/core'
import { NavLink } from 'react-router-dom'

export default function AvatarProfile({ classes }) {
  return (
    <Group>
      <Menu trigger="click" withArrow>
        <Menu.Target>
          <Indicator withBorder processing color="green" size={12} offset={5}>
            <Avatar
              radius={'xl'}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              style={{
                cursor: 'pointer',
              }}
            />
          </Indicator>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Nguyễn Duy Bình</Menu.Label>
          <NavLink to={'/account'}>
            <Menu.Item icon={<FontAwesomeIcon icon={faUser} />}>
              View Profile
            </Menu.Item>
          </NavLink>
          <NavLink to={'/cart'}>
            <Menu.Item icon={<FontAwesomeIcon icon={faCartPlus} />}>
              View Cart
            </Menu.Item>
          </NavLink>
          <Menu.Divider />
          <Menu.Item>Log out</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Indicator label="12" color="red">
        <FontAwesomeIcon icon={faCartShopping} className={classes.icon} />
      </Indicator>
    </Group>
  )
}

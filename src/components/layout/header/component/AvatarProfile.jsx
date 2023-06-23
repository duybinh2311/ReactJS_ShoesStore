import React from 'react'
import {
  faCartPlus,
  faCartShopping,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Group, Indicator, Menu } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { USER_LOGIN, USER_PROFILE } from 'utils/constant'
import { userAction } from 'services/redux/slices/userSlice'
import storage from 'utils/storage'

export default function AvatarProfile({ classes, user }) {
  /* App State */
  const { userProfile } = useSelector((state) => state.user)
  /* Hook Init */
  const dispatch = useDispatch()
  /* Logic */
  const logoutAccount = () => {
    storage.clear(USER_LOGIN)
    storage.clear(USER_PROFILE)
    dispatch(userAction.reset())
  }
  return (
    <Group>
      <Menu trigger="click" withArrow>
        <Menu.Target>
          <Indicator withBorder processing color="green" size={12} offset={5}>
            <Avatar
              radius={'xl'}
              src={userProfile.avatar}
              style={{
                cursor: 'pointer',
              }}
            />
          </Indicator>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>{user.email}</Menu.Label>
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
          <Menu.Item onClick={logoutAccount}>Log out</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Indicator label="12" color="red">
        <FontAwesomeIcon icon={faCartShopping} className={classes.icon} />
      </Indicator>
    </Group>
  )
}

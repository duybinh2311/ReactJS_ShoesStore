import React, { useEffect, useState } from 'react'
import useStyles from './Header.style'
import { Burger, Container, Divider, Group } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import TabGroupVertical from './component/TabGroupVertical'
import dataTab from './data'
import TabGroup from './component/TabGroup'
import ButtonSignInUp from './component/ButtonSignInUp'
import AvatarProfile from './component/AvatarProfile'

export default function Header() {
  /* Local State */
  const [opened, setOpened] = useState(false)
  const [scroll, setScroll] = useState(false)
  /* Hook Init */
  const clickOutSideRef = useClickOutside(() => setOpened(false))
  /* Style */
  const { classes, cx } = useStyles()
  /* Logic */
  const handleScroll = () => {
    const scrollY = window.scrollY
    if (scrollY >= 20) {
      setScroll(true)
    }
    if (scrollY === 0) {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <header
        ref={clickOutSideRef}
        className={cx(classes.header, { [classes.headerActive]: scroll })}
      >
        <Container fluid>
          <Group position="apart">
            <Burger
              display={'none'}
              opened={opened}
              onClick={() => setOpened((opened) => !opened)}
              className={classes.burger}
            />
            <TabGroup classes={classes} data={dataTab} />
            <ButtonSignInUp classes={classes} />
            <AvatarProfile classes={classes} />
          </Group>
          <TabGroupVertical
            opened={opened}
            setOpened={setOpened}
            classes={classes}
            data={dataTab}
          />
        </Container>
      </header>
      {!scroll && <Divider />}
    </>
  )
}

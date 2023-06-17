import React, { useEffect, useState } from 'react'
import useStyles from './Header.style'
import {
  Burger,
  Button,
  Container,
  Divider,
  Group,
  Tabs,
  Title,
  Transition,
} from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '@mantine/hooks'

export default function Header() {
  /* Local State */
  const [opened, setOpened] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [activePage, setActivePage] = useState('/')
  /* Hook Init */
  const navigate = useNavigate()
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
  useEffect(() => {
    navigate(activePage)
  }, [activePage])
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
            <Tabs
              variant="pills"
              defaultValue="/"
              value={activePage}
              onTabChange={setActivePage}
              classNames={{
                root: classes.tabs,
                tab: classes.tab,
              }}
            >
              <Tabs.List>
                <Tabs.Tab value="/">Home</Tabs.Tab>
                <Tabs.Tab value="account">Account</Tabs.Tab>
                <Tabs.Tab value="shop">Shop</Tabs.Tab>
                <Tabs.Tab value="detail/productId=10">Detail</Tabs.Tab>
                <Tabs.Tab value="cart">Cart</Tabs.Tab>
              </Tabs.List>
            </Tabs>
            <Title order={3} className={classes.title}>
              ReactJS - CapStone
            </Title>
            <Group>
              <Button variant="gradient" radius={'md'}>
                Sign In
              </Button>
              <Button variant="default" radius={'md'}>
                Sign Up
              </Button>
              <FontAwesomeIcon
                icon={faCartShopping}
                className={classes.icon}
                bounce
              />
              <FontAwesomeIcon icon={faHeart} className={classes.icon} beat />
            </Group>
          </Group>
          <Transition
            transition={'slide-right'}
            duration={300}
            timingFunction="ease"
            mounted={opened}
          >
            {(styles) => (
              <Tabs
                variant="pills"
                style={{ ...styles }}
                display={'none'}
                value={activePage}
                onTabChange={setActivePage}
                orientation="vertical"
                classNames={{
                  root: classes.tabsActive,
                  tab: classes.tab,
                }}
              >
                <Tabs.List>
                  <Tabs.Tab
                    value="/"
                    onClick={() => setOpened((opened) => !opened)}
                  >
                    Home
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="account"
                    onClick={() => setOpened((opened) => !opened)}
                  >
                    Account
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="shop"
                    onClick={() => setOpened((opened) => !opened)}
                  >
                    Shop
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="detail/productId=10"
                    onClick={() => setOpened((opened) => !opened)}
                  >
                    Detail
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="cart"
                    onClick={() => setOpened((opened) => !opened)}
                  >
                    Cart
                  </Tabs.Tab>
                </Tabs.List>
              </Tabs>
            )}
          </Transition>
        </Container>
      </header>
      {!scroll && <Divider />}
    </>
  )
}

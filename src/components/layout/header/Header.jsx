import React, { useEffect, useState } from 'react'
import styleHeader from './style'
import { Burger, Button, Container, Group, Tabs, Title } from '@mantine/core'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  /* Local State */
  const [opened, setOpened] = useState(false)
  const [scroll, setscroll] = useState(false)
  /* Hook Init */
  const navigate = useNavigate()
  const { tabValue } = useParams()
  const { classes, cx } = styleHeader()
  /* Logic */
  const handleScroll = () => {
    const scrollPos = window.scrollY
    if (scrollPos >= 20) {
      setscroll(true)
    }
    if (scrollPos === 0) {
      setscroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className={cx(classes.header, { [classes.headerActive]: scroll })}>
      <Container fluid>
        <Group position="apart">
          <Burger
            opened={opened}
            onClick={() => setOpened((opened) => !opened)}
            className={classes.burger}
          />
          <Tabs
            variant="pills"
            defaultValue="/"
            value={tabValue}
            onTabChange={(value) => navigate(value)}
            classNames={{
              root: classes.tabs,
              tabsList: classes.tabsList,
              tab: classes.tab,
            }}
          >
            <Tabs.List>
              <Tabs.Tab value="/">Home</Tabs.Tab>
              <Tabs.Tab value="account">Account</Tabs.Tab>
              <Tabs.Tab value="shop">Shop</Tabs.Tab>
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
        <Tabs
          variant="pills"
          defaultValue="/"
          value={tabValue}
          onTabChange={(value) => navigate(value)}
          display={opened ? 'block' : 'none'}
          orientation="vertical"
          classNames={{
            root: classes.tabsActive,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="/">Home</Tabs.Tab>
            <Tabs.Tab value="account">Account</Tabs.Tab>
            <Tabs.Tab value="shop">Shop</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </Container>
    </header>
  )
}

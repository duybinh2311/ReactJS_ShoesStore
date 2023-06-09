import React from 'react'
import styleHeader from './styleHeader'
import { Button, Container, Group, Tabs } from '@mantine/core'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const navigate = useNavigate()
  const { tabValue } = useParams()
  const { classes } = styleHeader()
  return (
    <header className={classes.header}>
      <Container fluid>
        <Group position="apart">
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
          <Group>
            <Button variant="gradient" radius={'md'}>
              Sign In
            </Button>
            <Button variant="default" radius={'md'}>
              Sign Up
            </Button>
            <FontAwesomeIcon icon={faCartShopping} />
          </Group>
        </Group>
      </Container>
    </header>
  )
}

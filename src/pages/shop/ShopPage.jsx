import {
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Menu,
  Navbar,
  SegmentedControl,
  Tabs,
  Title,
} from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React from 'react'
import useStyles from './ShopPage.style'
import CardProduct from 'components/base/cardProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function ShopPage() {
  useNaviProgress()
  /* Style */
  const { classes } = useStyles()
  return (
    <>
      <section className={classes.sidebar}>
        <Container size={'xl'}>
          <Grid>
            <Grid.Col span={12} md={2}>
              <Tabs
                orientation="vertical"
                h={'100%'}
                classNames={{
                  root: classes.tabs,
                  tabsList: classes.tabsList,
                  tab: classes.tab,
                }}
              >
                <Tabs.List w={'100%'}>
                  <Title order={4} mb={'xs'} tt={'uppercase'}>
                    categories
                  </Title>
                  <Tabs.Tab value="0">Filter 1</Tabs.Tab>
                  <Tabs.Tab value="1">Filter 2</Tabs.Tab>
                  <Tabs.Tab value="2">Filter 3</Tabs.Tab>
                  <Tabs.Tab value="3">Filter 4</Tabs.Tab>
                </Tabs.List>
              </Tabs>
              <Group position="apart">
                <Title order={4}>CATEGORIES</Title>
                <Menu
                  withArrow
                  shadow="xl"
                  width={125}
                  transitionProps={{
                    transition: 'slide-left',
                    duration: 200,
                    timingFunction: 'ease',
                  }}
                >
                  <Menu.Target>
                    <Button
                      variant="outline"
                      rightIcon={<FontAwesomeIcon icon={faArrowDown} />}
                    >
                      All Product
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label c={'white'} bg={'violet'}>
                      Filter By
                    </Menu.Label>
                    <Menu.Divider />
                    <Menu.Item>Filter 1</Menu.Item>
                    <Menu.Item>Filter 2</Menu.Item>
                    <Menu.Item>Filter 3</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Grid.Col>
            <Grid.Col span={12} md={10}>
              <Grid>
                <Grid.Col span={12} sm={6} md={4}>
                  <CardProduct maxWidth={150} />
                </Grid.Col>
                <Grid.Col span={12} sm={6} md={4}>
                  <CardProduct maxWidth={150} />
                </Grid.Col>
                <Grid.Col span={12} sm={6} md={4}>
                  <CardProduct maxWidth={150} />
                </Grid.Col>
                <Grid.Col span={12} sm={6} md={4}>
                  <CardProduct maxWidth={150} />
                </Grid.Col>
                <Grid.Col span={12} sm={6} md={4}>
                  <CardProduct maxWidth={150} />
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  )
}

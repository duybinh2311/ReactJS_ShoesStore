import {
  Button,
  Container,
  Grid,
  Group,
  Menu,
  Tabs,
  Title,
} from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React, { useEffect, useState } from 'react'
import useStyles from './ShopPage.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import CardProduct from 'components/cardProduct/CardProduct'
import productAPI from 'services/api/productAPI'
import { randomId } from '@mantine/hooks'

export default function ShopPage() {
  useNaviProgress()
  /* Local State */
  const [productList, setProductList] = useState(Array(6).fill())
  /* Style */
  const { classes } = useStyles()
  /* Logic */
  const renderProduct = () => {
    return productList.map((prod) => {
      return (
        <Grid.Col key={randomId()} span={12} sm={6} md={4}>
          <CardProduct maxWidth={150} product={prod} />
        </Grid.Col>
      )
    })
  }
  useEffect(() => {
    productAPI.getAll().then((data) => {
      setProductList(data)
    })
  }, [])
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
              <Group position="apart" display={'none'} className={classes.menu}>
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
              <Grid>{renderProduct()}</Grid>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  )
}

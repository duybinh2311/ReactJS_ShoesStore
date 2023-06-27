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
import React, { useEffect, useRef, useState } from 'react'
import useStyles from './ShopPage.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import CardProduct from 'components/cardProduct/CardProduct'
import productAPI from 'services/api/productAPI'
import { randomId } from '@mantine/hooks'
import Shuffle from 'shufflejs'

export default function ShopPage() {
  useNaviProgress()
  /* Local State */
  const [productList, setProductList] = useState(Array(6).fill())
  const [shuffle, setShuffle] = useState(null)
  const [filterKey, setFilterKey] = useState('*')
  /* Hook Init */
  const shuffleRef = useRef()
  /* Style */
  const { classes } = useStyles()
  /* Logic */
  const createShuffle = () => {
    setShuffle(
      new Shuffle(shuffleRef.current, {
        itemSelector: '.filter-item',
        speed: 500,
        staggerAmount: 100,
        useTransforms: true,
      })
    )
  }
  const renderProduct = () => {
    return productList.map((prod, index) => {
      const key = prod ? prod.id : index
      return (
        <Grid.Col
          key={key}
          span={12}
          sm={6}
          md={4}
          className="filter-item"
          data-filter={prod?.categories[0]?.id}
        >
          <CardProduct maxWidth={150} product={prod} />
        </Grid.Col>
      )
    })
  }
  const filterProduct = (keyFilter) => {
    if (shuffle) {
      setFilterKey(keyFilter)
    } else {
      createShuffle()
      setFilterKey(keyFilter)
    }
  }
  useEffect(() => {
    productAPI.getAll().then((data) => {
      setProductList(data)
    })
  }, [])
  useEffect(() => {
    if (shuffle) {
      shuffle.sort({})
      shuffle.filter((item) => {
        if (filterKey === '*') return item
        const dataFilter = item.getAttribute('data-filter')
        if (dataFilter === filterKey) return item
      })
    }
  }, [filterKey])
  return (
    <>
      <section className={classes.shop}>
        <Container size={'xl'}>
          <Grid>
            <Grid.Col span={12} md={2}>
              <Tabs
                orientation="vertical"
                defaultValue="*"
                onTabChange={filterProduct}
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
                  <Tabs.Tab value="*">All Product</Tabs.Tab>
                  <Tabs.Tab value="NIKE">Nike</Tabs.Tab>
                  <Tabs.Tab value="VANS_CONVERSE">Vans Converse</Tabs.Tab>
                  <Tabs.Tab value="ADIDAS">Adidas</Tabs.Tab>
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
              <Grid ref={shuffleRef}>{renderProduct()}</Grid>
            </Grid.Col>
          </Grid>
        </Container>
      </section>
    </>
  )
}

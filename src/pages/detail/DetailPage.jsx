import {
  ActionIcon,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Title,
} from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React from 'react'
import product from 'assets/img/product1.png'
import styleDetailProduct from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function DetailPage() {
  useNaviProgress()
  /* Style */
  const { classes } = styleDetailProduct()
  return (
    <section className={classes.detailProduct}>
      <Container size={'xl'}>
        <Grid>
          <Grid.Col span={6}>
            <Image src={product} width={'100%'} p={50} bg={'white'} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Group position="apart">
              <Title order={2}>Product Name</Title>
              <ActionIcon className={classes.likeIcon}>
                <FontAwesomeIcon icon={faHeart} />
              </ActionIcon>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  )
}

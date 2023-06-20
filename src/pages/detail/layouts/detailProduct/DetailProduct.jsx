import {
  ActionIcon,
  Button,
  Divider,
  Grid,
  Group,
  Image,
  Rating,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import React, { useState } from 'react'
import product from 'assets/img/product1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import PaymentIcon from 'components/base/PaymentIcon'
import AvatarCustomer from '../../components/AvatarCustomer'
import SizeGroup from '../../components/SizeGroup'
import useStyles from './DetailProduct.style'

export default function DetailProduct() {
  /* Local State */
  const [quantity, setQuantity] = useState(1)
  /* Style */
  const { classes } = useStyles()
  return (
    <Grid>
      <Grid.Col sm={12} md={6}>
        <Image src={product} p={50} bg={'white'} />
      </Grid.Col>
      <Grid.Col sm={12} md={6}>
        <Stack justify="space-between" h={'100%'}>
          <Stack>
            <Group position="apart">
              <Title order={2} italic tt={'uppercase'}>
                Product Name
              </Title>
              <ActionIcon
                className={classes.likeIcon}
                size={'lg'}
                radius={'xl'}
              >
                <FontAwesomeIcon icon={faHeart} />
              </ActionIcon>
            </Group>
            <Divider mt={'md'} />
            <Group position="apart">
              <Group>
                <Rating value={5} readOnly />
                <Text>(View Rated)</Text>
              </Group>
              <AvatarCustomer />
            </Group>
            <Text size={24} fw={'bold'} variant="gradient">
              $ 10.000
            </Text>
            <SizeGroup />
            <Group>
              <Group className={classes.wrapQuantity} position="apart">
                <ActionIcon
                  className={classes.controlQuantity}
                  onClick={() => setQuantity((quantity) => quantity - 1)}
                  disabled={quantity === 1}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </ActionIcon>
                <Text ta="center" miw={20}>
                  {quantity}
                </Text>
                <ActionIcon
                  className={classes.controlQuantity}
                  onClick={() => setQuantity((quantity) => quantity + 1)}
                  disabled={quantity === 20}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </ActionIcon>
              </Group>
              <Button className={classes.btnAdd} tt={'uppercase'}>
                Add To Cart
              </Button>
            </Group>
            <Text color="dimmed" mt={'md'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              exercitationem quidem. Sit labore reprehenderit nulla incidunt
              saepe omnis, veritatis eos debitis? Animi magnam voluptatum earum,
              tenetur sequi fugit, similique excepturi facilis molestiae ipsum
              quaerat, perspiciatis et? Est ipsum saepe sapiente obcaecati
              beatae commodi, voluptates omnis ut eaque, exercitationem,
              voluptate doloremque?
            </Text>
          </Stack>
          <PaymentIcon />
        </Stack>
      </Grid.Col>
    </Grid>
  )
}

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
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import AvatarCustomer from '../avatarCustomer/AvatarCustomer'
import SizeGroup from '../sizeGroup/SizeGroup'
import useStyles from './DetailProduct.style'
import PaymentIcon from 'components/paymentIcon/PaymentIcon'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import userAPI from 'services/api/userAPI'
import { toast } from 'react-hot-toast'
import userThunk from 'services/redux/thunk/userThunk'

export default function DetailProduct({ product }) {
  /* Local State */
  const [quantity, setQuantity] = useState(1)
  const [like, setLike] = useState(false)
  /* App State */
  const { userProductLike } = useSelector((state) => state.user)
  /* Hook Init */
  const dispatch = useDispatch()
  /* Style */
  const { classes } = useStyles()
  /* Logic */
  const likeProduct = () => {
    if (userProductLike.email && !like) {
      userAPI
        .likeProduct(product?.id, false)
        .then((data) => {
          const action = userThunk.getProductLike()
          dispatch(action)
          toast.success(data)
        })
        .catch((error) => {
          toast.error(error)
        })
      return
    }
    if (userProductLike.email && like) {
      userAPI
        .unlikeProduct(product?.id, false)
        .then((data) => {
          const action = userThunk.getProductLike()
          dispatch(action)
          toast.success(data, { iconTheme: { primary: 'red' } })
        })
        .catch((error) => {
          toast.error(error)
        })
      return
    }
    toast.dismiss()
    toast.error('You are not logged in')
  }
  useEffect(() => {
    if (product) {
      const isLike = userProductLike.productsFavorite.some((item) => {
        return item.id === product.id
      })
      setLike(isLike)
    }
  }, [product, userProductLike])
  return (
    <Grid>
      <Grid.Col sm={12} md={6}>
        {product ? (
          <Image src={product.image} p={50} bg={'white'} />
        ) : (
          <Skeleton height={'100%'} />
        )}
      </Grid.Col>
      <Grid.Col sm={12} md={6}>
        <Stack justify="space-between" h={'100%'}>
          <Stack>
            {product ? (
              <Group position="apart">
                <Title order={2} italic tt={'uppercase'}>
                  {product?.name}
                </Title>
                <ActionIcon
                  className={classes.likeIcon}
                  size={'lg'}
                  radius={'xl'}
                  onClick={likeProduct}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    color={like ? 'red' : 'white'}
                  />
                </ActionIcon>
              </Group>
            ) : (
              <Skeleton height={30} />
            )}
            <Divider mt={'md'} />
            <Group position="apart" mb={-10}>
              {product ? (
                <>
                  <Group>
                    <Rating value={5} readOnly />
                    <Text>(View Rated)</Text>
                  </Group>
                  <AvatarCustomer />
                </>
              ) : (
                <>
                  <Skeleton inline height={20} width={200} />
                  <Skeleton inline height={20} width={200} />
                </>
              )}
            </Group>
            <Text size={24} fw={'bold'} variant="gradient">
              {product ? `$ ${product.price}` : <Skeleton />}
            </Text>
            {product ? (
              <SizeGroup data={product.size} />
            ) : (
              <Skeleton height={20} />
            )}
            {product ? (
              <Group>
                <Group
                  className={classes.wrapQuantity}
                  position="apart"
                  mt={'xs'}
                >
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
                <Button className={classes.btnAdd} tt={'uppercase'} mt={'xs'}>
                  Add To Cart
                </Button>
              </Group>
            ) : (
              <Skeleton height={40} />
            )}
            <Text color="dimmed" mt={'md'}>
              {product?.description || <Skeleton count={2} />}
            </Text>
          </Stack>
          <PaymentIcon />
        </Stack>
      </Grid.Col>
    </Grid>
  )
}

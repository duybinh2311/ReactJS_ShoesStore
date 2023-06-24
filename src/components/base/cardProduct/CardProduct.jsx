import {
  faCartPlus,
  faDollarSign,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Rating,
  Text,
  ThemeIcon,
} from '@mantine/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import bgProduct from 'assets/img/bg-product.jpg'
import useStyles from './CardProduct.style'
import Skeleton from 'react-loading-skeleton'

export default function CardProduct({ maxWidth, product }) {
  /* Style */
  const { classes } = useStyles()
  return (
    <>
      <Card withBorder radius={'md'} pt={0}>
        <Card.Section
          className={classes.cardSection}
          bg={`url(${bgProduct})`}
          bgp={'center'}
          bgsz={'cover'}
        >
          {product ? (
            <NavLink to={'/detail/productId=10'}>
              <Image
                src={product.image}
                py={10}
                mx={'auto'}
                maw={maxWidth}
                classNames={{
                  image: classes.image,
                }}
              />
            </NavLink>
          ) : (
            <Skeleton
              style={{
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
              height={200}
            />
          )}
        </Card.Section>
        <Badge
          className={classes.badgeTop}
          variant="gradient"
          gradient={{ from: 'red', to: 'yellow' }}
        >
          best seller
        </Badge>
        <ActionIcon className={classes.likeIcon}>
          <FontAwesomeIcon icon={faHeart} />
        </ActionIcon>
        <Text fw={500} mt={'sm'}>
          <NavLink className={classes.title}>
            {product?.name || <Skeleton />}
          </NavLink>
        </Text>
        <Text fz={'sm'} color="dimmed" lineClamp={2}>
          {product?.description || <Skeleton count={2} />}
        </Text>
        <Group position="apart" mt={'sm'}>
          <Group>
            <ThemeIcon>
              <FontAwesomeIcon icon={faDollarSign} />
            </ThemeIcon>
            <Text fw={'bold'}>{product?.price || <Skeleton width={50} />}</Text>
          </Group>
          <Rating value={5} readOnly />
        </Group>
        {product ? (
          <Button
            variant="gradient"
            size="xs"
            mt={'sm'}
            fullWidth
            leftIcon={<FontAwesomeIcon icon={faCartPlus} />}
          >
            Add To Cart
          </Button>
        ) : (
          <Skeleton style={{ marginTop: 10 }} height={30} />
        )}
      </Card>
    </>
  )
}

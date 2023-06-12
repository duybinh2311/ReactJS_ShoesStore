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
import dataCarousel from 'pages/home/components/carousel/data'
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styleCardProduct from './style'
import bgProduct from 'assets/img/bg-product.jpg'

export default function CardProduct({ maxWidth, height }) {
  /* Style */
  const { classes } = styleCardProduct()
  return (
    <>
      <Card withBorder radius={'md'} h={height}>
        <Card.Section
          className={classes.cardSection}
          bg={`url(${bgProduct})`}
          bgp={'center'}
          bgsz={'cover'}
        >
          <NavLink>
            <Image
              src={dataCarousel.productItem[1]}
              py={10}
              mx={'auto'}
              maw={maxWidth}
              classNames={{
                image: classes.image,
              }}
            />
          </NavLink>
        </Card.Section>
        <Badge
          className={classes.badgeTop}
          variant="gradient"
          gradient={{ from: 'red', to: 'yellow' }}
        >
          new release
        </Badge>
        <ActionIcon className={classes.likeIcon}>
          <FontAwesomeIcon icon={faHeart} />
        </ActionIcon>
        <Text fw={500} mt={'sm'}>
          <NavLink className={classes.title}>Product Name</NavLink>
        </Text>
        <Text fz={'sm'} color="dimmed" lineClamp={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          atque magnam velit possimus quia maiores.
        </Text>
        <Group position="apart" mt={'sm'}>
          <Group>
            <ThemeIcon>
              <FontAwesomeIcon icon={faDollarSign} />
            </ThemeIcon>
            <Text fw={'bold'}>10.000</Text>
          </Group>
          <Rating defaultValue={5} readOnly />
        </Group>
        <Button
          variant="gradient"
          size="xs"
          mt={'sm'}
          fullWidth
          leftIcon={<FontAwesomeIcon icon={faCartPlus} />}
        >
          <Text>Add To Cart</Text>
        </Button>
      </Card>
    </>
  )
}

CardProduct.propTypes = {
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

import React, { useState } from 'react'
import Slider from 'react-slick'
import dataCarousel from './data'
import useStyles from './Carousel.style'
import { Container, Group, Image } from '@mantine/core'

export default function Carousel() {
  /* Local State */
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  /* Style */
  const { classes } = useStyles()
  return (
    <>
      <Slider
        ref={(slider1) => setNav1(slider1)}
        asNavFor={nav2}
        arrows={false}
      >
        {dataCarousel.productItem.map((item, index) => {
          return (
            <Group key={index}>
              <Image
                src={item}
                classNames={{
                  imageWrapper: classes.imageWrapper,
                  image: classes.image,
                }}
              />
            </Group>
          )
        })}
      </Slider>
      <Container
        size={'xs'}
        sizes={{
          xs: '35rem',
        }}
        mr={0}
        className={classes.container}
      >
        <Slider
          ref={(slider2) => setNav2(slider2)}
          asNavFor={nav1}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          autoplay={true}
          autoplaySpeed={5000}
          arrows={false}
        >
          {dataCarousel.productItem.map((item, index) => {
            return (
              <Group key={index}>
                <Image
                  src={item}
                  alt="product"
                  p={10}
                  classNames={{
                    root: classes.rootImage2,
                    imageWrapper: classes.imageWrapper2,
                    figure: classes.figure2,
                    image: classes.image2,
                  }}
                />
              </Group>
            )
          })}
        </Slider>
      </Container>
    </>
  )
}

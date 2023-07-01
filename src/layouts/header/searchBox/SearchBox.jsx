import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Autocomplete, Avatar, Box, Group, Stack, Text } from '@mantine/core'
import React, { forwardRef, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import productAPI from 'services/api/productAPI'

export default function SearchBox() {
  /* Local State */
  const [searchInput, setSearchInput] = useState('')
  const [productList, setProductList] = useState([])
  const data = productList.map((item) => {
    const { image, id, price, name } = item
    return { id, image, price, name, value: name }
  })
  /* Render */
  const itemSearch = forwardRef(({ image, price, name, id }, ref) => {
    return (
      <NavLink ref={ref} to={`/detail/${id}`} style={{ color: 'unset' }}>
        <Group
          noWrap
          align="flex-start"
          py={5}
          sx={(theme) => ({
            ':hover': {
              backgroundColor: theme.colors.dark[7],
            },
          })}
        >
          <Avatar src={image} bg={'white'} style={{ border: 0 }} size={'lg'} />
          <Stack spacing={0}>
            <Text>{name}</Text>
            <Text size="xs" color="dimmed">
              $ {price}
            </Text>
          </Stack>
        </Group>
      </NavLink>
    )
  })
  /* Logic */
  const handleChangeInput = (value) => {
    setSearchInput(value)
  }
  useEffect(() => {
    if (searchInput) {
      productAPI.getByKeyWord(searchInput).then((data) => {
        setProductList(data)
      })
    } else {
      setProductList([])
    }
  }, [searchInput])
  return (
    <Autocomplete
      icon={<FontAwesomeIcon icon={faSearch} />}
      data={data}
      itemComponent={itemSearch}
      onChange={handleChangeInput}
      maxLength={100}
      limit={20}
      styles={(theme) => ({
        root: {
          width: 500,
          [theme.fn.smallerThan(700)]: {
            width: 400,
          },
          [theme.fn.smallerThan(600)]: {
            display: 'none',
          },
        },
        dropdown: {
          overflow: 'auto',
          maxHeight: 400,
        },
      })}
    />
  )
}

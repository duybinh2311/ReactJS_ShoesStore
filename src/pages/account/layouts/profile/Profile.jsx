import {
  Avatar,
  Button,
  Card,
  Divider,
  Group,
  Indicator,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import CardProduct from 'components/base/cardProduct'

export default function Profile() {
  return (
    <>
      <Card withBorder padding="xl" radius="md" ta={'center'}>
        <Card.Section
          sx={(theme) => ({
            background: theme.fn.radialGradient(
              theme.colors.violet[5],
              theme.colors.violet[9],
              theme.colors.gray[9]
            ),
            height: 140,
          })}
        />
        <Tooltip
          label={'Diamon Member'}
          color="violet"
          withArrow
          position="top"
          arrowSize={6}
          offset={35}
          transitionProps={{
            transition: 'slide-left',
            duration: 200,
            timingFunction: 'ease',
          }}
        >
          <Indicator inline label={<FontAwesomeIcon icon={faGem} />} size={24}>
            <Avatar
              src="https://i.pravatar.cc/1000?u=human_10pravatar.com"
              size={80}
              radius={80}
              mt={-35}
            />
          </Indicator>
        </Tooltip>
        <Group position="center" mb={'md'}>
          <Stack spacing={0}>
            <Text ta="center" fz="lg" fw={500} mt="sm" color="white">
              Nguyễn Duy Bình
            </Text>
            <Text ta="center" fz="sm" c="dimmed">
              duybinh@gmail.com
            </Text>
          </Stack>
        </Group>
        <Divider
          label={
            <Text size={18} mx={10} color="white">
              My Wish List
            </Text>
          }
          labelPosition="center"
          my={'xl'}
        />
        <SimpleGrid
          cols={4}
          breakpoints={[
            {
              maxWidth: 'lg',
              cols: 3,
            },
            {
              maxWidth: 'md',
              cols: 2,
            },
            {
              maxWidth: 'sm',
              cols: 1,
            },
          ]}
        >
          <CardProduct maxWidth={150} />
          <CardProduct maxWidth={150} />
          <CardProduct maxWidth={150} />
          <CardProduct maxWidth={150} />
        </SimpleGrid>
        <Button fullWidth radius="md" mt="xl" size="md">
          Logout
        </Button>
      </Card>
    </>
  )
}

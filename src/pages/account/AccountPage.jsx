import {
  Avatar,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Indicator,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React from 'react'
import useStyles from './AccountPage.style'
import CardProduct from 'components/base/CardProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'

export default function AccountPage() {
  useNaviProgress()
  /* Style */
  const { classes } = useStyles()
  return (
    <>
      <section className={classes.profile}>
        <Container size={'xl'}>
          <Card withBorder padding="xl" radius="md">
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
            <Group position="center">
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
                <Indicator
                  inline
                  label={<FontAwesomeIcon icon={faGem} />}
                  size={24}
                >
                  <Avatar
                    src="https://i.pravatar.cc/1000?u=human_10pravatar.com"
                    size={80}
                    radius={80}
                    mt={-35}
                  />
                </Indicator>
              </Tooltip>
            </Group>
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
                  maxWidth: 'xs',
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
        </Container>
      </section>
    </>
  )
}

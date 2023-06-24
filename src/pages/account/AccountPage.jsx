import {
  Avatar,
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
import React, { useEffect } from 'react'
import useStyles from './AccountPage.style'
import CardProduct from 'components/base/CardProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import openLogin from 'components/base/FormLogin/openLogin'

export default function AccountPage() {
  useNaviProgress()
  /* App State */
  const { userProfile } = useSelector((state) => state.user)
  /* Hook Init */
  const navigate = useNavigate()
  /* Style */
  const { classes } = useStyles()
  /* Logic */
  useEffect(() => {
    if (!('name' in userProfile)) {
      navigate('/')
    }
    return () => {
      if (!('name' in userProfile)) {
        toast.error('You are not logged in')
        openLogin()
      }
    }
  }, [userProfile])
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
                    src={userProfile.avatar}
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
                  {userProfile.name}
                </Text>
                <Text ta="center" fz="sm" c="dimmed">
                  {userProfile.email}
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
          </Card>
        </Container>
      </section>
    </>
  )
}

import { Container, Divider } from '@mantine/core'
import useNaviProgress from 'hooks/useNaviProgress'
import React from 'react'
import Profile from './layouts/profile/Profile'
import useStyles from './AccountPage.style'

export default function AccountPage() {
  useNaviProgress()
  /* Style */
  const { classes } = useStyles()
  return (
    <>
      <section className={classes.profile}>
        <Container size={'xl'}>
          <Profile />
        </Container>
      </section>
    </>
  )
}

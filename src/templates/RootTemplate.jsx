import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import ModalFormRegister from 'components/base/ModalFormRegister'
import ModalFormLogin from 'components/base/ModalFormLogin'
import { useSelector } from 'react-redux'

export default function RootTemplate() {
  const openLogin = useSelector(({ modalSlice }) => modalSlice.login)
  const openRegister = useSelector(({ modalSlice }) => modalSlice.register)
  return (
    <>
      <ModalFormLogin
        opened={openLogin}
        title={'Sign In'}
        typeReducer={'openLogin'}
      />
      <ModalFormRegister
        opened={openRegister}
        title={'Register'}
        typeReducer={'openRegister'}
      />
      <Header />
      <main
        style={{
          margin: '0 0 100px',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

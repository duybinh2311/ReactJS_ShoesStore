import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/layout/header'
import Footer from 'components/layout/footer'

export default function RootTemplate() {
  return (
    <>
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

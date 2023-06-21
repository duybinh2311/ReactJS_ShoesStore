import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

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

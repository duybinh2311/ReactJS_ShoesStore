import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'layouts/footer/Footer'
import Header from 'layouts/header/Header'

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

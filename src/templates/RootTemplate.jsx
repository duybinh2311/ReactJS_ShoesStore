import React from 'react'
import Footer from 'components/layout/Footer'
import { Outlet } from 'react-router-dom'
import Header from 'components/layout/header'

export default function RootTemplate() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '90vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

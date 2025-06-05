import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import {Outlet} from "react-router"

const MainLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet/>
    </>
  )
}

export default MainLayout
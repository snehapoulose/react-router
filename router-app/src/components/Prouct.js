import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Prouct = () => {
  return (
    <div>
        <Link to= "shop">Shop</Link>
        <Link to= "electronics">Electric</Link>
        <br/>
        Prouct Page
        <Outlet/>
        </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalNav from './GlobalNav'

export default function Layout() {
  return (
    <div>
        <GlobalNav />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

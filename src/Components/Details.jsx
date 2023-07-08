import React from 'react'
import { Outlet } from 'react-router-dom'

function Details() {
  return (
    <div className='details'>
      <Outlet/>
    </div>
  )
}

export default Details

import React from 'react'
import Navbar from '../Navbar'

export default function Layout(props:any) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <> 
        <div>Navbar</div>
        <div><Link to="/signup">Signup</Link></div>
        <div><Link to="/">Home</Link></div>
    </> 
  )
}

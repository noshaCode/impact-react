import React from 'react'
import { Link } from 'react-router-dom'

export default function GlobalNav() {
  return (
    <div>
        <h3>Navbar</h3>
        <div>
            <Link to="/signup">Signup</Link>
        </div>
        <div>
            <Link to="/">Home</Link>
        </div>
    </div>
  )
}

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

export default function GlobalNav() {

  const {user} = useContext(UserContext)

  return (
    <div>
        <h3>Navbar</h3>
        {user ? (
        <div>
            <Link to="/logout">Logout</Link>
        </div> 
        ) : (
        <div>
            <Link to="/signup">Signup</Link>
        </div>
        )}
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/questions/new">New Question</Link>
        </div>
    </div>
  )
}

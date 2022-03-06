import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export default function Logout() {

  const {setUser} = useContext(UserContext)
  let navigate = useNavigate();

  useEffect(()=> {
    setUser(null)
    navigate('/')
  }, [setUser, navigate])

  return (
    <div>Logout</div>
  )
}

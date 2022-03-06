import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

export default function Signup() {

  const {setUser} = useContext(UserContext)
  let navigate = useNavigate();

  useEffect(()=> {
    setUser("Abdullah")
    navigate('/')
  }, [setUser, navigate])

  return (
    <div>Signup</div>
  )
}

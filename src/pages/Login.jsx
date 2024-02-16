import React, { useEffect, useState } from 'react'
import LoginComp from '../components/Login/LoginComp'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  const [token, setToken] = useState(null)

  const handelSubmit = (e) => {
    e.preventDefault()
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: e.target.userName.value,
        password: e.target.password.value,
      })
    })
    .then(res => res.json())
    .then(console.log);

    navigate("/")
  }
  
  return (
    <LoginComp handelSubmit={handelSubmit}/>
  )
}

export default Login
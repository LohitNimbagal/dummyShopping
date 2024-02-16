import React from 'react'
import SignupComp from '../components/Signup/SignupComp'
import { useNavigate } from 'react-router-dom'

function Signup() {

  const navigate = useNavigate()

  const handelSubmit = (e) =>{
    e.preventDefault()
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: e.target.email.value,
        firstName: e.target.userName.value,
        password: e.target.password.value,
      })
    })
    .then(res => res.json())
    .then(console.log);
    navigate("/login")
  }

  return (
    <>
    <SignupComp handelSubmit={handelSubmit}/>
    </>
  )
}

export default Signup
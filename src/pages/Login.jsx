import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { toast } from 'react-toastify'
import LoginComp from '../components/Login/LoginComp'

function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handelSubmit = async (e) => {
    e.preventDefault()

    await
      axios
        .post('https://dummyjson.com/auth/login', {
          username: e.target.userName.value,
          password: e.target.password.value,
          expiresInMins: 60
        })
        .then(response => {
          localStorage.setItem("authToken", response.data.token);

          axios
            .get('https://dummyjson.com/auth/me', { headers: { 'Authorization': `Bearer ${response.data.token}` } })
            .then(response => {
              dispatch(login(response.data.token))
              toast.success('Logged In 👍', {
                progress: false,
              },)
              navigate("/")
            })
            .catch(error => {
              // console.log(error.message)
              toast.error(`Login Failed : ${error.message} 🤯`, {
                progress: false,
              })
            })
        })
        .catch((error) => {
          // console.log(error.message);
          toast.error(`Login Failed : ${error.message} 🤯`, {
            progress: false,
          })
        })
  }

  return (
    <LoginComp handelSubmit={handelSubmit} />
  )
}

export default Login
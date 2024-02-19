import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { toast }  from 'react-toastify'
import LoginComp from '../components/Login/LoginComp'

function Login() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handelSubmit = async (e) => {
    e.preventDefault()

    await toast.promise(
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
                navigate("/")
            })
            .catch(error => {
                console.log(error);
            })
          })
          .catch((error) => {
            console.log(error);
          }),
          {
            pending: 'Logging In...',
            success: 'Logged In 👍',
            error: 'Login Failed 🤯',
          }
  )}

  return (
    <LoginComp handelSubmit={handelSubmit} />
  )
}

export default Login
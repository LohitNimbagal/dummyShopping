import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import Input from '../components/ui/Input.jsx'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")

  const login = async (data) => {
    setError("")
    try {
      const loggedInUserData = await authService.login(data)
      if (loggedInUserData) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(authLogin(data))
          navigate("/")
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="h-screen flex justify-center">
      <div
        className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">GooShopping</h1>
          <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
          <button type="submit" onClick={() => navigate("/about")} className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>

      <div className="flex w-1/2 justify-center items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit(login)}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

          {/* <!-- Username Input --> */}

          <div className='mb-4'>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <Input
                placeholder="Email Address"
                type="email"
                {...register("email", {
                  required: true,

                })}
              />
            </div>
            <span className='text-xs' onClick={() => { navigator.clipboard.writeText("test@test.com") }}>Test Email : <span className='hover:text-blue-700'>test@test.com</span> </span>
          </div>

          {/* <!-- Password Input --> */}

          <div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <Input
                placeholder="Password"
                type="password"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <span className='text-xs' onClick={() => { navigator.clipboard.writeText("password123") }}>Test Password : <span className='hover:text-blue-700'>password123</span> </span>
          </div>


          {/* <!-- Login Button --> */}

          <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
          <p className='text-sm'>Don't have an account?<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer"><Link to={"/signup"}>Create your account</Link></span></p>

        </form>
      </div>
    </div>
  )
}

export default Login
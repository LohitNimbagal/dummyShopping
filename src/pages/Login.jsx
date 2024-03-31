import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      const loggedInUserData = await authService.login({ email: e.target.email.value, password: e.target.password.value })
      if (loggedInUserData) {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(authLogin(userData))
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
        <form className="bg-white" onSubmit={e => handleSubmit(e)}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          {error && <p className="text-red-600 mt-8 text-center text-sm pb-3">{error}</p>}


          {/* <!-- Username Input --> */}

          <div className='mb-4'>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                placeholder="Email Address"
                type="email"
                id='email'
                name='email'
                className='outline-none'
              />
            </div>
            <div className='text-xs flex p-2 gap-5 items-center'>
              <p>
                Test Email :
                <span className='hover:text-blue-700'> test@test.com </span>
              </p>
              <span onClick={() => { navigator.clipboard.writeText("test@test.com") }} className='hover:cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10px" height="10px" fill="gray"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
              </span>
            </div>
          </div>

          {/* <!-- Password input --> */}

          <div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                placeholder="Password"
                type="password"
                id='password'
                name='password'
                className='outline-none'
              />
            </div>
            <div className='text-xs flex p-2 gap-5 items-center'>
              <p>
                Test Password :
                <span className='hover:text-blue-700'> password</span>
              </p>
              <span onClick={() => { navigator.clipboard.writeText("password") }} className='hover:cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10px" height="10px" fill="gray"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
              </span>
            </div>
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
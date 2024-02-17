import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'

function Hearder({ loggedin }) {
  const navigate = useNavigate()
  const cartItems = useSelector(state => state.cart)

  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
        <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">

          <NavLink to={"/"} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 text-blue-500 sm:h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>

            <span className="self-center whitespace-nowrap text-xl font-semibold">GoShopping</span>
          </NavLink>

          <div className="mt-2 sm:mt-0 sm:flex md:order-2">

            {/* <!-- Menu Button --> */}
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
              {/* <span className="sr-only">Open main menu</span> */}
              <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>

            <div className={`${!loggedin ? 'flex' : 'hidden'} gap-3`}>
              {/* <!-- Login Button --> */}
              <button type="button" className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg" onClick={() => navigate("/login")}>Log In</button>

              {/* <!-- Signup Button --> */}
              <button type="button" className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg" onClick={() => navigate("/signup")}>Sign Up</button>
            </div>

            <div className={`${loggedin ? 'flex' : 'hidden'} gap-3`}>
              {/* <!-- Cart Button --> */}

              <button type="button" className=" rounde hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg" onClick={() => navigate("/cart")}>Cart ({cartItems.length})</button>

              {/* <!-- Logout Button --> */}
              <button type="button" className="rounde hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg" onClick={() => {

                dispatch(logout())
                // navigate("/login")
              }
              }>Log Out</button>
            </div>

          </div>

          <div className={`${isOpen ? 'flex' : 'hidden'} w-full items-center justify-between md:flex md:order-1 md:w-auto`} id="navbar-sticky">
            {loggedin
              ? (
                  <ul className={`w-full mt-4 flex flex-col gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4 md:flex md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium`}>
                    <li>
                      <NavLink to="/" className={({ isActive }) => `block rounded bg-transperent py-2 pl-3 pr-4 text-gray-700 md:bg-transparent md:p-0 ${isActive ? "bg-blue-700 text-white md:text-blue-700" : "md:text-gray-700"}`} aria-current="page">Home </NavLink>
                    </li>

                    <li>
                      <NavLink to="/cart" className={({ isActive }) => `block rounded bg-transperent py-2 pl-3 pr-4 text-gray-700 md:bg-transparent md:p-0 ${isActive ? "bg-blue-700 text-white md:text-blue-700" : "md:text-gray-700"}`} aria-current="page">About </NavLink>
                    </li>

                    <li className='mt-2 flex gap-5 items-center justify-center'>
                      <button type="button" className=" rounde border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:hidden rounded-lg" onClick={() => navigate("/cart")}>Cart ({cartItems.length})</button>

                      {/* <!-- Logout Button --> */}
                      <button type="button" className="rounde bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:hidden rounded-lg" onClick={() => {

                        dispatch(logout())
                        // navigate("/login")
                      }
                      }>Log Out</button>
                    </li>
                  </ul>
              ) : (
                <div className='w-full flex p-5 justify-center gap-3'>
                  {/* <!-- Login Button --> */}
                  <button type="button" className="rounde mr-3 bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:hidden md:mr-0 rounded-lg" onClick={() => navigate("/login")}>Log In</button>

                  <button type="button" className="rounde mr-3 bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:hidden  md:mr-0  rounded-lg" onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
              )
            }
          </div>

        </div>
      </nav>
    </>
  )
}

export default Hearder
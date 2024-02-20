import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'

function Hearder({ loggedin }) {

  const navigate = useNavigate()
  const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
        <div className="container mx-auto flex max-w-6xl items-center justify-between">

          <NavLink to={"/"} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 text-blue-500 sm:h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>

            <span className="self-center whitespace-nowrap text-xl font-semibold">GoShopping</span>
          </NavLink>

          <div className="flex p-1" id="navbar-sticky">

            {loggedin
              ? (
                <div className="w-full flex items-center gap-3 rounded-lg text-sm md:space-x-8 md:border-0 md:bg-white md:font-medium">
                  <button type="button" className="px-4 text-center text-sm font-medium rounded-lg" onClick={() => navigate("/cart")}>
                      <div className="relative my-2">
                        <div className="absolute bottom-2 left-3">
                          <p className="flex h-0.5 w-0.5 items-center justify-center rounded-full bg-blue-700 p-3 text-xs text-white">{cartItems.length}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                      </div>
                  </button>

                  <button type="button" className="bg-blue-700 py-2 px-6 text-center text-xs md:text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg" onClick={() => {
                    localStorage.clear("authToken")
                    dispatch(logout())
                  }}>Log Out</button>
                </div>
              ) : (
                <div className='w-full flex items-center gap-3 rounded-lg text-sm md:space-x-8 md:border-0 md:bg-white md:font-medium'>
                  <button type="button" className="bg-blue-700 py-2 px-6 text-center text-xs md:text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg" onClick={() => navigate("/login")}>Log In</button>

                  <button type="button" className="bg-blue-700 py-2 px-6 text-center text-xs md:text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  rounded-lg" onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
              )}
          </div>

        </div>
      </nav>
    </>
  )
}

export default Hearder
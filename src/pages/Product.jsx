import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from "../hooks/useFetch"
import { lazy, Suspense } from 'react'
import { Loading } from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart, removeFromCart} from '../store/cartSlice'

import axios from 'axios'

function ProductPage() {

  const { id } = useParams()
  const [product, setProduct] = useState(undefined)
  const dispatch = useDispatch()
  const currency = useSelector(state => state.currency)
  const cartProducts = useSelector(state => state.cart)
  const url = `https://dummyjson.com/product/${id}`

  const { loading, error, data } = useFetch(url)

  useEffect(() => {
    setProduct(data)
  }, [data])



  const handelButtonClick = () => {
    if (cartProducts.some(pro => pro.item.id === product.id)) {
      dispatch(removeFromCart(product))
    } else {
      dispatch(addToCart({ item: product, quantity: 1 }))
    }
  }

  if (data) {

    return (
      <>
        <div className='bg-gray-100 min-h-screen px-30 py-10'>

          <Suspense fallback={<Loading />}>

            {product && Object.keys(product).length > 0 &&
              <div className='bg-gray-100 p-20 pt-15'>
                <div className="flex flex-wrap items-center justify-between mb-6 rounded-lg gap-5 bg-white px-20 py-10 shadow-md sm:flex sm:justify-start">
                  <div>
                    <img src={product.images[0]} alt={product.title} className='size-72 object-scale-down' />
                  </div>
                  <div className='flex-1 flex-col items-start'>
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>
                        <p className="mt-1 text-lg text-gray-700">{product.brand}</p>
                        <p className="mt-1 text-red-600 text-md "><span className='font-bold text-gray-600'>Discount: </span> {product.discountPercentage} % off /-</p>
                        <p className="mt-1 text-md text-gray-700"><span className='font-bold text-gray-600'>Description:</span>{product.description}</p>
                        <p className="mt-1 text-xl text-gray-900 font-bold">{Intl.NumberFormat(currency.countryCode.toUpperCase()).format(product.price * Math.floor(currency.countryRate))} {currency.countryCode.toUpperCase()}</p>
                        <p className="mt-1 text-md text-gray-700"><span className='font-bold text-gray-600'>Rating:</span> {product.rating}</p>

                        <div className="h-10 w-28 flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 hover:cursor-pointer my-2" onClick={() => handelButtonClick()}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                          </svg>

                          <button className="text-sm">
                            {cartProducts.some(pro => pro.item.id === product.id) ? "Remove" : "Add"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }

          </Suspense>
        </div>
      </>
    )
  }

}

export default ProductPage
import React, { useEffect, useState } from 'react'
import subTotal from '../utils/subTotal'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeFromCart } from '../store/cartThunkSlice'

function Cart() {
  const cartProducts = useSelector(state => state.cartThunk)
  const currency = useSelector(state => state.currency)
  const sTotal = subTotal()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  const hadelCardClick = (product) => {
    console.log(product);
    // navigate(`/product/${product.id}`)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 pt-32 pb-3">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Products</h1>
        {
          cartProducts.length > 0 ?
            (<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {cartProducts.map(product => (
                  // <CartCard product={product} key={product.id} />
                  <div key={product.title} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" onClick={() => hadelCardClick(product)}>
                    <img src={product?.images[0]} alt={product.title} className='size-36 object-scale-down' />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
                        <p className="mt-1 text-xs text-gray-700">{product.brand}</p>
                        {/* <p className="mt-1 text-xs text-gray-700">{product.discountPercentage} % off /-</p> */}
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => setQuantity(preValue => preValue <= 1 ? preValue : preValue - 1)}> - </span>
                          <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="text" value={quantity} readOnly />
                          <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => setQuantity(preValue => preValue >= 5 ? preValue : preValue + 1)}> + </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">
                            {Intl.NumberFormat(currency.countryCode.toUpperCase()).format(product.price * Math.floor(currency.countryRate))} {currency.countryCode.toUpperCase()}
                          </p>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 z-10"
                            onClick={() => {
                              dispatch(removeFromCart(product))
                            }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* <!-- Sub total --> */}

              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">{sTotal} {currency.countryCode.toUpperCase()}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">{Intl.NumberFormat(currency.countryCode.toUpperCase()).format(cartProducts.lenght > 0 ? "0" : 4.99 * Math.floor(currency.countryRate))} {currency.countryCode.toUpperCase()}</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">{Intl.NumberFormat(currency.countryCode.toUpperCase()).format(sTotal + 4.99 * Math.floor(currency.countryRate))} {currency.countryCode.toUpperCase()}</p>
                    <p className="text-sm text-gray-700">including GST</p>
                  </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
              </div>
            </div>) : <div className='flex items-center justify-center'>Your Card is Empty</div>
        }
      </div>
    </>
  )
}

export default Cart
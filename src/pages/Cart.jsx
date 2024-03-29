import React, { useEffect } from 'react'
import CartCard from '../components/Cart/CartCard'
import subTotal from '../utils/subTotal'
import { useDispatch, useSelector } from 'react-redux'
import service from '../appwrite/config'
import { fetchCartProducts } from '../store/cartThunkSlice'

function Cart() {
  const cartProducts = useSelector(state => state.cartThunk.cartProducts)
  const currency = useSelector(state => state.currency)
  const sTotal = subTotal()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchCartProducts)
  // }, [cartProducts])

  return (
    <>
      <div className="min-h-screen bg-gray-100 pt-32 pb-3">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Products</h1>
        {
          cartProducts.length > 0 ?
            (<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {cartProducts.map(product => (
                  <CartCard product={product} key={product.id} />
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
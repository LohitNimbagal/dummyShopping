import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/ui/Card';
import { Loading } from '../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, fetchCartProducts } from '../store/cartThunkSlice'

function Home() {

  const url = 'https://dummyjson.com/products'
  const { data, loading, error } = useFetch(url)
  const cartProducts = useSelector(state => state.cartThunk)
  const dispatch = useDispatch()

  const handleButtonClick = (product) => {
    const isAlreadyAdded = cartProducts?.find(eachProduct => eachProduct.id === product.id)

    if (isAlreadyAdded) {
      dispatch(removeFromCart(isAlreadyAdded))
    } if (!isAlreadyAdded) {
      dispatch(addToCart(product))
    }
  }

  useEffect(() => {
    dispatch(fetchCartProducts())
  }, [])

  return (
    <>
      <div className='bg-gray-100 min-h-screen'>

        <section className="py-10 pt-32 flex-1">
          {loading ? (
            <Loading />
          ) :
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {
                data.products?.map((product) => (
                  <Card product={product} key={product.id} handleButtonClick={handleButtonClick} cartProducts={cartProducts} />
                ))
              }
            </div>
          }
        </section >

      </div >
    </>
  )
}

export default Home

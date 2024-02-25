import React, { useEffect, useState } from 'react'
import ProductPageComp from '../components/ProductPageComp'
import { useParams } from 'react-router-dom'
import useFetch from "../hooks/useFetch"
import { lazy, Suspense } from 'react'
import { Loading } from '../components/UI/Loading'
import axios from 'axios'

function ProductPage() {

  const { id } = useParams()
  const [product, setProduct] = useState(undefined)
  const url = `https://dummyjson.com/product/${id}`

  const {loading, error, data} = useFetch(url)

  useEffect(() => {
    setProduct(data)
  }, [data])


  return (
    <>
      <div className='bg-gray-100 min-h-screen px-30 py-10'>

        <Suspense fallback={<Loading />}>
          {data && <ProductPageComp product={product} />}
        </Suspense>
      </div>
    </>
  )
}

export default ProductPage
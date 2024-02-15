import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Home/Card'
import FilterPannel from '../components/Home/FilterPannel';


function Home() {
  
  const {data, loading, error} = useFetch()

  const [filterdePro, setFilteredPro] = useState()
  const [priceRange, setPriceRange] = useState("1000")

  useEffect(() => {
    if (priceRange) {
      setFilteredPro(data?.products.filter((product) => product.price <= priceRange))
    }
  }, [data, priceRange])


  return (
    <>
    <div className='bg-gray-100'>
    
      <section className="py-10 pt-32 flex-1">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-10">
          {loading ? "Loading Products..." : (error ? "Failed to fetch products. Please try again later." : "All Products")}
        </h1>

        <FilterPannel priceRange={priceRange} setPriceFunction={setPriceRange}/>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            filterdePro?.map((product) => (
              <Card product={product} key={product.id} />
            ))
          }
        </div>
    </section>

    </div>
    </>
  )
}

export default Home

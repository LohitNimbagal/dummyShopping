import React, { useState, useEffect, Suspense } from 'react'
import useFetch from '../hooks/useFetch'
// import Card from '../components/Home/Card'
import FilterButton from '../components/Home/FilterButton';
import SortButton from '../components/Home/SortButton'
import SearchBar from '../components/Home/SearchBar';
import { Loading } from '../components/Loading';
import ErrorBoundary from "../components/ErrorBoundary";
import { lazy } from 'react';


function Home() {
  
  const url = 'https://dummyjson.com/products'
  const {data, loading, error} = useFetch(url)
  const [filteredPro, setFilteredPro] = useState()
  const [priceRange, setPriceRange] = useState("2000")
  const [searchTerm, setSearchTerm] = useState("")
  const Card = lazy(() => import('../components/Home/Card'))
  const [sortBy, setSortBy] = useState("High to Low") 

  useEffect(() => {
    if ((priceRange || searchTerm !== "") && data?.products) {

      setFilteredPro(null)

      const searchTermLower = searchTerm?.toLowerCase();
      
      const filteredProducts = data?.products.filter(product =>

        // SearchTerm Filtering
        ((product.title.toLowerCase().includes(searchTermLower) &&
        product.brand.toLowerCase().includes(searchTermLower) &&
        product.category.toLowerCase().includes(searchTermLower)) 
        
        ||

        (product.category.toLowerCase().includes(searchTermLower) ||
        product.title.toLowerCase().includes(searchTermLower) ||
        product.brand.toLowerCase().includes(searchTermLower))) 

        && 
        
        // Price Filtering
        product.price <= priceRange
      );
  
      setFilteredPro(filteredProducts);
    }
  }, [data, priceRange, searchTerm])


  return (
    <>
    <div className='bg-gray-100 min-h-screen'>

      <section className="py-10 pt-32 flex-1">
        {loading ? (
          <Loading />
        ) :

        <div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className='flex gap-2 px-5 lg:px-56'>
            <FilterButton priceRange={priceRange} setPriceFunction={setPriceRange} />
            {/* <SortButton /> */}
          </div>
          
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Suspense fallback={<Loading />}>
            {
              filteredPro?.map((product) => (
                <Card product={product} key={product.id} />
              ))
            }
            </Suspense>
          </div>

        </div> 
        }
      </section>

    </div>
    </>
  )
}

export default Home

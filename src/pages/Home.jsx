import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Home/Card'
import FilterButton from '../components/Home/FilterButton';
import SortButton from '../components/Home/SortButton'
import SearchBar from '../components/Home/SearchBar';
import { Loading } from '../components/UI/Loading';


function Home() {
  
  const {data, loading, error} = useFetch()

  const [filteredPro, setFilteredPro] = useState()
  const [priceRange, setPriceRange] = useState("2000")
  const [searchTerm, setSearchTerm] = useState("")
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

  // useEffect(() => {
  //   // if (filteredPro && sortBy === "Low to High") {
  //   //   const newA = filteredPro
  //   //   setFilteredPro(newA.sort((a,b) => {return a.price - b.price}))
  //   // } 
  //   if (filteredPro && sortBy === "High to Low") {
  //     const newA = filteredPro
  //     setFilteredPro(newA.sort((a,b) => {return a.price + b.price}))
  //   }
  // }, [data, sortBy])


  return (
    <>
    <div className='bg-gray-100 min-h-screen'>
        {/* <h1 className="text-center text-2xl font-bold text-gray-800 mb-10">
          // "Loading Products..." : 
          // (error ? "Failed to fetch products. Please try again later." : "All Products")
          }
        </h1> */}
    
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
            {
              filteredPro?.map((product) => (
                <Card product={product} key={product.id} />
              ))
            }
          </div>
        </div> 
        }
      </section>

    </div>
    </>
  )
}

export default Home

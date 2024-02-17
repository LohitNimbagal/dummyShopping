import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Home/Card'
import FilterPannel from '../components/Home/FilterPannel';
import SearchBar from '../components/Home/SearchBar';


function Home() {
  
  const {data, loading, error} = useFetch()

  const [filterdePro, setFilteredPro] = useState()
  const [priceRange, setPriceRange] = useState("2000")
  const [searchTerm, setSearchTerm] = useState("")


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
    <div className='bg-gray-100'>
    
      <section className="py-10 pt-32 flex-1">
        {/* <h1 className="text-center text-2xl font-bold text-gray-800 mb-10">
          {loading ? "Loading Products..." : (error ? "Failed to fetch products. Please try again later." : "All Products")}
        </h1> */}

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <FilterPannel priceRange={priceRange} setPriceFunction={setPriceRange} />

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

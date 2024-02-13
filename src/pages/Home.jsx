import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card';

function Home() {

  const {data, loading, error} = useFetch()
  
  // if (loading) {
  //   console.log("Loading...");
  // } else if (error) {
  //   console.log("Error Occured", error.response.status)
  // } else if (data) {
  //   console.log(data);
  // }

  return (
    <>

    <div className="pt-32 bg-white">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-10">
        {loading ? "Loading Products..." : (error ? "Failed to fetch products. Please try again later." : "All Products")}
      </h1>
    </div>

    <section className="py-10 bg-gray-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          <div className="w-full">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600">Failed to fetch products. Please try again later.</div>
        ) : (
          data?.products.map((product) => (
            <Card product={product} key={product.id} />
          ))
        )}
      </div>
    </section>

    </>
  )
}

export default Home

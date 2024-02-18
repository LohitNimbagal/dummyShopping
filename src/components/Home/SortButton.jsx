import React, { useState } from 'react'

const SortButton = (props) => {

  const handelOnChange = (e) => (
    props.setPriceFunction(e.target.value)
  )

  const [filterPannel, setFilterPannel] = useState(false)


  return (
    <div className=''>
      <button className='rounded m-1 hidden border border-gray-700 py-1 px-4 text-center text-sm font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 md:inline-block rounded-lg"' onClick={e => setFilterPannel(!filterPannel)}>Sort</button>

      {/* Price Range */}

      <div className= {`${filterPannel ? 'flex' : 'hidden'} gap-3 p-3`}>
        <label htmlFor="priceRange" className='flex gap-5 items-center'>
          Price Range : Min : $ 0
          <input 
            type="range" name='priceRange' min='0' max='2000' value={props.priceRange} step='50' onChange={(e) => handelOnChange(e)}/>
          Max : $ {props.priceRange}
        </label>
      </div>
  </div>
  )
}

export default SortButton
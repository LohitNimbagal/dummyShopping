import React, { useState } from 'react'

const FilterPannel = (props) => {

  const handelOnChange = (e) => (
    props.setPriceFunction(e.target.value)
  )


  return (
    <div className='px-5 lg:px-56'>
      <label htmlFor="priceRange" className='flex gap-5 items-center'>
        Min : 0
        <input 
          type="range" name='priceRange' min='0' max='1000' value={props.priceRange} step='50' onChange={(e) => handelOnChange(e)}/>
        Max : {props.priceRange}
      </label>
    </div>
  )
}

export default FilterPannel
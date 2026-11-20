import React from 'react'
import { RiSearchLine } from "@remixicon/react";

const SearchBar = () => {
  return (
    <div className='bg-cyan-600 w-1/4 flex rounded-full overflow-hidden'>
        <div className='w-1/5 items-center p-3'>
            <RiSearchLine size={25} className='text-blue-950'/>
        </div>
        <div className='w-4/5 opacity-50'>
            <input className='h-full w-full text-center outline-none' type="search" name="searchBar" placeholder='Search' />
        </div>
    </div> 
  )
}

export default SearchBar
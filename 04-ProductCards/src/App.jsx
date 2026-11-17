import React from 'react'
import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <div className='bg-zinc-600 h-screen w-full p-10 '>
      <h1 className='font-bold text-3xl mb-5'>FEATURED PRODUCTS</h1>
      <div className='w-full flex gap-5'>
        <ProductCard/>
      </div>
    </div>
  )
}

export default App
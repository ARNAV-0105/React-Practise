import React, { useState } from 'react'

const App = () => {
  const [quantity, setQuantity] = useState(1)
  const unitPrice = 2499

  return (
    <div className='h-screen w-full bg-black p-10'>
      <div className='h-90 w-170 bg-white rounded-lg p-8 '>
        <div className='w-full flex gap-5'>
          <div className='h-30 w-30 border rounded-2xl object-cover overflow-hidden'>
            <img className="h-full w-full object-cover" src="https://www.headphonezone.in/cdn/shop/files/Headphone-zone-Sennheiser-HDB-630-32.jpg?v=1763981128&width=500" />
          </div>
          <div className= 'h-30 w-3/4 py-2'>
            <h2 className='text-2xl font-sans font-semibold'>Wireless Headphones</h2>
            <h1 className='text-2xl font-sans font-bold'>Rs. {unitPrice}</h1>
            <h4 className='font-sans'>Price per unit</h4>
          </div>
        </div>
        <br />
        <hr />
        <div className='flex justify-between mt-5'>
          <div className='w-1/2 h-20 '>
            <h1 className='font-bold '>Quantity</h1>
            <br />
            <h1 className='font-bold '>Total</h1>
          </div>
          <div className=' h-20 w-1/2'>
            <div className=' h-1/2 flex gap-4 justify-end items-center'>
              <button className='bg-black text-white font-bold h-8 w-8 rounded-full active:scale-95'
              onClick={()=>{
                setQuantity(quantity=>quantity+1)
              }}>+</button>
              <h3 className='font-bold text-xl'>{quantity}</h3>
              <button className='bg-black text-white font-bold h-8 w-8 rounded-full active:scale-95'
              onClick={()=>{
                setQuantity(quantity=>Math.max(1,quantity-1)) 
              }}>-</button>
            </div>
            <div className='h-1/2 flex items-center justify-end pr-4'>
                <h1 className='font-bold text-green-500 text-2xl'>Rs. {quantity*unitPrice}</h1>
            </div>
          </div>
        </div>
        <button className='bg-gray-800 w-full mt-3 h-10 rounded-xl font-bold text-white'
        onClick={()=>{
          alert(`${quantity} items have been added to Cart`)
        }}>Add to Cart</button>
      </div>
    </div>
  )
}

export default App
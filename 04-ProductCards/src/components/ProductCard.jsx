import React from 'react'
import { RiStarFill } from "@remixicon/react";

const ProductCard = (props) => {
  return (
    <div>
        <div className='h-80 w-60 bg-white rounded-3xl p-3'>
          <div className='h-45 w-full bg-amber-400 rounded-lg border overflow-hidden'>
            <img className='object-cover overflow-hidden h-full w-full' src={props.img} alt="img" />
          </div>
          <div className='h-28 w-full rounded-lg'>
            <div className='h-2/3 w-full  flex justify-between'>
              <div className='w-3/4'>
                <div className='h-2/3 '>
                  <h4 className='text-xl font-bold'>{props.prodname}</h4>
                  <h1 className='text-xs text-gray-600'>{props.prodcat}</h1>
                </div>
                <div className='h-1/3'>
                  <h4 className='font-bold'>Rs. {props.price}</h4>
                </div>
              </div>

              <div className='bg-gray-200 w-15 h-8 rounded-xl mt-2 py-1 px-1 flex gap-2 items-center'>
                <RiStarFill size={18} color="rgba(27,253,7,1)" />
                <h2 className='text-gray-800'>{props.rating}</h2>
              </div>
            </div>
            <div>
              <button className='bg-pink-500 w-full mt-2 h-fit rounded-2xl active:scale-95 p-1 hover:bg-violet-600'
              onClick={()=>{
                alert(`${props.prodname} added to cart`)
              }}>Add To Cart</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard
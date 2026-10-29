import React, { useState } from 'react'

const App = () => { 

  const [num, setNum] = useState(0)
  
  return (
    <div className='bg-black h-screen w-full text-white'>
      <h1 className='font-bold text-4xl text-center'>COUNTER</h1>
      <div className='p-5 flex justify-center'>
        <h1 className='font-bold text-5xl'>{num}</h1>
      </div>
      <div className=' m-5 flex justify-center gap-10'>
        <button className='h-20 w-40 px-5 py-2 font-bold text-3xl bg-amber-600 rounded active:scale-95'
        onClick={()=>{setNum(num+1)}}>Increase</button>
        <button className='h-20 w-40 px-5 py-2 font-bold text-3xl bg-amber-600 rounded active:scale-95'
        onClick={()=>{if(num>0){setNum(num-1)}}}>Decrease</button>
        <button className='h-20 w-40 px-5 py-2 font-bold text-3xl bg-amber-600 rounded active:scale-95'
        onClick={()=>{setNum(0)}}>Reset</button>
        <button className='h-20 w-40 px-5 py-2 font-bold text-3xl bg-amber-600 rounded active:scale-95'
        onClick={()=>{setNum(num+5)}}>+5</button>
        <button className='h-20 w-40 px-5 py-2 font-bold text-3xl bg-amber-600 rounded active:scale-95'
        onClick={()=>{if(num>0){setNum(num-5)}}}>-5</button>
      </div>
    </div>
  )
}

export default App
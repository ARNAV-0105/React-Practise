import React, { useState } from 'react'

const App = () => { 

  const [num, setNum] = useState(0)
  const [step, setStep] = useState(1)
  const [mode, setMode] = useState("Light")
  
  return (
    <div className={`${mode==="Dark"?"bg-white text-black":"bg-black text-white"} h-screen w-full `}>
      <div className='h-20 w-full p-5 flex justify-between'>
        <h1 className=' font-bold text-4xl text-center'>COUNTER</h1>
        <div>
          <button className={`h-15 w-20 ${mode==="Dark"?"bg-gray-700 text-white":"bg-white text-black"} rounded-full active:scale-95`}
          onClick={()=>{if(mode==="Light"){setMode("Dark")}else setMode("Light");}}>{mode}</button>
        </div>
      </div>
      <div className='p-5 flex justify-center'>
        <h1 className='font-bold text-5xl'>{num}</h1>
      </div>
      <div className=' m-5 flex justify-center gap-10'>
        <button className='h-20 w-40 px-5 py-2 font-bold text-2xl bg-amber-600 rounded active:scale-95'
        onClick={()=>{setNum(num=>num+step)}}>+{step}</button>
        <button className='h-20 w-40 px-5 py-2 font-bold text-2xl bg-amber-600 rounded active:scale-95'
        onClick={()=>{if(num>=step){setNum(num=>num-step)}}}>-{step}</button>
        <button className='h-20 w-40 px-5 py-2 font-bold text-3xl bg-amber-600 rounded active:scale-95'
        onClick={()=>{setNum(0)}}>Reset</button>
        <button className='h-20 w-40 px-5 py-2 font-bold text-3xl bg-amber-600 rounded active:scale-95'
        onClick={()=>{setNum(num=>num+5)}}>+5</button>
        <button className='h-20 w-40 px-5 py-2 font-bold text-3xl bg-amber-600 rounded active:scale-95'
        onClick={()=>{setNum(num=>Math.max(0,num-5))}}>-5</button>
      </div>
      <div className='h-30 w-full flex justify-center gap-10'>
        <button className='h-20 px-5 py-2 font-bold text-3xl bg-amber-600 rounded-full active:scale-95'
        onClick={()=>{setStep(1)}}>01</button>
        <button className='h-20 px-5 py-2 font-bold text-3xl bg-amber-600 rounded-full active:scale-95'
        onClick={()=>{setStep(2)}}>02</button>
        <button className='h-20 px-5 py-2 font-bold text-3xl bg-amber-600 rounded-full active:scale-95'
        onClick={()=>{setStep(5)}}>05</button>
        <button className='h-20 px-5 py-2 font-bold text-3xl bg-amber-600 rounded-full active:scale-95'
        onClick={()=>{setStep(10)}}>10</button>
      </div>
    </div>
  )
}

export default App
import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full bg-violet-600 p-10 flex justify-center'>
      <div className='bg-white h-110 w-110 rounded-2xl flex flex-col overflow-hidden '>
          <h1 className='text-3xl font-bold text-violet-800 text-center mt-15'>Create Account</h1>
          <div className='mt-auto flex flex-col items-center gap-3 pb-5'>
            <input className='w-3/4 h-10 outline-none bg-gray-400 rounded-lg border text-center' type="text" placeholder='Full name' />
            <input className='w-3/4 h-10 outline-none bg-gray-400 rounded-lg border text-center' type="email" placeholder='Email' />
            <input className='w-3/4 h-10 outline-none bg-gray-400 rounded-lg border text-center' type="password" placeholder='Password' />
            <input className='w-3/4 h-10 outline-none bg-gray-400 rounded-lg border text-center' type="text" placeholder='Confirm Password' />
            <input className='w-3/4 h-10 outline-none bg-gray-400 rounded-lg border text-center' type='number' placeholder='Age' />
            <button className='h-10 w-3/4 bg-pink-600 rounded-lg active:scale-95'>Sign Up</button>
          </div>
      </div> 
    </div>
  )
}

export default App
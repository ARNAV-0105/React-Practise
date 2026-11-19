import React from 'react'
import EmployeeCard from './components/EmployeeCard'
import Filters from './components/Filters'

const App = () => {
  return (
    <div className='bg-black min-h-screen w-full text-white p-10'>
      <div className='h-fit w-full flex justify-between'>
        <h1 className='font-bold text-3xl'>Team Directory</h1>
        {/* Searchbar Div */}
        <div className='bg-emerald-600 w-1/4'>Searchbar</div>
      </div>
      {/* Filter Div */}
      <div className='min-h-fit w-full bg-red-600 mt-5 flex flex-wrap gap-5'>
        <Filters/>
      </div>
      {/* Employee Div */}
      <div className='w-full min-h-90 bg-blue-600 mt-5 flex flex-wrap gap-5'>
        <EmployeeCard/>
      </div>
    </div>
  )
}

export default App
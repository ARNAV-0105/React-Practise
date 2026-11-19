import React from 'react'

const EmployeeCard = () => {
  return (
    <div>
        <div className='h-72 w-55 bg-yellow-400 rounded-lg overflow-hidden'>
          <div className='bg-violet-500 h-50 w-full'>img</div>
          <div className='bg-green-500 h-22 w-full px-2 py-1'>
            <h2 className='font-bold '>Name</h2>
            <h5 className='font-semibold text-sm'>Job Role</h5>
            <h6 className='font-light text-xs'>Dept</h6>
            <h6 className='font-light text-xs'>Exp</h6>
          </div>
        </div>
    </div>
  )
}

export default EmployeeCard
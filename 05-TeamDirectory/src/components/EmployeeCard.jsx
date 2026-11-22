import React from 'react'

const EmployeeCard = (props) => {
  return (
    <div>
        <div className='h-72 w-55 rounded-lg overflow-hidden'>
          <div className='h-50 w-full overflow-hidden'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
          </div>
          <div className='bg-cyan-600 h-22 w-full px-2 py-1'>
            <h2 className='font-bold '>{props.name}</h2>
            <h5 className='font-semibold text-sm'>{props.role}</h5>
            <h6 className='font-light text-xs'>{props.department}</h6>
            <h6 className='font-light text-xs'>{props.experience} years of experience</h6>
          </div>
        </div>
    </div>
  )
}

export default EmployeeCard
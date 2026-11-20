import React from 'react'

const Filters = (props) => {
  return (
    <div>
        <button className='h-15 w-40 rounded-lg bg-cyan-600 font-bold'>{props.filter}</button> 
    </div>
  )
}

export default Filters
import React from 'react'

const Filters = ({ filter, selectedFilter, onSelectFilter }) => {
  return (
    <div>
        <button className={`h-15 w-40 rounded-lg font-bold ${selectedFilter === filter ? 'bg-blue-950': 'bg-cyan-600'}`}
        onClick={() => onSelectFilter(filter)}>
          {filter}
        </button> 
    </div>
  )
}

export default Filters
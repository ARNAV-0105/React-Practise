import React from 'react'
import EmployeeCard from './components/EmployeeCard'
import Filters from './components/Filters'
import SearchBar from './components/SearchBar'

const App = () => {

const employees = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Frontend Developer",
    department: "Engineering",
    experience: 3,
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "UI/UX Designer",
    department: "Design",
    experience: 5,
    avatar: "https://i.pravatar.cc/150?img=47"
  },
  {
    id: 3,
    name: "Daniel Smith",
    role: "Backend Developer",
    department: "Engineering",
    experience: 4,
    avatar: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 4,
    name: "Olivia Brown",
    role: "Marketing Manager",
    department: "Marketing",
    experience: 6,
    avatar: "https://i.pravatar.cc/150?img=44"
  },
  {
    id: 5,
    name: "Ethan Davis",
    role: "HR Specialist",
    department: "Human Resources",
    experience: 2,
    avatar: "https://i.pravatar.cc/150?img=14"
  },
  {
    id: 6,
    name: "Isabella Miller",
    role: "Product Designer",
    department: "Design",
    experience: 4,
    avatar: "https://i.pravatar.cc/150?img=48"
  },
  {
    id: 7,
    name: "James Wilson",
    role: "Financial Analyst",
    department: "Finance",
    experience: 3,
    avatar: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: 8,
    name: "Mia Anderson",
    role: "Full Stack Developer",
    department: "Engineering",
    experience: 5,
    avatar: "https://i.pravatar.cc/150?img=49"
  },
  {
    id: 9,
    name: "Lucas Thomas",
    role: "Content Strategist",
    department: "Marketing",
    experience: 2,
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 10,
    name: "Ava Martinez",
    role: "HR Manager",
    department: "Human Resources",
    experience: 7,
    avatar: "https://i.pravatar.cc/150?img=45"
  }
]


  return (
    <div className='bg-blue-300 min-h-screen w-full p-10'>
      <div className='h-fit w-full flex justify-between'>
        <h1 className='font-bold text-3xl text-blue-950'>Team Directory</h1>
        {/* Searchbar Div */}
        <SearchBar/>
      </div>
      {/* Filter Div */}
      <div className='min-h-fit w-full mt-5 flex flex-wrap gap-5 text-white'>
        <Filters filter="All"/>
        <Filters filter="Engineering"/>
        <Filters filter="Design"/>
        <Filters filter="Marketing"/>
        <Filters filter="Human Resources"/>
        <Filters filter="Finance"/>
      </div>
      {/* Employee Div */}
      <div className='w-full min-h-90 mt-5 flex flex-wrap gap-5 text-white'>
        {employees.map((employee) => (
          <EmployeeCard 
            key={employee.id} 
            name={employee.name}
            role={employee.role}
            department={employee.department}
            experience={employee.experience}
            img={employee.avatar}/>
        ))}
      </div>
    </div>
  )
}

export default App
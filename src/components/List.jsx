import React from 'react'
import Card from './Card'

const List = ({tasks,deleteTask,updateTask}) => {
  return (
    <ul className='list-none w-full md:w-1/3 flex flex-col gap-y-4'>
        <Card tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
      {/* <li className='bg-gray-600 text-green-200 py-4 px-3 rounded-lg flex justify-between itmes-center transition duration-100 hover:bg-red-200'>
       <p> To Record React Lessons</p>
       <BiXCircle className='text-2xl'></BiXCircle>
      </li>

      <li className='bg-gray-600 text-green-200 py-4 px-3 rounded-lg flex justify-between itmes-center transition duration-100 hover:bg-red-200'>
       <p> To Record React Lessons</p>
       <BiXCircle className='text-2xl'></BiXCircle>
      </li>

      <li className='bg-red-100 text-green-400 py-4 px-3 rounded-lg flex justify-between itmes-center transition duration-100 hover:bg-red-500'>
       <p className='line-through'> To Record React Lessons</p>
       <BiXCircle className='text-2xl'></BiXCircle>
      </li> */}
      
      </ul>
  )
}

export default List

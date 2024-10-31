import React, { useState } from 'react'

const Form = ({addNewTask}) => {

  const[value, setValue] = useState('')

  const handleSubmit =e =>{
      e.preventDefault()

      if(value !== ''){
         addNewTask(value)
      }
      setValue('')
     
  }

  return (
    
    <form onSubmit={handleSubmit}  className='block w-full md:w-1/3'>
      <div className='flex gap-4 w-full '>
      <input value={value} onChange={e => setValue(e.target.value)} type='text' placeholder='Add New Task' className='bg-gray-700 text-gray-200 py-2 px-4 rounded-lg w-2/3'/>
      <button type='submit' className='bg-green-300 text-black rounded-lg w-1/3'>Add Task</button>
    </div>
    </form>
  )
}

export default Form

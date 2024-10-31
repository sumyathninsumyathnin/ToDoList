import React from 'react'
import { BiXCircle } from 'react-icons/bi'

const Card = ({tasks,deleteTask,updateTask}) => {
    const handleDel =(id)=>{
        deleteTask(id)
        
    }

  return (
    <div>
      {
        tasks.map((task,index)=>(
           <li onDoubleClick={()=> updateTask(task.id,!task.complete)} key={index} className={task.complete ? 'bg-yellow-100 text-green-400 py-4 px-3 rounded-lg flex justify-between itmes-center transition duration-100 hover:bg-red-300': 'bg-red-200 text-green-400 py-4 px-3 rounded-lg flex justify-between itmes-center transition duration-100 hover:bg-red-300'}>
            <p className={task.complete ? 'line-through' :''}>{task.task}</p>
            <BiXCircle className='text-2xl' onClick={()=>handleDel(task.id)}></BiXCircle>
           </li>  
        ))
      }
    </div>
  )
}

export default Card

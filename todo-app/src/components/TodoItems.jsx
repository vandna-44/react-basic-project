import React from 'react'
import { TiTick } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoItems = ({text, id, isComplete, deleteTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
         <TiTick  className='text-3xl bg-green-600 rounded-full'/>
         <p className='text-slate-700 ml-4 text-[17px]'> {text} </p>
        </div>

        <RiDeleteBin6Line className='text-2xl cursor-pointer' onClick={()=>{deleteTodo(id)}} />
      
    </div>
  )
}

export default TodoItems

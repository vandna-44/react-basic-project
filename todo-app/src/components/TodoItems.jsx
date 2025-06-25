import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import { RiDeleteBin6Line } from "react-icons/ri"

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
         <img src={isComplete ? tick : not_tick} alt="" className='w-10' />
         <p className= {`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}> {text} </p>
        </div>

        <RiDeleteBin6Line className='text-2xl cursor-pointer' onClick={()=>{deleteTodo(id)}} />
      
    </div>
  )
}

export default TodoItems

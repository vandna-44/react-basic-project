import React, { useEffect, useRef, useState } from 'react'
import { FaRegCalendarPlus } from "react-icons/fa";
import TodoItems from './TodoItems';


const Todo = () => {
  
  const[todoList, setTodoList] = useState(localStorage.getItem("todos")? 
JSON.parse(localStorage.getItem("todos")) : [])


  const inputRef = useRef()

  const add = ()=>{
    const inputText = inputRef.current.value.trim();

    if (inputText === ""){
      return null;
      }
    
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setTodoList((prev)=>  [...prev, newTodo]);
    inputRef.current.value = "";
  }

  const deleteTodo = (id)=>{
    setTodoList((prevTodos)=>{
     return prevTodos.filter((todo) => todo.id !== id)
    })
  }
  const toggle = (id)=>{
    setTodoList((prevTodos) =>{
      return prevTodos.map((todo)=>{
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  } 

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList));
    
  },[todoList])


  return (
    <div className='bg-white place-self-center w-2/8 mx-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
  {/*------------title----------------*/}  
    <div className='flex item-center mt-7 gap-2'>
      <FaRegCalendarPlus className='text-4xl' />
      <h1 className='text-3xl font-semibold'>Todo-List</h1>
    </div>

    {/*------------title box----------------*/}  
     <div className='flex items-center my-7 bg-gray-200 rounded-full'>
      <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
      <button onClick={add}  className='border-none rounded-full bg-green-600 w-32 h-14 text-white text-lg font-medium cursor-pointer '>ADD +</button>
     </div>


    {/*------------todo list----------------*/}
    <div>
      {todoList.map((item, index)=>{
        return <TodoItems key={index} text={item.text} id={item.id} 
        isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
      })}

    </div>

 

    </div>
  )
}

export default Todo

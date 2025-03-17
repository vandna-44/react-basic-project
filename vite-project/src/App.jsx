import React from 'react'
import { useState } from 'react'

const App = () => {

 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [number, setNumber] = useState("")
 const [data, setData] = useState([])
 
 console.log(data)

 const submitHandler = () => {
  setData([...data, {id:data.length+1, name, email, number}])
 }

 const deleteHandler =(id) =>{
   const newData = data.filter(elem => elem.id != id)
   setData(newData)
 }


  return (
    <div className='flex h-screen w-screen'>
      <div className='w-1/3 h-full bg-red-200 flex justify-center items-center'>
      <div className='w-[80%]'>
        <div className='mb-4'>
          <p className=''>Name</p>
          <input value={name} onInput={(e)=>setName(e.target.value)} placeholder='Enter your name' className='w-full rounded bg-neutral-700 border-none text-white px-2 py-1' type="text" />
        </div>
        <div className='mb-4'>
          < p className=''>Email</p>
          <input value={email} onInput={(e)=>setEmail(e.target.value)} placeholder='Enter your email address' className='w-full rounded bg-neutral-700 border-none text-white px-2 py-1' type="text" />
        </div>
        <div className='mb-4'>
          <p className=''>Number</p>
          <input value={number} onInput={(e)=>setNumber(e.target.value)} placeholder='Enter your number' className='w-full rounded bg-neutral-700 border-none text-white px-2 py-1' type="text" />
        </div>
        <div>
          <button onClick={submitHandler} className='bg-neutral-600 w-full p-1 text-white rounded hover:bg-neutral-500'>Submit</button>
        </div>
      </div>
      </div>
      {/*right said */}
      <div className='w-2/3 flex flex-wrap gap-4 h-full bg-red-100 p-5 '>
      {data.map((elem,idx)=>( 
      <div key={idx} className='bg-neutral-700 text-white h-fit p-3 w-50 rounded '>

      <div className='mb-4'>
        <p className='text-white'>{elem.name}</p>
        <p className='text-white text-sm'>{elem.email}</p>
        <p className='text-white text-sm'> {elem.number}</p>
      </div>

      <div>
        <button onClick={() => deleteHandler(elem.id)} className='bg-neutral-500 text-white w-full text-sm py-1'>Delete</button>
      </div>
      </div>
      ))}


      
        
      
  









      
    </div>
    </div>
  )
}

export default App


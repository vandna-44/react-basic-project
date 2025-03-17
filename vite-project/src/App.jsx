import React from 'react'
import { useState } from 'react'

const App = () => {

 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [number, setNumber] = useState("")
 const [data, setData] = useState([])
 
 console.log(data)

 const submitHandler = () => {
  setData([...data, {name, email, number}])
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
      <div className='bg-neutral-700 text-white  p-3 w-50 rounded '>

      <div className='mb-4'>
        <p className='text-white'>jon</p>
        <p className='text-white text-sm'>jon@email.com</p>
        <p className='text-white text-sm'> 0985-667-2345</p>
      </div>

      <div>
        <button className='bg-neutral-500 text-white w-full text-sm py-1'>Delete</button>
      </div>

      </div>
      <div className='bg-neutral-700 text-white p-3 w-50 rounded '>

      <div className='mb-4 '>
        <p className='text-white'>jon</p>
        <p className='text-white text-sm'>jon@email.com</p>
        <p className='text-white text-sm'> 0985-667-2345</p>
      </div>

      <div>
        <button className='bg-neutral-500 text-white w-full text-sm py-1'>Delete</button>
      </div>
      
      </div>
      <div className='bg-neutral-700 text-white p-3 w-50 rounded'>

      <div className='mb-4'>
        <p className='text-white'>jon</p>
        <p className='text-white text-sm'>jon@email.com</p>
        <p className='text-white text-sm'> 0985-667-2345</p>
      </div>

      <div>
        <button className='bg-neutral-500 text-white w-full text-sm py-1'>Delete</button>
      </div>
      
      </div>
      <div className='bg-neutral-700 text-white p-3 w-50 rounded'>

      <div className='mb-4'>
        <p className='text-white'>jon</p>
        <p className='text-white text-sm'>jon@email.com</p>
        <p className='text-white text-sm'> 0985-667-2345</p>
      </div>

      <div>
        <button className='bg-neutral-500 text-white w-full text-sm py-1'>Delete</button>
      </div>
      
      </div>
      <div className='bg-neutral-700 text-white p-3 w-50 rounded'>

      <div className='mb-4'>
        <p className='text-white'>jon</p>
        <p className='text-white text-sm'>jon@email.com</p>
        <p className='text-white text-sm'> 0985-667-2345</p>
      </div>

      <div>
        <button className='bg-neutral-500 text-white w-full text-sm py-1'>Delete</button>
      </div>
      
      </div>
      <div className='bg-neutral-700 text-white p-3 w-50 rounded'>

      <div className='mb-4'>
        <p className='text-white'>jon</p>
        <p className='text-white text-sm'>jon@email.com</p>
        <p className='text-white text-sm'> 0985-667-2345</p>
      </div>

      <div>
        <button className='bg-neutral-500 text-white w-full text-sm py-1'>Delete</button>
      </div>
      
      </div>
      <div className='bg-neutral-700 text-white p-3 w-50 rounded'>

      <div className='mb-4'>
        <p className='text-white'>jon</p>
        <p className='text-white text-sm'>jon@email.com</p>
        <p className='text-white text-sm'> 0985-667-2345</p>
      </div>

      <div>
        <button className='bg-neutral-500 text-white w-full text-sm py-1'>Delete</button>
      </div>
      
      </div>









      
    </div>
    </div>
  )
}

export default App


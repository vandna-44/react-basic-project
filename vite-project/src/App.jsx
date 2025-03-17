import React from 'react'
import { useState } from 'react'

const App = () => {

 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [number, setNumber] = useState("")
 console.log(name)


  return (
    <div className='flex h-screen w-screen'>
      <div className='w-1/3 h-full bg-pink-100 flex justify-center items-center'>
      <div className='w-[80%]'>
        <div className='mb-4'>
          <p className=''>Name</p>
          <input onInput={(e)=>setName(e.target.value)} placeholder='Enter your name' className='w-full rounded bg-neutral-700 border-none text-white px-2 py-1' type="text" />
        </div>
        <div className='mb-4'>
          < p className=''>Email</p>
          <input placeholder='Enter your email address' className='w-full rounded bg-neutral-700 border-none text-white px-2 py-1' type="text" />
        </div>
        <div className='mb-4'>
          <p className=''>Number</p>
          <input placeholder='Enter your number' className='w-full rounded bg-neutral-700 border-none text-white px-2 py-1' type="text" />
        </div>
        <div>
          <button className='bg-pink-700 w-full p-1 text-white rounded hover:bg-pink-400'>Submit</button>
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


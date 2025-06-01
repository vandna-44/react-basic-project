import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nisi!</p>
        <div className='footer absolute bottom-0 bg-sky-50 w-full py-3 left-0'></div>
    </div>
  )
}

export default Card

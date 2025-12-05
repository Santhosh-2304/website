import React from 'react'
import { Link } from 'react-router-dom'

function Block1({title, content, image, service }) {
  return (
        <div className='block1-container'>
        <div className='flex flex-col gap-[8px]'>
            <h3 className='text-3xl font-bold '>{title}</h3>
            <p  className='text-xl text-gray-200'>{content}</p>
            <Link to= {service} className='btn-block1 mt-3'>Learn more</Link>
        </div>
        <img
        src={image}
        className="rounded-2xl w-[500px] h-[300px] object-cover mx-8"
      />
        </div>
   
  )
}

export default Block1 

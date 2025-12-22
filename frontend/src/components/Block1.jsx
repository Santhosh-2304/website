import React from 'react'
import { Link } from 'react-router-dom'
import ScrollAnimate from './ScrollFade'

function Block1({title, content, image, service }) {
  return (
        <div className='block1-container md:flex md:justify-between items-center md:mb-20 md:mt-20'>
        <div className='md:flex md:flex-col md:gap-[8px] md:w-[900px]'>
            <h3 className='md:text-3xl font-bold text-xl'>{title}</h3>
            <p  className='md:text-xl text-gray-200 indent-8 mb-4'>{content}</p>
            <Link to= {service} className='btn-block1  '>Learn more</Link>
        </div>

        <ScrollAnimate>
            <img
            src={image}
            className="rounded-2xl md:w-[450px] object-cover "
            />
        </ScrollAnimate>
       
        </div>
   
  )
}

export default Block1 
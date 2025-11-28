import Block2 from '../components/Block2'
import Block3 from '../components/Block3'
import Footer from '../components/Footer'
import React from 'react'
import ImageCarousel from '../components/ImageCarousel'

const images = [
      "src/assets/training.jpg",
      "src/assets/Corporate.jpg"
]
const Home = () => {
  return (
    <>
        <ImageCarousel 
          images={images}
          interval={4000}
        />
        <Block2 />
        <Block3 />
    </>
  )
}

export default Home

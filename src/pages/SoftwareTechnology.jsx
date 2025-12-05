import React from 'react'
import TechBlock from '../components/TechBlock'
import Footer from '../components/Footer'
import TitleBlock from '../components/TitleBlock'


const SoftwareTechnology = () => {
  return (
    <>
      <TitleBlock 
      image="src\assets\SoftwareTech.jpg"
      title="Software & Technology Solutions"
      description="Empowering businesses through advanced software solutions and cutting-edge IT
                  services. At IMMT, we blend expertise, innovation, and collaboration to propel your
                  organization into the digital future. From cloud technologies to AI-driven platforms, our
                  mission is your success."
      />
      <TechBlock />
    </>
  )
}

export default SoftwareTechnology

import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import TechBlock from '../components/TechBlock'
import TitleBlock from '../components/TitleBlock'


const SoftwareTechnology = () => {
   const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return (
    <>
      <TitleBlock 
      image="SoftwareTech.jpg"
      title="Software & Technology Solutions"
      description="Empowering businesses through advanced software solutions and cutting-edge IT
      services. At IMMT, we blend expertise, innovation, and collaboration to propel your
      organization into the digital future. From niche technologies to AI-driven platforms, our
      mission is to unlock your business potential with our end-to-end technology suite,
      experience seamless digital transformation and robust security."
            />
      <TechBlock />
    </>
  )
}

export default SoftwareTechnology
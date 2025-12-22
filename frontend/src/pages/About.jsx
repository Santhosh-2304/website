import React from 'react'
import ImageCarousel from '../components/ImageCarousel'
import ScrollAnimate from '../components/ScrollFade'
const About = () => {
  const images = [
      "Corporate.jpg",
      "teach.jpg",
      "discussion.jpg",
]
  const content = [
        "Founded in 2025 and headquartered in Madurai, IMMT is your trusted partner for comprehensive IT solutions and bridge the gap between technological advancement and business success. Our passionate team merges technical expertise with strategic acumen, driving results through software innovation, research, and skill development.", 
        "At IMMT, we believe meaningful progress stems from understanding our clients’ ambitions, collaborating on tailored solutions, and nurturing tomorrow’s talent. Our journey is marked by milestones in project delivery, pioneering new technologies, and cultivating relationships across global markets.",
        "We’re passionate about transforming business challenges into strategic opportunities. Our team of seasoned professionals is committed to delivering measurable results and exceptional value.  ],strategic opportunities. Our team of seasoned professionals is committed to delivering measurable results and exceptional value. "
]
  return (
    <>
    <ImageCarousel 
          images={images}
          content={content}
          interval={4000}
    />
    <div className='md:mt-10 md:p-10 bg-gradient-to-r from-gray-200 to-blue-200 mt-4 p-4'>
    <ScrollAnimate>
    <div className='md:flex '>     
      <div className='bg-gray-50 rounded-4xl shadow-xl  '>
        <h1 className='text-2xl font-bold text-center mt-5 mb-5 '>Our Vision</h1>
        <p className='text-center md:px-10 md:mb-10 md:text-lg px-4'>To be a global leader in IT services and training, empowering businesses and individuals to thrive in a rapidly evolving digital landscape through innovative solutions, cutting-edge technologies, and unparalleled expertise.</p>
      </div>
      
      <div className='bg-gray-50 rounded-4xl shadow-xl md:ml-10 '>
        <h1 className='text-2xl font-bold text-center mt-5 mb-5'>Our Mission</h1>
        <p className='text-center md:px-10 md:mb-10 md:text-lg px-4 mb-5'>To deliver exceptional IT services and training programs that drive business growth and individual success. We are committed to fostering innovation, embracing emerging technologies, and cultivating a culture of continuous learning and excellence.</p>
      </div>
    </div>
    </ScrollAnimate>
      <div className='bg-gray-50 rounded-4xl shadow-xl md:mt-10 p-1 mx-auto md:w-180 mt-6'>
        <ScrollAnimate>
        <h1 className='text-2xl font-bold text-center mt-5 mb-5'>Our Core Values</h1>
        <ul className='list-none md:px-15 md:mb-10 md:text-lg px-5 '>
          <li className='mb-2'>Innovation: Driving progress through creative problem-solving.</li>
          <li className='mb-2'>Integrity: Building trust through transparency and accountability.</li>
          <li className='mb-2'>Excellence: Striving for precision and quality in everything we do.</li>
          <li className='mb-2'>Empowerment: Enabling growth through technology and education.</li>
        </ul>
        </ScrollAnimate>
    </div>
    </div>
    </>
  )
}

export default About
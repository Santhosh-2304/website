import React from 'react'
import Block1 from '../components/Block1'
import TitleBlock from '../components/TitleBlock'
const Services = () => {
  return (
    <div>
        <TitleBlock
        title="IMMT Services"
        description="IMMT stands at the forefront of technology-based training and software solutions,
        empowering individuals and organizations through immersive, hands-on learning and
        advanced digital services. Our integrated programs and innovative tools are designed to
        foster real-world expertise, fuel career growth, and drive operational excellence.
        Experience an environment where cutting-edge technology meets practical education,
        equipping you to thrive in an ever-evolving digital landscape.
        IMMT offers dynamic training programs in software development, digital marketing, and
        emerging tech, tailored for beginners and advanced learners.
        Our live project experience and certification courses prepare individuals for real-world
        success while our talent management services streamline resourcing, placement, and
        career development for enterprise clients.
        Choose IMMT to access hands-on workshops, career support, and a strong
        professional network—which ensures businesses find the right talent and learners build
        robust portfolios"
        image="training.jpg"
        />
    <div className='bg-blue-50 pl-10 pr-10 pt-5'>
      <Block1
        title="Software Training Services"
        content="IMMT stands at the forefront of technology-based training and software solutions,
        empowering individuals and organizations through immersive, hands-on learning and
        advanced digital services. Our integrated programs and innovative tools are designed to
        foster real-world expertise, fuel career growth, and drive operational excellence.
        Experience an environment where cutting-edge technology meets practical education,
        equipping you to thrive in an ever-evolving digital landscape.
        Our live project experience and certification courses prepare individuals for real-world
        success while our talent management services streamline resourcing, placement, and
        career development for enterprise clients." 
        image="training.jpg"
        service='/software-training-services'
        />
        <Block1
        title="Software & Technology Solutions"
        content="Empowering businesses through advanced software solutions and cutting-edge IT
                  services. At IMMT, we blend expertise, innovation, and collaboration to propel your
                  organization into the digital future. From cloud technologies to AI-driven platforms, our
                  mission is your success." 
        image="src\assets\Corporate.jpg"
        service='/software-technology-solutions'
        />
        <Block1
        title="Reseach and Development"
        content="At the heart of IMMT lies a commitment to innovation.
        Our R& D division focuses on exploring emerging technologies like the Internet of
        Things (IoT), embedded systems, microprocessors, and intelligent automation.
        Through continuous experimentation and development, we design new products,
        tools, and platforms that address real-world challenges.
        We also collaborate with academic institutions, research bodies, and industry
        partners to accelerate breakthroughs and translate ideas into impactful solutions. " 
        image="Corporate.jpg"
        service='/research-development'
        />
    </div>
    </div>
  )
}

export default Services




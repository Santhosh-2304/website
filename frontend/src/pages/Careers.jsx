import React from 'react'
import TitleBlock from '../components/TitleBlock'
import InfoBlock from '../components/InfoBlock'

const Careers = () => {
  return (
    <>
      <TitleBlock 
    title="Careers at IMMT"
    description="Join our dynamic team and help shape the future of technology. We are looking for passionate individuals who thrive in a collaborative environment and are eager to make an impact. Explore our current job openings and find the perfect role that matches your skills and aspirations. At our company, we value innovation, diversity, and professional growth. Take the next step in your career with us!"
    image="Careers.png"
    />
    <InfoBlock
        title="Join Our Team"
        content="Join IMMT’s dynamic and talented workforce to build tomorrow’s technology
        today. Explore exciting opportunities for developers, engineers, data scientists,
        security analysts, and more. We offer a collaborative environment where innovation
        thrives, along with competitive benefits and career growth. Be part of a team that’s
        shaping the future through cutting-edge solutions and impactful projects."
        image="cons.avif"
      />

      <InfoBlock
        title="Get in Touch"
        content="Take the next step in your professional journey. Enroll in our training programs,
        transform your organization with powerful software, or partner on breakthrough
        projects. Contact IMMT today to unlock a future powered by cutting-edge
        technologies and practical skills."
        image="web.jpg"
        reverse
      />
    </>
  )
}

export default Careers
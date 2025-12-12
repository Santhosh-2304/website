import React from 'react'
import InfoBlock from '../components/InfoBlock'
import TitleBlock from '../components/TitleBlock'
import Block3 from '../components/Block3'
const courses = [
  {
    title: "Full Stack Development",
    description:
      "Master the art of building complete web applications, from front-end interfaces to back-end servers and databases. ",
    service:'/fullstack'
  },
  {
    title: "AI and ML",
    description:
      "Build fluency in languages like C#, Java, Angular, and JavaScript and evolve as they do.",
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "From AWS to Google Cloud and everything in between, expand your cloud clout.",
  },
  {
    title: "Cloud Computing",
    description:
      "Stop cyber attacks, secure critical systems, and position yourself as the expert.",
  },

];
const TrainingTalent = () => {
  return (
    <div>
      <TitleBlock 
       image="src/assets/training.jpg"
        title="Training Talent"
        description="Our specialized training programs cover software technologies, digital tools, and
                    emerging trends. With a practical learning approach, we prepare professionals to
                    stay relevant and excel in dynamic IT environments.
                    We connect organizations with skilled professionals and deliver end-to-end
                    workforce solutions. Our resourcing services ensure the right talent is aligned with
                    the right opportunity."
      />
        <InfoBlock
        title="Fresher training & Placement"
        content="At IMMT, we empower fresh graduates to kickstart their careers with confidence.
            Our Fresher Training & Placement Program is designed to bridge the gap
            between academic learning and industry expectations.
            We provide hands-on training in the latest technologies, real-time project exposure,
            soft skill enhancement, and interview preparation.
            With dedicated mentorship and strong industry collaborations, we ensure that every
            participant becomes job-ready and equipped to excel in the world of IT."
        image="src/assets/cons.avif"
      />

      <InfoBlock
        title="Lateral/Experienced training & Placement"
        content="For working professionals seeking to upgrade their skills or transition to advanced
                roles, IMMT offers specialized Lateral/Experienced Training & Placement
                Programs.
                Our expert-led modules focus on deep technical knowledge, practical scenarios,
                architecture-level understanding, and leadership capabilities.
                We help professionals grow in their careers through advanced upskilling, curated
                learning paths, cross-functional training, and direct placement support with top
                technology companies."
        image="src/assets/web.jpg"
        reverse
      />
      <Block3 items = {courses} />
    </div>
  )
}

export default TrainingTalent
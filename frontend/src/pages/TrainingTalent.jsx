import React from 'react'
import InfoBlock from '../components/InfoBlock'
import TitleBlock from '../components/TitleBlock'
import Block3 from '../components/Block3'
const courses = [
  {
    title: "Full Stack Development",
    description:
      "Our Full-Stack Development courses are engineered to provide end-to-end mastery in building production-grade applications across modern web ecosystems. Each program is curated by industry experts and aligned with real-world software engineering standards, covering everything from frontend architecture to backend engineering, database design, API development, DevOps, and cloud deployment.",
  },
  {
    title: "AI and ML",
    description:
      "Intelligent AI and ML solutions that enable systems to learn, predict, and automate decision-making. Our services include data analysis, predictive modeling, naturallanguage processing, computer vision, and intelligent automation, helping businesses gain actionable insights, improve efficiency, and drive innovation through data-driven intelligence."
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "End-to-end IoT solutions that connect devices, sensors, and systems to collect, monitor, and analyze real-time data. From smart applications to industrial IoT platforms, we enable intelligent connectivity, automation, and data-driven decision-making that enhances operational efficiency and business intelligence.",
  },
  {
    title: "Cloud Computing",
    description:
      "Scalable and secure cloud computing solutions that empower organizations to build, deploy, and manage applications efficiently. Our expertise spans cloud architecture design, migration, deployment, and optimization using modern cloud platforms, ensuring high availability, performance, cost efficiency, and seamless digital transformation.",
  },

];
const TrainingTalent = () => {
  return (
    <div>
      <TitleBlock 
       image="training.jpg"
        title="Training and Talent Management"
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
        image="cons.avif"
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
        image="web.jpg"
        reverse
      />
      <Block3 items = {courses} />
    </div>
  )
}

export default TrainingTalent
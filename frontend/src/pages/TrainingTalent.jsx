import React from 'react'
import InfoBlockText from '../components/InfoBlockText'
import TitleBlock from '../components/TitleBlock'
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
        <InfoBlockText
        title="Fresher training & Placement"
        text="At IMMT, we empower fresh graduates to kickstart their careers with confidence.
            Our Fresher Training & Placement Program is designed to bridge the gap
            between academic learning and industry expectations.
            We provide hands-on training in the latest technologies, real-time project exposure,
            soft skill enhancement, and interview preparation.
            With dedicated mentorship and strong industry collaborations, we ensure that every
            participant becomes job-ready and equipped to excel in the world of IT."
        image="src/assets/cons.avif"
      />

      <InfoBlockText
        title="Lateral/Experienced training & Placement"
        text="For working professionals seeking to upgrade their skills or transition to advanced
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
    </div>
  )
}

export default TrainingTalent
import React from 'react'
import InfoBlockText from '../components/InfoBlockText'

const AcademicTraining = () => {
  return (
    <div>
        <InfoBlockText
        title="College/Institution Projects"
        text="Our College & Institution Project Services provide students with end-to-end
                guidance in completing their academic projects with industry relevance.
                We support concept development, system design, implementation, documentation,
                and final presentation.
                Projects are offered across a wide range of domains including machine learning,
                IoT, cloud applications, mobile development, automation, and software engineering.
                We ensure that every project reflects innovation, technical depth, and real-world
                applicability."
        image="src/assets/cloud-practioner.webp"
      />

      <InfoBlockText
        title="Internship Programs"
        text="IMMT’s Internship Programs offer students and early professionals an opportunity
                to gain real-world industry experience.
                Interns work alongside expert developers, analysts, and engineers on live projects,
                learning practical problem-solving and application development.
                Our internships enhance technical skills, teamwork, communication abilities, and
                overall professional readiness, paving the way for successful career opportunities."
        image="src/assets/next-level-learning.webp"
        reverse
      />
    </div>
  )
}

export default AcademicTraining

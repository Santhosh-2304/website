import React from 'react'
import InfoBlockText from '../components/InfoBlockText'
import TitleBlock from '../components/TitleBlock'
const AcademicTraining = () => {
  return (
    <div>
      <TitleBlock 
        image="src/assets/training.jpg"
        title="Academic Training"
        description="IMMT partners with colleges and universities to deliver high-quality Academic
                    Training Programs that align with modern industry requirements.
                    We offer customized curriculum support, faculty development programs, technical
                    workshops, and domain-specific training in emerging technologies like AI, Data
                    Science, Cloud Computing, Full Stack Development, Cybersecurity, and more.
                    Our goal is to enhance the academic environment with innovative learning
                    experiences that prepare students for a strong professional future."
      />
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
        image="src/assets/cons.avif"
      />

      <InfoBlockText
        title="Internship Programs"
        text="IMMT’s Internship Programs offer students and early professionals an opportunity
                to gain real-world industry experience.
                Interns work alongside expert developers, analysts, and engineers on live projects,
                learning practical problem-solving and application development.
                Our internships enhance technical skills, teamwork, communication abilities, and
                overall professional readiness, paving the way for successful career opportunities."
        image="src/assets/web.jpg"
        reverse
      />
    </div>
  )
}

export default AcademicTraining

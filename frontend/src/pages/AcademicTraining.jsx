import React from 'react'
import InfoBlock from '../components/InfoBlock'
import TitleBlock from '../components/TitleBlock'
const AcademicTraining = () => {
  return (
    <div>
      <TitleBlock 
        image="training.jpg"
        title="Academic Training Programs"
        description="IMMT partners with colleges and universities to deliver high-quality Academic Training
        Programs that align with modern industry requirements. We offer customized curriculum
        support, faculty development programs, technical workshops, and domain-specific
        training in emerging technologies like Internet Of Things (IOT), AI/ML, Cloud
        Computing, Full Stack Development, Cybersecurity and more. Our goal is to enhance
        the academic environment with innovative learning experiences that prepare students
        for a strong professional future."
      />
        <InfoBlock
        title="College/Institution Projects"
        content="Our College & Institution Project Services provide students with end-to-end
                guidance in completing their academic projects with industry relevance.
                We support concept development, system design, implementation, documentation,
                and final presentation.
                Projects are offered across a wide range of domains including machine learning,
                IoT, cloud applications, mobile development, automation, and software engineering.
                We ensure that every project reflects innovation, technical depth, and real-world
                applicability."
        image="cons.avif"
      />

      <InfoBlock
        title="Internship Programs"
        content="IMMT’s Internship Programs offer students and early professionals an opportunity to
        gain real-world industry experience. Interns work alongside expert developers, analysts,
        and engineers on live projects and learn practical problem-solving skills. Our internship
        programs enhance technical skills, teamwork, communication abilities, and overall
        professional readiness, paving the way for successful career opportunities."
        image="web.jpg"
        reverse
      />
    </div>
  )
}

export default AcademicTraining
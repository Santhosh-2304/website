import React from 'react'
import Block1 from '../components/Block1'
import TitleBlock from '../components/TitleBlock'

const SoftwareTraining = () => {
  return (
    <div>
      <TitleBlock 
        title="Software Training and Services"
        description="IMMT offers dynamic training programs in software development, digital marketing, and
        emerging technologies, tailored for beginners and advanced learners.
        Our live project experience and certification courses prepare individuals for real-world
        success while our talent management services streamline resourcing, placement, and
        career development for enterprise clients. Choose IMMT to access hands-on
        workshops, career support, and a strong professional network which ensures
        businesses find the right talent and learners build robust portfolios."
        image="training.jpg"
      />
    <div className='bg-blue-50 pl-10 pr-10 pt-5'>
      <Block1
        title="Training & Talent Management"
        content="Our specialized training programs cover software technologies, digital tools, and
        emerging trends. With a practical learning approach, we prepare professionals to
        stay relevant and excel in dynamic IT environments.
        We connect organizations with skilled professionals and deliver end-to-end
        workforce solutions. Our resourcing services ensure the right talent is aligned with
        the right opportunity." 
        image="training.jpg"
        service='/training-talent'
        />
        <Block1
        title="Academic Training Programs"
        content="IMMT partners with colleges and universities to deliver high-quality Academic
        Training Programs that align with modern industry requirements.
        We offer customized curriculum support, faculty development programs, technical
        workshops, and domain-specific training in emerging technologies like AI, Data
        Science, Cloud Computing, Full Stack Development, Cybersecurity, and more.
        Our goal is to enhance the academic environment with innovative learning
        experiences that prepare students for a strong professional future." 
        image="src\assets\Corporate.jpg"
        service='/academic-training'
        />
        <Block1
        title="Corporate Training"
        content="We provide customizable Corporate Training Solutions tailored to meet
        organizational skill development needs.
        Our corporate programs focus on emerging technologies, advanced engineering
        practices, process optimization, agile transformation, and leadership development.
        Delivered by industry veterans, our training ensures measurable
        outcomes—helping teams stay competitive, innovative, and future-ready.
        We also offer on-site, online, and hybrid training models to suit corporate
        requirements " 
        image="Corporate.jpg"
        service='/corporate-training'
        />
    </div>
    </div>
  )
}

export default SoftwareTraining
import React from 'react'
import TitleBlock from '../components/TitleBlock'
import InfoBlock from '../components/InfoBlock'
import InfoBlockText from '../components/InfoBlockText'

const FullStack = () => {
  
  return (
    <div>
        <TitleBlock 
          image="fullstack.gif"
          title="Full Stack Development"
          description="Our Full-Stack Development courses are engineered to provide end-to-end mastery in
            building production-grade applications across modern web ecosystems. Each program
            is curated by industry experts and aligned with real-world software engineering
            standards, covering everything from frontend architecture to backend engineering,
            database design, API development, DevOps, and cloud deployment.
            These courses are structured to transform learners into job-ready full-stack engineers
            who can design, develop, test, deploy, and maintain scalable applications using
            contemporary tools and methodologies."
        />
        <div className="TechBlock pl-[50px] bg-gray-50">

      {/* Application Development */}
      <section id="mern" className="scroll-section">
        <InfoBlockText
          title="MERN Stack Training & Development"
          text="Our MERN Stack program empowers learners to build modern, high-performance web
          applications using MongoDB, Express.js, React, and Node.js. This hands-on training
          follows a project-driven approach, enabling participants to understand and implement
          end-to-end JavaScript development."
          image="src/assets/app.jpg"
        />
      </section>

      {/* Managed IT */}
      <section id="mean" className="scroll-section">
        <InfoBlockText
          title="MEAN Stack Training &amp; Development"
          text="Our MEAN Stack program focuses on full-stack development using MongoDB,
          Express.js, Angular, and Node.js. It is designed for those seeking expertise in
          scalable, corporate-ready web application development with TypeScript and Angular
          architecture."
          
          image="src/assets/IT.avif"
          reverse
        />
      </section>

      {/* Consulting */}
      <section id="python" className="scroll-section">
        <InfoBlockText
          title="Python Full Stack Development Training"
          text=
            "This program covers both front-end and back-end development, powered by Python and modern web frameworks like Django or Flask. Ideal for beginners and professionals aiming for scalable, secure application development. Participants become proficient in building full-stack applications using Python-basedback-end systems combined with polished front-end interfaces."     
          image="src/assets/cons.avif"
        />
      </section>

      {/* Digital Transformation */}
      <section id="dotnet" className="scroll-section">
        <InfoBlockText
          title=".NET Full Stack Training &amp; Development"
          text=
            "Our .NET Full Stack program focuses on enterprise application development using ASP.NET Core, C#, and modern front-end technologies. Learners gain the expertise to build robust, secure, and scalable enterprise solutionsaligned with modern .NET development standards."
          image="src/assets/Digi.jpg"
          reverse
        />
      </section>

      {/* Cloud */}
      <section id="java" className="scroll-section">
        <InfoBlockText
          title="Java Full Stack Development Training"
          text=
            "This program equips learners with complete full-stack skills using Core Java, Advanced Java, Spring Boot, and a modern front-end framework. Participants gain a comprehensive understanding of Java full-stack development, enabling them to build clean, modular, production-ready applications."
          image="src/assets/cloud.webp"
        />
      </section>

    </div>
    </div>
  )
}

export default FullStack
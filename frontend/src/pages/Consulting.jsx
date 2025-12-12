import React from 'react'
import TitleBlock from '../components/TitleBlock'
import InfoBlock from '../components/InfoBlock'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";

const Consulting = () => {
    const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
    <TitleBlock 
    title="Technology Consulting Services"
    description="We guide businesses in choosing the right technologies to improve efficiency, scalability, and long-term growth.
    Our experts assess your current systems and provide strategic recommendations tailored to your goals.
    We design modern, secure, and future-ready technology architectures that reduce risks and optimize workflows.
    We help organizations adopt digital transformation through automation, integration, and process improvement.
    Our consulting empowers you to make informed technology decisions that maximize ROI."
    image="consulting.jpg"
    />
    <section id="design-architecture" className="scroll-section">
        <InfoBlock
          title="Software Architecture & Design"
          content="We design robust, scalable, and future-ready software architectures tailored to your business requirements. Our team ensures optimal system performance, maintainability, and flexibility through modern architectural patterns. We help you build technology foundations that support long-term growth and innovation."
          image="src/assets/app.jpg"
        />
      </section>

      {/* Managed IT */}
      <section id="performance" className="scroll-section">
        <InfoBlock
          title="Performance Optimization & Refactoring" 
          content="We analyze your existing systems to identify performance bottlenecks and inefficiencies. Our refactoring approach improves speed, stability, and overall code quality without disrupting functionality.Experience faster execution, reduced resource usage, and enhanced system reliability."
          image="src/assets/IT.avif"
          reverse
        />
      </section>

      {/* Consulting */}
      <section id="security" className="scroll-section">
        <InfoBlock
          title="Security Audits & Compliance"
          content=
            "We conduct comprehensive security assessments to identify vulnerabilities across applications and infrastructure. Our experts ensure compliance with industry standards such as ISO, GDPR, and OWASP. Strengthen your digital environment with actionable recommendations and best-practice security frameworks."
          image="src/assets/cons.avif"
        />
      </section>

      {/* Digital Transformation */}
      <section id="process-automation" className="scroll-section">
        <InfoBlock
          title="Process Automation & Digitalisation"
          content=
            "Transform manual workflows into efficient automated systems using modern tools and AI-driven solutions. Reduce operational costs, eliminate human error, and speed up business processes.We help organizations transition smoothly into digitally empowered operations."
          image="src/assets/Digi.jpg"
          reverse
        />
      </section>

      {/* Cloud */}
      <section id="api" className="scroll-section">
        <InfoBlock
          title="System Integration & API Development"
          content=
            "We integrate your existing systems, tools, and platforms to ensure seamless data flow and communication. Our API consulting services include designing secure, scalable APIs and optimizing existing integrations. Achieve unified operations with reduced silos and improved system connectivity."
          image="src/assets/cloud.webp"
        />
      </section>
      <section id="digital-marketing"  className="scroll-section">
        <InfoBlock
          title="Digital Marketing"
          content=
            "We help businesses grow online through targeted digital marketing strategies, including SEO, SEM, and content marketing. Our approach focuses on increasing brand visibility, driving quality traffic, and boosting conversions. Stay ahead with data-driven campaigns tailored to your audience and business goals."
          image="src/assets/cloud.webp"
          reverse
        />
      </section>
    </>
  )
}

export default Consulting
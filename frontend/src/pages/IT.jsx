import React from 'react'
import TitleBlock from '../components/TitleBlock'
import InfoBlock from '../components/InfoBlock'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";

const IT = () => {
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
        title="Managed IT Services"
        description="We provide end-to-end monitoring, maintenance, and support to ensure your IT systems run smoothly.
        Our team handles backups, security, updates, and troubleshooting—so you can focus on your core business.
        We proactively identify and solve issues before they impact operations, improving system uptime.
        Our managed services include network management, cloud support, endpoint protection, and helpdesk services.
        You get predictable costs, expert guidance, and a reliable IT environment without needing an in-house team."
       image="IT.jpg"
    />
    <section id='software-cloud-integrations' className="scroll-section">
    <InfoBlock
        title="Custom Software / Cloud Integrations"
        content="We specialize in developing custom software solutions and integrating cloud services to streamline your business operations and enhance productivity."
        image="src/assets/IT.avif"  
    />
    </section>
    <section id='microservices' className="scroll-section">
    <InfoBlock 
        title="Micro Services"
        content="Our microservices architecture enables scalable and flexible application development, allowing for independent deployment and management of services."  
        image="src/assets/IT.avif"
        reverse
    />
    </section>
    <section id='devops-automation' className="scroll-section">
    <InfoBlock 
        title="DevOps & Automation"
        content="We implement DevOps practices and automation tools to streamline your software development lifecycle, improve collaboration, and accelerate delivery."  
        image="src/assets/IT.avif"
    />
    </section>
    <section id='testing' className="scroll-section">
    <InfoBlock 
        title="Test Automations"
        content="We provide automated testing solutions to ensure the quality and reliability of your software applications, reducing time-to-market and improving efficiency."   
        image="src/assets/IT.avif"
        reverse
    />
    </section>
    <section id='ai-ml' className="scroll-section">
    <InfoBlock 
        title="AI/ML Agent Development"
        content=" Leverage artificial intelligence and machine learning to develop intelligent agents that can automate tasks, analyze data, and enhance decision-making processes."  
        image="src/assets/IT.avif"
    />
    </section>
    <section id='software-support' className="scroll-section">
    <InfoBlock
        title="Software Support / Maintenance / Implementation"
        content="Our team offers ongoing software support, maintenance, and implementation services to ensure your applications remain up-to-date, secure, and aligned with your business needs."
        image="src/assets/IT.avif"
        reverse 
    />
    </section>
    </>
  )
}

export default IT
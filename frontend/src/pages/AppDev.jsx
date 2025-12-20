import React from 'react'
import TitleBlock from '../components/TitleBlock'
import InfoBlock from '../components/InfoBlock'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
const AppDev = () => {
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
        title="Application Development Services"
        description="We build high-quality mobile and web applications tailored to your business needs and user experience goals.
        Our development process focuses on performance, usability, and scalability using modern frameworks and technologies.
        We create custom apps that integrate seamlessly with your existing systems and support future enhancements.
        From concept to deployment, we ensure smooth project execution with agile methodologies.
        We also provide UI/UX design, testing, and maintenance to keep your app running flawlessly."
        image="app.avif"
    />
    
    <section id="desktop-app-development" className="scroll-section">
    <InfoBlock 
        title="Web Application Development"
        content="Our web application development services focus on building robust, secure, and high-performance web apps. We utilize modern frameworks and technologies to deliver solutions that meet your business objectives."  
        image="IT.avif"
    />
    </section>
    <section id="enterprise-app-development" className="scroll-section">
    <InfoBlock 
        title="Enterprise Application Solutions"
        content="We provide enterprise application solutions that streamline operations, improve collaboration, and enhance productivity. Our solutions are designed to integrate seamlessly with your existing systems and workflows."  
        image="IT.avif"
        reverse
    />
    </section>
    <section id="mobile-app-development" className="scroll-section">
    <InfoBlock
        title="Mobile Application Development"
        content="We design and develop mobile applications that are user-friendly, scalable, and tailored to your business needs. Our team leverages the latest technologies to create apps for iOS and Android platforms."
        image="IT.avif"
       
    />
    </section>
    
    <section id="cloud-app-development" className="scroll-section">
    <InfoBlock 
        title="Cloud Application Development"
        content="Leverage the power of the cloud with our cloud application development services. We build scalable and flexible cloud-based applications that enable your business to adapt and grow in a dynamic market."  
        image="IT.avif"
        reverse
    />
    </section>
    <section id="iot-app-development" className="scroll-section">
    <InfoBlock
        title="IoT Application Development"
        content="Our IoT application development services enable you to connect and manage devices seamlessly. We create innovative IoT solutions that drive automation, enhance data collection, and improve decision-making processes."
        image="IT.avif"
        
    />
    </section>
    </>
  )
}

export default AppDev
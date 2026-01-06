import React from 'react'
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import TitleBlock from '../components/TitleBlock'
import InfoBlock from '../components/InfoBlock'

const IoT = () => {
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
            title="IoT Solutions"
            description="We provide comprehensive IoT solutions that connect devices, collect data, and enable intelligent decision-making for businesses across various industries. Our services include IoT device integration, cloud connectivity, data analytics, and custom application development to help you leverage the power of the Internet of Things."
            image="IOT.png"
        />
        <section id='raspberry-pi-arduino-kits' className="scroll-section">
        <InfoBlock
            title="Raspberry Pi / Arduino Kits"
            content="We offer a range of Raspberry Pi and Arduino kits for prototyping and developing IoT applications. These kits include essential components, sensors, and modules to help you get started with your IoT projects quickly and efficiently."
            image="Arduino.png"
        />
        </section>

        <section id='embedded-systems' className="scroll-section">
        <InfoBlock
            title="Embedded Systems"
            content="Our embedded systems solutions are designed to provide reliable and efficient performance for IoT devices. We specialize in developing custom firmware, hardware integration, and real-time operating systems to meet the specific needs of your IoT applications."
            image="embedded.jpg"
            reverse
        />
        </section>
    </>
  )
}

export default IoT
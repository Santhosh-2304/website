import React from "react";
import InfoBlock from "../components/InfoBlock";

export default function TechBlock() {
  return (
    <div className="TechBlock pl-[50px] bg-gray-50"> 
      <InfoBlock
        title="Application Development"
        content={[
          "Custom Application Development: Bespoke desktop, web, and mobile apps tailored for industry-specific workflows and digital acceleration.",
          "Agile methodology for rapid prototyping and scalable deployment",
          "Integration with existing ERP/CRM systems.",
          "Automation & Control Systems for remote operation and monitoring.",
          "Cloud & Data Analytics solutions for secure migration and business intelligence."
        ]}
        image="src/assets/cloud-practioner.webp"
      />

      <InfoBlock
        title="Managed IT Services"
        content={[
          "24/7 infrastructure monitoring and management.",
          "Application performance optimization.",
          "Network security, backup, and disaster recovery."
        ]}
        image="src/assets/next-level-learning.webp"
        reverse
      />

      <InfoBlock
        title="Consulting & Support"
        content={[
          "Strategic IT advisory tailored for your business.",
          "Vendor selection and technology roadmap planning.",
          "Infrastructure troubleshooting and modernization.",
          "Expert process consultancy and solution blueprinting.",
          "Technical Support & Maintenance for ongoing updates.",
          "Industry partnerships for R&D and innovation."
        ]}
        image="src/assets/cloud-practioner.webp"
      />


        <InfoBlock
        title="Digital Transformation"
        content={[
          "Business process automation and workflow modernization.",
          "Big Data analytics, reporting, and dashboard creation.",
          "IoT integration for smarter operations.",
        ]}
        image="src/assets/cloud-practioner.webp"
        reverse
      />

        <InfoBlock
        title="Cloud Solutions"
        content={[
          "High-performance cloud servers and databases.",
          "Office 365 deployment and collaboration tools.",
          "Custom cloud infrastructure design and migration.",
          "Scalable and secure architecture tailored to client needs.",
        ]}
        image="src/assets/cloud-practioner.webp"
      />

        <InfoBlock
        title="Cybersecurity & Digital Forensics"
        content={[
          "Comprehensive cyber defense systems.",
          "Protection, monitoring, threat detection, and rapid response.",
          "Digital forensics and recovery services.",
        ]}
        image="src/assets/cloud-practioner.webp"
        reverse
      />
    </div>
    
  );
}

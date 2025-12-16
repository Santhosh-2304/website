import React from "react";
import InfoBlock from "../components/InfoBlock";

export default function TechBlock() {
  return (
    <div className="TechBlock bg-gray-50">

      {/* Application Development */}
      <section id="application-development" className="scroll-section">
        <InfoBlock
          title="Application Development"
          content={
            "We build high-quality mobile and web applications tailored to your business needs and user experience goals. Our development process focuses on performance, usability, and scalability using modern frameworks and technologies. We create custom apps that integrate seamlessly with existing or new ERP/CRM systems and support future enhancements. From concept to deployment, we ensure smooth project execution with agile methodologies. We also provide UI/UX design, testing, and maintenance to keep your app running flawlessly."
          }
          image="src/assets/app.jpg"
          nav="/app-development"
        />
      </section>

      {/* Managed IT */}
      <section id="managed-it-services" className="scroll-section">
        <InfoBlock
          title="Managed IT Services"
          content={[
            "24/7 infrastructure monitoring and management.",
            "Application performance optimization.",
            "Network security, backup, and disaster recovery."
          ]}
          image="src/assets/IT.avif"
          nav="/it"
          reverse
        />
      </section>

      {/* Consulting */}
      <section id="consulting-support" className="scroll-section">
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
          image="src/assets/cons.avif"
        />
      </section>

      {/* Digital Transformation */}
      <section id="digital-transformation" className="scroll-section">
        <InfoBlock
          title="Digital Transformation"
          content={[
            "Business process automation and workflow modernization.",
            "Big Data analytics, reporting, and dashboard creation.",
            "IoT integration for smarter operations.",
        ]}
          image="src/assets/Digi.jpg"
          reverse
        />
      </section>

      {/* Cloud */}
      <section id="cloud-solutions" className="scroll-section">
        <InfoBlock
          title="Cloud Solutions"
          content={[
            "High-performance cloud servers and databases.",
            "Office 365 deployment and collaboration tools.",
            "Custom cloud infrastructure design and migration.",
            "Scalable and secure architecture tailored to client needs.",
          ]}
          image="src/assets/cloud.webp"
        />
      </section>

      {/* Cybersecurity */}
      <section id="cybersecurity-digital-forensics" className="scroll-section">
        <InfoBlock
          title="Cybersecurity & Digital Forensics"
          content={[
            "Comprehensive cyber defense systems.",
            "Protection, monitoring, threat detection, and rapid response.",
            "Digital forensics and recovery services.",
          ]}
          image="src/assets/cybersecurity.webp"
          reverse
        />
      </section>

    </div>
  );
}

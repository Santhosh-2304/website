import Block3 from '../components/Block3'
import React from 'react'
import ImageCarousel from '../components/ImageCarousel'

const images = [
      "Corporate.jpg",
      "teach.jpg",
      "discussion.jpg",
]
const content = [
      "At our core, we are a forward-thinking startup dedicated to delivering high-quality software development services, industry-focused training, and reliable placement support. We blend technical expertise with real-world experience to help individuals and businesses grow faster and smarter. Our team is passionate about building innovative solutions, empowering learners with practical, job-ready skills, and connecting them to the right career opportunities. People choose us because we prioritize personal attention, hands-on learning, transparent processes, and results that speak for themselves. ",
      "We are a dynamic and service-driven organization specializing in software development, professional training and end-to-end placement support. Our approach combines technical expertise, structured learning, and industry-aligned practices to deliver exceptional value to both individuals and businesses. We are committed to providing high-quality solutions, fostering skill development, and guiding candidates toward meaningful career opportunities. Clients and learners choose us for our reliability, professionalism, and unwavering focus on measurable outcomes.",
      "We’re here to build, train, and transform! As a fast-growing tech and training services company, we bring together innovative software solutions, powerful skill-building programs, and career-launching placement support. Our team thrives on creativity, passion, and hands-on problem-solving. People choose us because we deliver energy, expertise and opportunities that spark real change—whether you're boosting your business or kickstarting your dream career.",

]
const courseList = [
  {
    title: "AI + Data",
    description:
      "Work smarter (not harder) with artificial intelligence and keep up with Claude AI and more.",
  },
  {
    title: "Software Development",
    description:
      "Build fluency in languages like C#, Java, Angular, and JavaScript and evolve as they do.",
  },
  {
    title: "Cloud + IT Ops",
    description:
      "From AWS to Google Cloud and everything in between, expand your cloud clout.",
  },
  
  {
    title: "UI/UX Design",
    description:
      "Master user-centered design, wireframing, prototyping, and design tools like Figma.",
  },
  // {
  //   title: "Data Engineering",
  //   description:
  //     "Learn ETL pipelines, data lakes, warehousing, and distributed systems.",
  // },
  {
    title: "DevOps",
    description:
      "Automation, CI/CD pipelines, Git, Docker, Kubernetes, and monitoring tools.",
  },
  {
    title: "Security",
    description:
      "Stop cyber attacks, secure critical systems, and position yourself as the expert.",
  },
];



const Home = () => {
  return (
    <>
        <ImageCarousel 
          images={images}
          content={content}
          interval={4000}
        />
        <Block3 items={courseList} />
    </>
  )
}

export default Home
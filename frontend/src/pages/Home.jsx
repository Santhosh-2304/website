import Block2 from '../components/Block2'
import Block3 from '../components/Block3'
import React from 'react'
import ImageCarousel from '../components/ImageCarousel'

const images = [
      "training.jpg",
      "Corporate.jpg",
      "src/assets/training.jpg"
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
    title: "Security",
    description:
      "Stop cyber attacks, secure critical systems, and position yourself as the expert.",
  },

 
  {
    title: "UI/UX Design",
    description:
      "Master user-centered design, wireframing, prototyping, and design tools like Figma.",
  },
  {
    title: "Data Engineering",
    description:
      "Learn ETL pipelines, data lakes, warehousing, and distributed systems.",
  },
  {
    title: "DevOps",
    description:
      "Automation, CI/CD pipelines, Git, Docker, Kubernetes, and monitoring tools.",
  },
];



const Home = () => {
  return (
    <>
        <ImageCarousel 
          images={images}
          interval={4000}
        />
        <Block2 />
        <Block3 items={courseList} />
    </>
  )
}

export default Home
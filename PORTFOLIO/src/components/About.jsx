import React from 'react'
import neethu from '../assets/images/neethu.jpg'

const About = () => {
  return (
    <>
   <div>
         <img src={neethu} className="ml-10 w-56 h-56" alt="Neethu M" />
</div>
<div className="ml-96 text-blue-900">
  <h1 className="text-4xl">Hello!!!</h1>
  <h2 className="text-6xl font-extrabold">I'm Neethu M</h2>
</div>
<div className="ml-5 mr-4 text-blue-700 mt-6">
  <h2 className="font-semibold text-2xl">About Me</h2>
  <p className="text-justify text-black mt-8">
    My name is Neethu M. I am currently pursuing my Mtech in CSE and I'll be graduating in June 2024. I am also enrolled in a one-year blockchain architect program at Kerala Blockchain Academy. I am from Palakkad, Kerala. I am a highly motivated student passionate about the future of computer technology and engineering. Seeking a challenging position in a technical organization that can provide me with an opportunity to improve my skills and strengths in conjunction with the organizational goals and to attain excellence through experience. I would describe myself as a happy, confident, and determined person who is a very fast learner and always hungry to learn and improve. 
  </p>
  </div>
  
    </>
  )
}

export default About

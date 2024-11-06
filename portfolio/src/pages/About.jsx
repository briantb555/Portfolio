import React from 'react'
import profile from '../assets/headshot.jpeg'

function About() {
  return (
    <div>
      <h1 className='text-white'>About</h1>
      <img src= {profile} alt="profile" className='rounded' style={{maxHeight:'300px'}} />
      <p className='text-white fs-3'>
        I am a full stack web developer with a background in marketing and project management. I have a passion for creating and problem solving. I am excited to bring my unique background to the tech industry and create engaging web applications.
      </p>
    </div>
  )
}

export default About
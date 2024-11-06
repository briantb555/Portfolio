import React from 'react'

function Resume() {
  return (
    <div className='container'>
      <h1>Resume</h1>
      <p>Download my resume <a href="https://www.linkedin.com/in/brian-thomas-barber/" target="_blank" rel="noopener noreferrer">here</a>.</p>

      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>REST</li>
      </ul>
    </div>
  )
}

export default Resume
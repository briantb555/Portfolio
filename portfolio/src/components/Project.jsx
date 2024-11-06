import React from 'react'

function Project({ project }) {
  return (
    <div className='col-md-4 mb-4'>
          <div className='card'>
            <img src={project.image} className='card-img-top' alt={project.title} />
            <div className='card-body'>
              <h5 className='card-title'>{project.title}</h5>
              <p className='card-text'>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>GitHub</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className='btn btn-primary mx-2'>Live</a>
            </div> 
          </div>
        </div>
  )
}

export default Project
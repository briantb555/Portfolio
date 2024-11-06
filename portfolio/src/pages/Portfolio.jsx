import Project from "../components/Project"

const projects = [
  {
    title: 'TrackerCoaster',
    description: 'HTML, JS, CSS',
    image: 'https://github.com/ryannarnoldd/TrackerCoaster/raw/main/assets/images/Website.png',
    github: 'https://github.com/ryannarnoldd/TrackerCoaster',
    live: 'https://ryannarnoldd.github.io/TrackerCoaster/'
  },
  {
    title: 'Project 2',
    description: 'Description 2',
    image: 'https://via.placeholder.com/150',
    github: 'https://www.google.com',
    live: 'https://www.google.com'
  },
  {
    title: 'Project 3',
    description: 'Description 3',
    image: 'https://via.placeholder.com/150',
    github: 'https://www.google.com',
    live: 'https://www.google.com'
  },
  {
    title: 'Project 4',
    description: 'Description 4',
    image: 'https://via.placeholder.com/150',
    github: 'https://www.google.com',
    live: 'https://www.google.com'
  },
  {
    title: 'Project 5',
    description: 'Description 5',
    image: 'https://via.placeholder.com/150',
    github: 'https://www.google.com',
    live: 'https://www.google.com'
  },
  {
    title: 'Project 6',
    description: 'Description 6',
    image: 'https://via.placeholder.com/150',
    github: 'https://www.google.com',
    live: 'https://www.google.com'
  }
 
]
function Portfolio() {
  return (
    <div>
      <h1 className='text-white'>Portfolio</h1>
      <div className='row'>
        {projects.map((project, index) => (
          <Project key={index} project={project} /> 
        ))}
      </div>
    </div>
  )
}

export default Portfolio
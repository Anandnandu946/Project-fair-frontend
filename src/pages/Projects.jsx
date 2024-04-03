import React from 'react'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <div>
      <h2 className='text-center m-5'>All projects</h2>
      <input style={{width:"400px"}} type="text" placeholder='Search By Technology' className='form-control mx-auto m-5' />
      <div className="row">
        <div className="col">
          <ProjectCard/>
        </div>
      </div>
    </div>
  )
}

export default Projects
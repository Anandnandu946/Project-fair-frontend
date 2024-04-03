import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/image.webp'
import ProjectCard from '../Components/ProjectCard'

function Home() {
  return (
    <div>
        <div className="row">
            <div className="col-6">
                <h1 className='text-center mt-5'>Project Fair</h1>
                <p style={{textAlign:'justify'}} className='mx-5'>Project management focuses on planning and organizing a project and its resources. This includes identifying and managing the lifecycle to be used, applying it to the user-centered design process, formulating the project team, and efficiently guiding the team through all phases until project completion.</p>
                <div className='text-center'>
                    <Link to={"/login"}>
                    <button className='btn btn-dark mt-2 mb-5'>GET STARTED</button>
                    </Link>
                </div>
            </div>
            <div className="col-md-6" >
                <img src={image} width={550} height={380} alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <h1 className='text-center m-5'>Explore Our Project</h1>
                <marquee behavior="" direction="left" width="100%" height="400px" >
                    <div>
                        <ProjectCard/>
                    </div>
                </marquee>
            </div>
        </div>
        <div className="row mx-5 mb-5">
            <h1 className='text-center m-5'>Our Services</h1>
            <div className="col-md-4">
                <div className='card shadow p-5' style={{height:"380px"}}>
                    <h3 className='text-center m-2'>Web Designing</h3>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis tempora commodi, maxime harum ipsam eveniet molestias! Dolore cum sit illo, corporis nostrum tempora deserunt. Quibusdam totam aliquam repellat! Inventore.</p>
                </div>
            </div>
            <div className="col-md-4">
            <div className='card shadow p-5' style={{height:"380px"}}>
                    <h3 className='text-center m-2'>Single Page Application</h3>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis tempora commodi, maxime harum ipsam eveniet molestias! Dolore cum sit illo, corporis nostrum tempora deserunt. Quibusdam totam aliquam repellat! Inventore.</p>
                </div>
            </div>
            <div className="col-md-4">
            <div className='card shadow p-5' style={{height:"380px"}}>
                    <h3 className='text-center m-2'>Backend Services</h3>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis tempora commodi, maxime harum ipsam eveniet molestias! Dolore cum sit illo, corporis nostrum tempora deserunt. Quibusdam totam aliquam repellat! Inventore.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import AddProject from './AddProject'
import { FaGithub } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function MyProject() {
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <h3  className='ms-5'>My Projects</h3>
            <AddProject/>
        </div>
        <div className="row shadow m-4 p-2">
            <div className="col-6">
                <h4>Project Title</h4>
            </div>
            <div className="col-6 px-3">
                <button className='btn btn-dark mx-3'><FaGithub /></button>
                <button className='btn btn-dark mx-3'><FaEdit /></button>
                <button className='btn btn-dark mx-3'><MdDelete /></button>
            </div>
        </div>
    </div>
  )
}

export default MyProject
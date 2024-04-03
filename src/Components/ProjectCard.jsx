import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div>
      <Card style={{ width: '28rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-vector/project-concept-vector-business-horizontal-illustration-banner-white-background_104589-19.jpg" width={'100%'} height={'300px'} />
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
        
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
         <div className='col-6'>
          <img width={'100%'} src="https://img.freepik.com/premium-vector/project-concept-vector-business-horizontal-illustration-banner-white-background_104589-19.jpg" alt="" />
         </div>
         <div className='col-6 text-center'>
          <h2>Project Title</h2>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eum ab molestiae hic explicabo quas excepturi neque. Ea, excepturi, a aliquam optio et error quo veritatis neque praesentium quae illum?</p>
          <p>Technology used: <b>React,Node</b></p>
         </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content-between'>
            <Button className='me-5'><a href=""><FaGithub /></a></Button>
            <Button className='me-5'><a href=""><FaLink /></a></Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </div>
          
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default ProjectCard
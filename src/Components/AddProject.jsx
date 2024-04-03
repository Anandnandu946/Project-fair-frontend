import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <button className='btn btn-light text-dark m-5' onClick={handleShow}>Add</button>
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 mt-5 pt-5">
            <label >
          <input type="file" style={{display:'none'}} />
          <img width={'200px'} src="https://media3.giphy.com/media/qgQUggAC3Pfv687qPC/200w.gif?cid=6c09b9524ahysemi5vdhtv98kjw8xvhcshqbzypavuntjn6r&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />
        </label>
            </div>
            <div className="col-6 text-center">
              <input type="text" placeholder='Project title' className='form-control mb-3' />
              <input type="text" placeholder='Languages used' className='form-control mb-3' />
              <input type="text" placeholder='Git hub link' className='form-control mb-3' />
              <input type="text" placeholder='Live link' className='form-control mb-3' />
              <input type="text" placeholder='Overview' className='form-control mb-3' />
            </div>
          </div>
      
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject
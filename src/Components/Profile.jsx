import React from 'react'
import Swal from 'sweetalert2'

function Profile() {

   const updateUser=()=>{
    Swal.fire({
      title: 'success',
      text: 'user details updated',
      icon: 'success',
      confirmButtonText: 'Back'
    })
   }
  return (
    <div>
      <div className='text-center'>
        <h3 className='mt-5'>My Profile</h3>
        <label >
          <input type="file" style={{display:'none'}} />
          <img width={'200px'} src="https://cdn.pixabay.com/photo/2017/07/11/13/56/user-2493635_1280.png" alt="" />
        </label>
      </div>
      <div className='text-center p-5'>
      <input type="text" placeholder='Name' className='form-control mb-3' />
              <input type="text" placeholder='Git hub' className='form-control mb-3 ' />
              <input type="text" placeholder='Live link' className='form-control mb-3' />
              <button className='btn btn-dark' onClick={updateUser}>Update</button>
      </div>
    </div>
  )
}

export default Profile
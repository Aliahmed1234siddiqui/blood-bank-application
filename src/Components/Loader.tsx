import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
  return (
    <div>
       <div className='ma d-flex justify-content-center'>
    <Spinner className='  text-white  p-5 m-5 fw-bold' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      ALI
    </Spinner>
    </div>
    </div>
  )
}

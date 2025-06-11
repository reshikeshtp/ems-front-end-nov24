import React from 'react'
import { Spinner } from 'react-bootstrap'


function LoadingSpinner() {
  return (
  <div className='d-flex justify-content-center mt-5'> <Spinner animation="border" variant="dark" /> <span className='ms-2'>Loading...</span> </div>
  )
}

export default LoadingSpinner
import React from 'react'
import './Home.css'
import { Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Hometable from '../../Components/Hometable/Hometable';




function Home() {
  const navigate = useNavigate()

  const adduser = ()=>{
    navigate('/register')
  }
  return (
    <>
    <div className='container mt-5'>
      <div className="first_div">
        <div className="search_add d-flex justify-content-between">
          <div className="search col-lg-4">
            <Form className='d-flex'>
          <Form.Control type="text" placeholder="search" className='me-2'/>
          <Button variant='primary'>search</Button>
          </Form>
          </div>
          <div className='add_btn'>
            <Button  onClick={adduser} variant='success'>
              <i className='fa-solid fa-user-plus'>Add</i>
            </Button>

          </div>
        </div>

      </div>
      <div className="second_div">
     { /* table*/}
     <Hometable/>
        
      </div>
    </div>
    </>
  )
}

export default Home
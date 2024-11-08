import React from 'react'
import './Profile.css'
import { Card,Form,Row,Button } from 'react-bootstrap'

function Profile() {
  return (
    <>
    <div className="container">
      <Card className="shadow col-lg-6 mx-auto mt-5">
       <Card.Body>
        <Row>
          <div className="col">
            <div className="profile_img  d-flex justify-content-center">
              <img className='border p-1 rounded-circle' width={'250px'} height={'250px'} src="https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png" alt="" />
            </div>
          </div>
        </Row>
        <div className="text-center mt-3">
          <h3>Max Miller</h3>
          <h4 ><i className='fa-solid fa-envelope text-primary'></i>:-<span>max@gmail.com</span></h4>
          <h4 ><i className='fa-solid fa-mobile text-success'></i>:-<span>44338888</span></h4>

          <h4 ><i className='fa-solid fa-venus-mars text-info'></i>:-<span>male</span></h4>
          <h4 ><i className='fa-solid fa-location-dot text-danger'></i>:-<span>Brooklyn</span></h4>
          <h4 ><i className='fa-solid fa-chart-line text-warning'></i>:-<span>Active</span></h4>




        </div>
       </Card.Body>


      </Card>
    </div>
    </>
  )
}

export default Profile
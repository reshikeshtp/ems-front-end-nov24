import React from 'react'
import './Register.css'
import { Card,Form,Row,Button } from 'react-bootstrap'
import Select from 'react-select'


function Register() {
  const option=[
    {value:'Active',label:'Active'},
    {value:'InActive',label:'InActive'}

  ]
  return (
  <div className="container mt-5">
    <h2 className='text-center mt-3'>
      Register Employee Details
    </h2>
      <Card className='shadow mt-3 p-3'>
        <div className="text-center">
        <img width={'60px'} height={'60px'} src="https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png" alt="" />
        </div>
        <Form>
          <Row>
          <Form.Group className="mb-3 col-lg-6" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lname' placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Email Address" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" name='mobile' placeholder="Mobile" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicGender">
        <Form.Label>Select Gender</Form.Label>
        <Form.Check
            
            type={'radio'}
            label={'Male'}
            name='gender'
            value={'male'}
          />
           <Form.Check
            type={'radio'}
            label={'FeMale'}
            name='gender'
            value={'Female'}
          />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicStatus">
        <Form.Label>Select Employee Status</Form.Label>
         <Select options={option}></Select>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" >
        <Form.Label>Choose profile picture</Form.Label>
        <Form.Control type="file" name='user_profile'  />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" >
        <Form.Label>Enter Emplyee location</Form.Label>
        <Form.Control type="text" name='user_profile'  placeholder="enter location" />
      </Form.Group>
         <Button variant='primary' type='submit'>Submit</Button>
          </Row>
        </Form>
      </Card>
  </div>
  )
}

export default Register
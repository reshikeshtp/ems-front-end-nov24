import React, { useEffect, useState } from 'react'
import './Profile.css'
import { Card,Row } from 'react-bootstrap'
import LoadingSpinner from '../../Components/Spinners/LoadingSpinner'
import { useParams } from 'react-router-dom'
import { viewUser } from '../../Services/allApi'
import { BASE_URL } from '../../Services/base_url'




function Profile() {

  

   //get path parameter from associated route
   const{id}=useParams()
    //state  to hold user details
    
    const [userDetail,setUserDetail]= useState({})
     const[showSpin,setShowSpin]=useState(true)

   //get a particular user details api

   const userDetails = async ()=>{
     const {data} = await viewUser(id)
    setUserDetail(data);
    
   }
   console.log(userDetail);
   
   

   useEffect(()=>{
    userDetails()
      setTimeout(()=>{
        setShowSpin(false)
      },2000)
    },[])

  return (
    <>{
      showSpin ? <div className='d-flex justify-content-center mt-5'> <LoadingSpinner/></div>:
    <div className="container">
      <Card className="shadow col-lg-6 mx-auto mt-5">
       <Card.Body>
        <Row>
          <div className="col">
            <div className="profile_img  d-flex justify-content-center">
              <img className='border p-1 rounded-circle' width={'250px'} height={'250px'} src={`${BASE_URL}/uploads/${userDetail.profile}`}  alt="" />
            </div>
          </div>
        </Row>
        <div className="text-center mt-3">
          <h3>{`${userDetail.fname} ${userDetail.lname}`}</h3>
          <h4 ><i className='fa-solid fa-envelope text-primary'></i>:-<span>{userDetail.email}</span></h4>
          <h4 ><i className='fa-solid fa-mobile text-success'></i>:-<span>{userDetail.mobile}</span></h4>

          <h4 ><i className='fa-solid fa-venus-mars text-info'></i>:-<span>${userDetail.gender}</span></h4>
          <h4 ><i className='fa-solid fa-location-dot text-danger'></i>:-<span>{userDetail.location}</span></h4>
          <h4 ><i className='fa-solid fa-chart-line text-warning'></i>:-<span>{userDetail.status}</span></h4>




        </div>
       </Card.Body>


      </Card>
    </div>
}
    </>
  )
}

export default Profile
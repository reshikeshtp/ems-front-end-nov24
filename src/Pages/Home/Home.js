import React, { useState,useEffect, useContext } from 'react'
import './Home.css'
import { Form,Button,Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Hometable from '../../Components/Hometable/Hometable';
import LoadingSpinner from '../../Components/Spinners/LoadingSpinner';
import { addData, deleteData, updateData } from '../../Components/contexts/ContextShare'
import { deleteuser, getallusers } from '../../Services/allApi';





function Home() {

  //state to hold search key
  const[search,setSearch]= useState('')
   //delete data
    const {deletedata,setdeletedata}= useContext(deleteData)
     //update data
   const {editdata,seteditdata}= useContext(updateData)
  //to hold all users
  const[userData,setUserData]=useState([])


  const navigate = useNavigate()
  const{userAdd,setUserAdd}=useContext(addData)

  //spinner
  const[showSpin,setShowSpin]=useState(true)

  const adduser = ()=>{
    navigate('/register')
  }
  //api call for get users
  const getalluserData = async ()=>{
    const response = await getallusers(search)
   if(response.status===200){
     setUserData(response.data)
   }else{
    console.log("can not fetch data");
    
   }
    
  }
  //delete user
  const deleteUser = async (id)=>{
    //make an api  call
    const response = await deleteuser(id)
      if(response.status===200){
        getalluserData()
      setdeletedata(response.data)
      }else{
        console.log("error");
        
      }
      
   }
  useEffect(()=>{
    getalluserData()
    setTimeout(()=>{
      
      setShowSpin(false)
    },2000)
  },[search])
  return (
    <>
    {
      userAdd &&  <Alert variant="success" onClose={() => setUserAdd("")} dismissible>
       {userAdd.fname.toUpperCase()} successfully Registerded.....
      </Alert>
    }
    {
      editdata&&  <Alert variant="success" onClose={() => seteditdata("")} dismissible>
       {editdata.fname.toUpperCase()} successfully updated.....
      </Alert>
    }
     {
      deletedata&&  <Alert variant="danger" onClose={() => setdeletedata("")} dismissible>
       {deletedata.fname.toUpperCase()} successfully deleted.....
      </Alert>
    }
    <div className='container mt-5'>
      <div className="first_div">
        <div className="search_add d-flex justify-content-between">
          <div className="search col-lg-4">
            <Form className='d-flex'>
          <Form.Control type="text" placeholder="search" className='me-2' onChange={e=>setSearch(e.target.value)}/>
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
    { 
     showSpin ? <div className='d-flex justify-content-center mt-5'> <LoadingSpinner/></div>:<Hometable displayData={userData}  deleteUser={deleteUser}  />}
      
        
      </div>
    </div>
    </>
  )
}

export default Home
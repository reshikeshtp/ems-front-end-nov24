import React, { useState,useEffect, useContext } from 'react'
import './Register.css'
import { Card,Form,Row,Button } from 'react-bootstrap'
import Select from 'react-select'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../../Components/Spinners/LoadingSpinner'
import { empRegister } from '../../Services/allApi'
import { useNavigate } from 'react-router-dom'
import { addData } from '../../Components/contexts/ContextShare'





function Register() {

  const navigate=useNavigate()
//state to share data from register to all contacts
const {userAdd,setUserAdd} = useContext(addData)


   const[showSpin,setShowSpin]=useState(true)
  const option=[
    {value:'Active',label:'Active'},
    {value:'InActive',label:'InActive'}

  ]
//state holds inputs
  const[inputData,setInputData]=useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    gender:"",
    location:""
  })
 //status state
  const[status,setStatus]= useState("Active")
//image state
  const[image,setImage]=useState(null)

  // preview  state
  const[preview,setPreview] = useState(" ")

//update inpute data
  const setInputValue = (e)=>{
    const {name,value} = e.target
    setInputData({...inputData,[name]:value})

  }
  console.log(inputData);
  
//update status
  const setStatusValue = (e)=>{
    setStatus(e.value)

  }
console.log(status);

   const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    setTimeout(()=>{
        setShowSpin(false)
      },2000)
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

 

const handleSubmit = async(e)=>{
  e.preventDefault()
  const {fname,lname,email,mobile,gender,location} = inputData

  if(fname===""){
    toast.error("fisrt name required")
  }else if(lname===""){
    toast.error("last name required")
}else if(email===""){
  toast.error("email required")
}else if(mobile===""){
  toast.error("mobile number required")
}else if(gender===""){
  toast.error("gender required")
}else if(location===""){
  toast.error("location required")
}else if(!image){
  toast.error("image required")
}else{
  const data= new FormData()
  data.append("fname",fname)
  data.append("lname",lname)
  data.append("email",email)
  data.append("mobile",mobile)
  data.append("location",location)
  data.append("gender",gender)
  data.append("status",status)
  data.append("user_profile",image)
         
  const headerConfig ={
  "Content-Type":"multipart/form-data"

  }
  const response = await empRegister(data,headerConfig)
  console.log(response);
  if(response.status===200){
    //register success all state reset
    setInputData({
      ...inputData,
      fname:"",
      lname:"",
      email:"",
      mobile:"",
      gender:"",
      location:""
      

    })
    setStatus('')
    setImage('')
    //share data to all contact page via use context
    setUserAdd(response.data)
    //navigate to all contacts
    navigate('/')
  }
  

}
}


  return (
    <>{
      showSpin?<div className='d-flex justify-content-center mt-5'> <LoadingSpinner/></div>:
  <div className="container mt-5">
    <h2 className='text-center mt-3'>
      Register Employee Details
    </h2>
      <Card className='shadow mt-3 p-3'>
        <div className="text-center">
        <img width={'60px'} height={'60px'} src={preview?preview:"https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png"} alt="" />
        </div>
        <Form>
          <Row>
          <Form.Group className="mb-3 col-lg-6" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='fname' placeholder="First Name" 
        value={inputData.fname} onChange={setInputValue} />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lname' placeholder="Last Name" 
          value={inputData.lname} onChange={setInputValue}/>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Email Address"
          value={inputData.email} onChange={setInputValue} />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" name='mobile' placeholder="Mobile"
          value={inputData.mobile} onChange={setInputValue} />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicGender">
        <Form.Label>Select Gender</Form.Label>
        <Form.Check
            
            type={'radio'}
            label={'Male'}
            name='gender'
            value={'male'}
            onChange={setInputValue}
          />
           <Form.Check
            type={'radio'}
            label={'FeMale'}
            name='gender'
            value={'Female'}
            onChange={setInputValue}
          />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicStatus">
        <Form.Label>Select Employee Status</Form.Label>
         <Select options={option} onChange={setStatusValue}></Select>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" >
        <Form.Label>Choose profile picture</Form.Label>
        <Form.Control type="file" name='user_profile' onChange={setProfile}  />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" >
        <Form.Label>Enter Emplyee location</Form.Label>
        <Form.Control type="text" name='location'  placeholder="enter location" value={inputData.location} onChange={setInputValue} />
      </Form.Group>
         <Button variant='primary' type='submit' onClick={handleSubmit}>Submit</Button>
          </Row>
        </Form>
      </Card>
  </div>
}
  {/* toast */}
  <ToastContainer position='top-center'/>
  </>

  )
}

export default Register
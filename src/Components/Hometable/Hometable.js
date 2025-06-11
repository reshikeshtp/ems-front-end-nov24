import React from 'react'
import './Hometable'
import { Row,Card,Table,Dropdown,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../Services/base_url';


function Hometable({displayData,deleteUser}) {
  console.log(displayData);
  
  return (
    <div className='container mt-5'>
     <Row className='col'>
        <Card className='shadow'>
           <Table className='align-item-center' responsive='sm'>
           <thead className='thead-dark'>
        <tr className='table-dark'>
          <th>id</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Profile</th>
          <th>Action</th>
        </tr>
    
      </thead>
      <tbody>
      {displayData.length>0?displayData.map((Item,index)=>(
          <tr>
        <td>{index+1}</td>
        <td>{Item.fname} {Item.lname}</td>
        <td>{Item.email}</td>
        <td>{Item.mobile}</td>
        <td>{Item.gender}</td>
        <td>
        <Dropdown>
      <Dropdown.Toggle variant= {Item.status==="Active"?'primary':'danger'} id="dropdown-basic">
     {Item.status}
      </Dropdown.Toggle>

    
    </Dropdown>

        </td>
        <td><img width={'60px'} height={'60px'} src={`${BASE_URL}/uploads/${Item.profile}`} alt="" /></td>
        <td>
        <Dropdown>
      <Dropdown.Toggle variant='light' id="dropdown-basic">
      <i class="fa-solid fa-ellipsis-vertical fs-4"></i>
    
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item >
      <Link to={`/profile/${Item._id}`}>
       <i className='fa-solid fa-eye text-success me-2 fs-5'></i>
       <span className='fs-5 text-dark'>View</span>
       </Link>

      </Dropdown.Item>
      <Dropdown.Item >
        <Link to={`/edit/${Item._id}`}>
       <i className='fa-solid fa-pen text-danger me-2 fs-5'></i>
       <span className='fs-5 text-dark'>Edit</span>
       </Link></Dropdown.Item>
       <Dropdown.Item >
        <div onClick={()=>deleteUser(Item._id)}>
        <i className='fa-solid fa-trash text-danger me-2 fs-5'></i>
        <span className='fs-5 text-dark'>Delete</span>
        </div>
       </Dropdown.Item>
           
      </Dropdown.Menu>
    </Dropdown>

        </td>
        </tr>
      ))
       :
        <tr className='"d-flex justify-content-center mt-5 w-100% align-item-center text-danger'></tr>
        }
        
      </tbody>
           </Table>

        </Card>
     </Row>
    </div>
  )
}

export default Hometable

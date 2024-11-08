import React from 'react'
import './Hometable'
import { Row,Card,Table,Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Hometable() {
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
          <th>Gender</th>
          <th>Status</th>
          <th>Profile</th>
          <th>Action</th>
        </tr>
    
      </thead>
      <tbody>
        <td>1</td>
        <td>max miller</td>
        <td>max@gmail.com</td>
        <td>M</td>
        <td>
        <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        Active
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Active</Dropdown.Item>
        <Dropdown.Item >InActive</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>

        </td>
        <td><img width={'60px'} height={'60px'} src="https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png" alt="" /></td>
        <td>
        <Dropdown>
      <Dropdown.Toggle variant='light' id="dropdown-basic">
      <i class="fa-solid fa-ellipsis-vertical fs-4"></i>
    
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item >
      <Link to={'/profile/1'}>
       <i className='fa-solid fa-eye text-success me-2 fs-5'></i>
       <span className='fs-5 text-dark'>View</span>
       </Link>

      </Dropdown.Item>
      <Dropdown.Item >
        <Link to={'/edit/1'}>
       <i className='fa-solid fa-pen text-danger me-2 fs-5'></i>
       <span className='fs-5 text-dark'>Edit</span>
       </Link></Dropdown.Item>
       <Dropdown.Item >
        <i className='fa-solid fa-trash text-danger me-2 fs-5'></i>
        <span className='fs-5 text-dark'>Delet</span>
       </Dropdown.Item>
           
      </Dropdown.Menu>
    </Dropdown>

        </td>
      </tbody>
           </Table>

        </Card>
     </Row>
    </div>
  )
}

export default Hometable
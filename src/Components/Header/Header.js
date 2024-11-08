import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

function Header() {
  return (
    <header>
          <Navbar bg='dark' varient="dark">
        <Container>
          <Navbar.Brand href="/">
            <i className='fa-solid fa-users'></i>{' '}
            EMS Application
          </Navbar.Brand>
        </Container>
      </Navbar>

    </header>
  )
}

export default Header
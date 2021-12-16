import React from 'react'
import Logo from '../../assets/images/Union.png'
import './header.css'
import {Navbar, Container, Nav} from "react-bootstrap"


const Header = () => {
    return (
        <>
       
        <div className='header-section dis'>
        

        <div className='logo_div'>
        <div><img className="logo" src={Logo} alt='logo'></img></div>
        <div><h4>AppMap</h4></div>
        </div>

        <div className='buttons_div'>
        <div>
        <button className='button_1' type='button'>Sign In</button>
        <button className='button_2'>Sign Up</button>
        </div>
        </div>
        </div>
        

        <div className='mob_nav dis-mob'>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand href="#home"><div className='mob_logo'><img className="logo" src={Logo} alt='logo'></img><h4>AppMap</h4></div></Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">   <div className='mob_buttons'>
        <button className='button_1' type='button'>Sign In</button>
        <button className='button_2'>Sign Up</button>
        </div></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    
  </Container>
</Navbar>
        
        </div>


        
  

        </>
    )
}

export default Header

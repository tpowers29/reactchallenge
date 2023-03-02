import React from "react";
import {Navbar,Container, Nav} from "react-bootstrap";

const Header =(props)=>{
    return(
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{props.handleCurrentPage("Aboutme")}} href="/">Tyler Powers</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>props.handleCurrentPage("Aboutme")} href="#aboutme">About me</Nav.Link>
            <Nav.Link onClick={()=>props.handleCurrentPage("Contact")} href="#contact">Contact</Nav.Link>
            <Nav.Link onClick={()=>props.handleCurrentPage("Portfolio")} href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link onClick={()=>props.handleCurrentPage("Resume")} href="#resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header;
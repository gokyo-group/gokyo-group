import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../img/logo.svg'

const NavbarComponent = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>

        <Navbar.Brand href="/">
            <img src={logo} alt="Gokyo" style={{ width: '160px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ml-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>

              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/projectmanagement"> Project Management </NavDropdown.Item>
                <NavDropdown.Item href="/construction"> Construction </NavDropdown.Item>
                <NavDropdown.Item href="/design">Design</NavDropdown.Item>
                
                <NavDropdown.Item href="/remedial">Remedial</NavDropdown.Item>
                <NavDropdown.Item href="/facilitiesmanagement">Building and Facilities Management</NavDropdown.Item>
                <NavDropdown.Item href="/valuation">Valuation</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/products"> Future Projects </NavDropdown.Item>
                <NavDropdown.Item href="/products"> Project List </NavDropdown.Item>
                <NavDropdown.Item href="/gallery"> Gallery </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/contact">Contact us</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavbarComponent;

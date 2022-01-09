import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../img/logo.svg'

const NavbarRealEstateComponent = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{top:'0', width:'100%' }}>
        <Container>

        <Navbar.Brand href="/">
            <img src={logo} alt="Gokyo" style={{ width: '160px' }} />

          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {/* <Nav.Link href="/realestate" style={{ color:'#ff0000' }}> Home </Nav.Link> */}
              <Nav.Link href="/buy" style={{ color:'#ff0000' }}>Buy</Nav.Link>
              <Nav.Link href="/sell" style={{ color:'#ff0000' }}>Sell</Nav.Link>
              <Nav.Link href="/realestate/contact" style={{ color:'#ff0000' }}>Contact us/ Request a call back</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavbarRealEstateComponent;

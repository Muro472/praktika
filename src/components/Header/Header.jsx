import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from '../SearchBar/SearchBar';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">My Movie App</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/favourite">Favourite</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <SearchBar/>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
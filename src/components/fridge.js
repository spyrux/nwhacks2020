import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class Fridge extends React.Component{
  render(){
    return(
      <div>
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Free Your Fridge</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/upload">Upload</Nav.Link>
          <Nav.Link href="/fridge"> My Fridge</Nav.Link>
          <Nav.Link href="/recipes">Recipes</Nav.Link>
        </Nav>
      </Navbar>
      <br />
          </>
      <header> Items in Fridge
      </header></div>
    );
  }
}

export default Fridge

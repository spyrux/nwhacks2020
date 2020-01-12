import React from 'react';
import {Form, Button, ButtonGroup, Container} from 'react-bootstrap';

class Upload extends React.Component{
  render(){
    return(


      <div>
      <header style={{textAlign:"center", fontSize: 30}}> Upload Your Images or Type Them In!
      </header>
      <Container>
        <h1>Upload Images Here!</h1>
        <ButtonGroup aria-label="Basic example">
        <Button variant="dark">Food Image</Button>
        <Button variant="dark">Expiry Date</Button>
        <Button variant="dark">Submit</Button>
      </ButtonGroup>
      </Container>


    <Container>
    <Form>
        <h2>Manually Submit</h2>
        <Form.Group controlId="formFood">
          <Form.Control type="Type of Food" placeholder="Type of Food"/>
          </Form.Group>

          <Form.Group controlId="formExpiryDate">
          <Form.Control type="Expiry Date" placeholder="Expiry Date in MM/DD/YYYY" />
          </Form.Group>
          <Button variant="dark" type="submit">
          Submit
    </Button>
    </Form>
    </Container>
    </div>
    );
  }
}

export default Upload

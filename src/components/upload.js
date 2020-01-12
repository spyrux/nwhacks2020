import React, { Component } from 'react';
import { Nav, Navbar, ListGroup} from 'react-bootstrap';
import axios from 'axios';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodID: '',
      expiryDate: '',
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { foodID, expiryDate } = this.state;
    const item = {
      foodID,
      expiryDate
    };

    alert(`submitted! ${item.foodID}`);

    fetch(`http://localhost:5000/api/items`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(item)
    })
    //alert(process.env.PORT || 3001);
    // axios
    //   .post('http://localhost:5000/api/items', item)
    //   .then(() => console.log('Entry Created'))
    //   .catch(err => {
    //     console.error(err);
    //   });
    //
    // const options = {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //   data: item,
    //   url,
    // };
    // axios(options);
  };

  render() {
    return (
      <div>
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
        <center>
        <br />
        <br />
        <h1>Enter a fridge item and its expiration date</h1>
        <br />
        <br />
        <div class="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '60%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="foodID"
                placeholder="Enter your Food..."
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '60%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="expiryDate"
                placeholder="Enter the expiry date..."
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '60%' }}>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </form>

        </div>
        </center>
      </div>
    );
  }
}

export default Create;

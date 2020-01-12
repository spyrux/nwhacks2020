import React, { Component } from 'react';
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
    //alert(e.target.name + e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // const { food, expiryDate } = this.state;
    // alert(food);
    const item = {
      name: this.state.foodID,
      expiry: this.state.expiryDate
    };

    alert(`submitted! ${item.name}`);

    fetch(`http://localhost:${process.env.PORT || 3001}/api/items`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })

    // axios
    //   .post(`http://localhost:${process.env.PORT || 3001}/api/items`, item)
    //   .then(() => console.log('Entry Created'))
    //   .catch(err => {
    //     console.error(err);
    //   });
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="foodID"
                placeholder="Enter your Food..."
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
              <input
                type="text"
                className="form-control"
                name="expiryDate"
                placeholder="Enter the expiry date..."
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;

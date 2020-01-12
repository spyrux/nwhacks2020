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

    const { foodID, expiryDate } = this.state;
    alert(foodID);
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

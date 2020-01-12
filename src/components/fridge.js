import React from 'react';
import { Nav, Navbar, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import cors from 'cors';
import ReactTable from 'react-data-table-component';


class Fridge extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      items:[]
    };
  }


  componentDidMount(){
    console.log('gothegere');
    axios.get('http://localhost:5000/api/items')
         .then(res => {
            console.log(res.data);
            // let data = res.data.map(ex => {
            //   return ex.foodID, ex.expiryDate];
            // });
            this.setState({
              items: res.data.map(ex => {
                let obj = {id: ex._id, food: ex.foodID, exp: ex.expiryDate};
                return obj;
              }),
            });
          });
          console.log(this.state);
  }

  render(){
    //const itemz = this.state.items.map(item => {item[0], item[1]});
    //console.log(items);
    const columns = [
      {
        name: 'Id',
        selector: 'id',
        sortable: false,
        width: '20%',
        maxWidth: '30%',
      },
      {
        name: 'Food Item',
        selector: 'food',
        sortable: true,
        width: '40%',
        maxWidth: '40%',
      },
      {
        name: 'Expiration Date',
        selector: 'exp',
        sortable: true,
        right: true,
        width: '20%',
        maxWidth: '30%',
      },
    ];


    const data = this.state.items;
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
      <center>
      <header>
      <br />
      <br />
      <h1>Items in Fridge</h1>
      </header>
      <br />
        <div>
          <ReactTable
            columns= {columns}
            data={data}
            defaultPageSize={10}
          />
        </div>
      </center>
  </div>

    );
  }
}
export default Fridge

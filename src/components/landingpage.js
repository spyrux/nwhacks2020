import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Fridge from './fridge';
import Recipes from './recipes';
import Container from 'react-bootstrap/Container';
import fridgepic from './images/87266475-stock-vector-thumbs-up-cute-refrigerator-character-cartoon.jpg';
import { Nav, Navbar} from 'react-bootstrap';


class LandingPage extends React.Component{
  render(){
    return(

      <div>

      <body class="text-center">

      <header class="masthead mb-auto">
        <div class="inner">

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
      </div>
      </header>

      <main role="main" class="inner cover">
      <br />
      <br />
        <h1 class="cover-heading">Don't Let Your Food Go to Waste</h1>
        <br />
        <br />
        <Container>
        <text> whatsinmyfridge is an application that keeps track of the
        items in your fridge and notifies you of expiry dates.<br/>
         Take a photo of the expiration date and upload a photo of the food, or type it in manually!</text>

         <br />
         <br />
        </Container>
        <img src = {fridgepic} width = '450' height = '450'/>
      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
        </div>
      </footer>



    </body>
    </div>
    );
  }
}

export default LandingPage

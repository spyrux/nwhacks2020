import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Fridge from './fridge';
import Recipes from './recipes';
import Container from 'react-bootstrap/Container';


class LandingPage extends React.Component{
  render(){
    return(

      <div>

      <body class="text-center">
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">
          <h3 class="masthead-brand">Welcome to whatsinmyfridge</h3>
          <nav class="nav nav-masthead justify-content-center">
            <a class="nav-link active" href="https://getbootstrap.com/docs/4.4/examples/cover/#">Upload</a>
            <a class="nav-link" href="https://getbootstrap.com/docs/4.4/examples/cover/#">My Fridge</a>
            <a class="nav-link" href="https://getbootstrap.com/docs/4.4/examples/cover/#">Recipes</a>
          </nav>
        </div>
      </header>

      <main role="main" class="inner cover">
        <h1 class="cover-heading">Don't Let Your Food Go to Waste</h1>
        <Container>
        <text> whatsinmyfridge is an application that keeps track of the
        items in your fridge and notifies you of expiry dates.<br/>
         Take a photo of the expiration date and upload a photo of the food, or type it in manually!</text>
        </Container>
      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
        </div>
      </footer>
    </div>


    </body>
    </div>
    );
  }
}

export default LandingPage

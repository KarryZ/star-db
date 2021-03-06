import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetPage, StarshipsPage, SecretPage, LoginPage } from '../pages';
import { StarshipDetails } from '../sw-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect  
} from "react-router-dom";
import './app.css';

import {
  SwapiServiceProvider
} from '../swapi-service-context';


export default class App extends Component {
  
 
  state = {      
    service: new SwapiService(),
    isLoggedIn: false
  }
  

  onServiceChange= () => {
    this.setState( ( {service} ) => {
      const newService = service instanceof SwapiService ?
                         DummySwapiService : SwapiService;
      return {
        service: new newService()
      }      
    });    
  }

  onLogin = () => {
    this.setState({ isLoggedIn: true});
  }


  render() {      
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.service}>
          <Router>
            <div className="stardb-app container">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet />
              <Switch>           
                <Route path="/" 
                  render={() => <h2>Welcome to StarDB</h2>}
                  exact />
                <Route path="/people/:id?" component={PeoplePage}/>
                <Route path="/planets/" component={PlanetPage}/>
                <Route path="/starships/" component={StarshipsPage} exact/>
                <Route path="/starships/:id" 
                  render={({match}) => {
                    const {id} = match.params;
                    return <StarshipDetails itemId={id} />} 
                  }/>
                  <Route
                    path="/login"
                    render={() => (
                      <LoginPage
                        isLoggedIn={this.state.isLoggedIn}
                        onLogin={this.onLogin}/>
                  )}/>

                  <Route
                    path="/secret"
                    render={() => (
                      <SecretPage isLoggedIn={this.state.isLoggedIn} />
                  )}/>
                  <Route render={() => <h2>Page is not found </h2>} />
                </Switch>
            </div>
        </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
    
}


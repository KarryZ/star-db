import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetPage, StarshipsPage} from '../pages';
import { StarshipDetails } from '../sw-components';
import {
  BrowserRouter as Router,
  Route  
} from "react-router-dom";
import './app.css';

import {
  SwapiServiceProvider
} from '../swapi-service-context';


export default class App extends Component {
  
 
  state = {      
    service: new SwapiService()
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


  render() {      
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.service}>
          <Router>
            <div className="stardb-app container">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet />           
              <Route path="/" 
                render={() => <h2>Welcome to StarDB</h2>}
                exact />
                <Route path="/people/" 
                render={() => <h2>People</h2>}
                exact />
               <Route path="/people/:id?" component={PeoplePage}/>
               <Route path="/planets/" component={PlanetPage}/>
               <Route path="/starships/" component={StarshipsPage} exact/>
               <Route path="/starships/:id" 
                render={({match}) => {
                  const {id} = match.params;
                  return <StarshipDetails itemId={id} />} 
                }/>
            </div>
        </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
    
}


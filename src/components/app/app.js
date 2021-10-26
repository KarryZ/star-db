import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { PeoplePage, PlanetPage, StarshipsPage} from '../pages';
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
        <div className="stardb-app container">
          <Header onServiceChange={this.onServiceChange}/>
          <RandomPlanet />           
          <PeoplePage />
          <PlanetPage />
          <StarshipsPage />
          
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
    
}


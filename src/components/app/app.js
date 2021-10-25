import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import './app.css';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

import {
  SwapiServiceProvider
} from '../swapi-service-context';


export default class App extends Component {
  
 
  state = {
    showRandomPlanet: true,
    hasError: false,
    service: new SwapiService()
  }
  componentDidCatch () {
    this.setState({hasError: true})
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
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
    if ( this.state.hasError) return <ErrorIndicator />;
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :  null;
    
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.service}>
        <div className="stardb-app">
          <Header onServiceChange={this.onServiceChange}/>
          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={2} />

          <PersonList />        
          <PlanetList />
          <StarshipList />
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
  
}


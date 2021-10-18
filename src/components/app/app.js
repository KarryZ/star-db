import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails, {Record} from '../item-details';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../services/swapi-service';
import './app.css';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';




export default class App extends Component {
  swapiApi = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
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


  render() {
    if ( this.state.hasError) return <ErrorIndicator />;
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :  null;
    
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <PersonDetails itemId={11} />
          <PlanetDetails itemId={11} />
          <StarshipDetails itemId={11} />

          <PersonList />        
          <PlanetList />
          <StarshipList />
           

        </div>
      </ErrorBoundry>
    );
  }
  
}


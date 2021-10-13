import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/people-page';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import './app.css';



export default class App extends Component {
  swapiService = new SwapiService();

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
      <RandomPlanet/> :
      null;
    return (
      <div className="container">
        
        <Header/>        
        {planet}
        <div className="btns-container">
        <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>
        <PeoplePage />
        
        <div className="row mb2 mrgn-b-30">
            <div className="col-md-6">
              <ItemList onPersonSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets} >
                {(item) => `${item.name}`}
            </ItemList>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
        </div>

        <div className="row mb2 mrgn-b-30">
            <div className="col-md-6">
              <ItemList onPersonSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarShips} >
                {(item) => `${item.name}`}
            </ItemList>
            </div>
            <div className="col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
        </div>

      </div>
    )
  }
  
}


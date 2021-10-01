import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';


export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: 5
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  }

  onPersonSelected = (personId) => {
   this.setState({
     selectedPerson: personId
   })
  }

  render() {
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
    return (
      <div className="container">
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <Header/>        
        {planet}
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    )
  }
  
}


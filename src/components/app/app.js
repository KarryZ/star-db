import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemDetails, {Record} from '../item-details';
import Row from '../row';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import './app.css';



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
      <RandomPlanet/> :
      null;
      
    const {getPerson, getStarship, getPersonImage, getStarShipImage} = this.swapiApi;
    const personDetails = (
      <ItemDetails 
        itemId={4}
        getData={getPerson}
        getImageUrl={getPersonImage}>
          <Record label="Gender" field="gender"/> 
          <Record label="Eye Color" field="eyeColor"/> 
      </ItemDetails>
    );
    const starShipDetails = (
      <ItemDetails 
        itemId={12}
        getData={getStarship}
        getImageUrl={getStarShipImage}>
          <Record label="Model" field="model"/> 
          <Record label="Manufacturer" field="manufacturer"/> 
      </ItemDetails>
    );
    return (
      <div className="container">
        
        <Header/>        
        {/* {planet}
        <div className="btns-container">
        <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div> 
        <PeoplePage /> */}
      
       <Row left={personDetails} right={starShipDetails} />

      </div>
    )
  }
  
}


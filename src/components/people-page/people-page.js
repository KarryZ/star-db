import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry/error-boundry';
import './people-page.css';



export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 2
  }  

  onPersonSelected = (personId) => {
    this.setState({
      selectedPerson: personId
    })
  }

  render() {
    const itemList = (
      <ItemList onPersonSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople} >
          {(item) => `${item.name} ( ${item.birthYear} )`}
      </ItemList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (      
      <Row left={itemList} right={itemDetails} /> 
    );

  }
}


import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import './people-page.css';

const Row = ({ left, right }) => {
  return (
    <>
      <div className="row mb2 mrgn-b-30">
        <div className="col-md-6">
          {left}
        </div>
        <div className="col-md-6">
          {right}
        </div>
      </div>
    </>
  )
}

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 2,
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  onPersonSelected = (personId) => {
    this.setState({
      selectedPerson: personId
    })
  }

  render() {
    if (this.state.hasError) return <ErrorIndicator />;

    const itemList = (
      <ItemList onPersonSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`} />
    );

    const personDetails = <PersonDetails personId={this.state.selectedPerson} />

    return (
      <>
        <Row left={itemList} right={personDetails} />
        <Row left="Foo" right="Bar" />
      </>
    )
    
  }
}


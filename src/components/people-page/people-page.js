import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import './people-page.css';


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


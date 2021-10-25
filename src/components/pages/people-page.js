import React, {Component} from "react";
import Row from "../row";
import { PersonList, PersonDetails } from '../sw-components';

export default class PeoplePage extends Component {
 state= {
    selectedItem: 11
 }

 onSelectItem = (itemId) => {
    this.setState({selectedItem: itemId});
 }

 render() {
     const {selectedItem} = this.state;
    return (
        <Row 
            left={<PersonList onSelectItem={this.onSelectItem}/>} 
            right={<PersonDetails itemId={selectedItem} />} />
    );
 }

};
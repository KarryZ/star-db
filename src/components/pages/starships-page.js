import React, {Component} from "react";
import Row from "../row";
import { StarshipList, StarshipDetails } from '../sw-components';

export default class StarshipsPage extends Component {
 state= {
     selectedItem: 5
 }

 onSelectItem = (itemId) => {
    this.setState({selectedItem: itemId});
 }

 render() {
     const {selectedItem} = this.state;
    return (
        <Row 
            left={<StarshipList onSelectItem={this.onSelectItem} />} 
            right={<StarshipDetails itemId={selectedItem} />} />
    );
 }

};
import React, {Component} from "react";
import Row from "../row";
import { PlanetList, PlanetDetails } from '../sw-components';

export default class PlanetPage extends Component {
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
            left={<PlanetList onSelectItem={this.onSelectItem}/>} 
            right={<PlanetDetails itemId={selectedItem} />} />
    );
 }

};
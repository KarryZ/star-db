import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import './item-list.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    odata: null
  } 

  componentDidMount () {
    const {getData} = this.props;
    getData()
    .then((odata) => {
      this.setState({odata});
    })
  }

  renderItems (odata) {
    return odata.map( (item) => {
      const {id} = item;
      const label = this.props.children(item);
      return (
      <li className="list-group-item"
        key={id} 
       onClick={() => this.props.onPersonSelected(id)}>
        {label}
      </li>)
    })
  }

  render() {
    const { odata } = this.state;
    if (!odata) return <Spinner />;
    const items = this.renderItems(odata)
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
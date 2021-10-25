import React from "react";
import ItemDetails, {Record} from "../item-details";
import { WithSwapiService } from '../hoc-helpers';

const PlanetDetails = ( props ) => {
  return (      
    <ItemDetails {...props}>
        <Record label="Name" field="name"/> 
        <Record label="Population" field="population"/> 
        <Record label="Rotation Period" field="rotationPeriod" />
    </ItemDetails>          
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default WithSwapiService(mapMethodsToProps)(PlanetDetails);
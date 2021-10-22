import React from "react";
import ItemDetails, {Record} from "../item-details";
import { WithSwapiService } from '../hoc-helpers';


const StarshipDetails = ( props ) => {
  return (    
          
    <ItemDetails {...props}>
          <Record label="Model" field="model"/> 
          <Record label="Manufacturer" field="manufacturer"/> 
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarShipImage
  }
}

export default WithSwapiService(StarshipDetails, mapMethodsToProps);
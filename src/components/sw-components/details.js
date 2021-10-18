import React from "react";
import ItemDetails, {Record} from "../item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();
const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarShipImage
} = swapiService;


const PersonDetails = ( { itemId } ) => {
    return (
        <ItemDetails 
        itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage}>
          <Record label="Gender" field="gender"/> 
          <Record label="Eye Color" field="eyeColor"/> 
      </ItemDetails>
    );
};

const PlanetDetails = ( { itemId } ) => {
    return (
        <ItemDetails 
          itemId={12}
          getData={getPlanet}
          getImageUrl={getPlanetImage}>
            <Record label="Name" field="name"/> 
            <Record label="Population" field="population"/> 
            <Record label="Rotation Period" field="rotationPeriod" />
        </ItemDetails>
      );
};

const StarshipDetails = ( { itemId } ) => {
    return (
        <ItemDetails 
          itemId={12}
          getData={getStarship}
          getImageUrl={getStarShipImage}>
            <Record label="Model" field="model"/> 
            <Record label="Manufacturer" field="manufacturer"/> 
        </ItemDetails>
      );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};
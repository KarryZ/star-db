import React from "react";
import ItemList from "../item-list";
import { WithData, WithSwapiService } from "../hoc-helpers";

const WithChildrenFunc = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
};

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = WithSwapiService(
                    WithData( WithChildrenFunc(ItemList, renderName)),
                    mapPersonMethodsToProps );

const PlanetList = WithSwapiService(
                    WithData( WithChildrenFunc(ItemList, renderName) ), 
                        mapPlanetMethodsToProps );

const StarshipList = WithSwapiService(
                        WithData( WithChildrenFunc(ItemList, renderModelAndName) ),
                        mapStarshipMethodsToProps );

export {
    PersonList,
    PlanetList,
    StarshipList
};
import React from "react";
import ItemList from "../item-list";
import { WithData, WithSwapiService } from "../hoc-helpers";

const WithChildrenFunc = (fn) => (Wrapped) => {
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

const PersonList = WithSwapiService(mapPersonMethodsToProps)(
                        WithData( 
                            WithChildrenFunc(renderName)(ItemList) 
                        )
                );

const PlanetList = WithSwapiService(mapPlanetMethodsToProps)(
                    WithData( WithChildrenFunc(renderName)(ItemList) )
                );

const StarshipList = WithSwapiService( mapStarshipMethodsToProps) (
                        WithData( WithChildrenFunc(renderModelAndName)(ItemList) )
                    );

export {
    PersonList,
    PlanetList,
    StarshipList
};
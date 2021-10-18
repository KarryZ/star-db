import React from "react";
import ItemList from "../item-list";
import { WithData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();
const {
    getAllPeople,
    getAllPlanets,    
    getAllStarShips
} = swapiService;

const WithChildrenFunc = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
}

const ListWithChildren = WithChildrenFunc(
    ItemList,
    ({name}) => <span>{name}</span>
);

const renderName = ({name}) => <span>{name}</span>;
const renderModelAndName = ({name, model}) => <span>{name} ({model})</span>;

const PersonList = WithData(
                    WithChildrenFunc(ItemList, renderName), 
                    getAllPeople);

const PlanetList =  WithData(ListWithChildren, getAllPlanets);

const StarshipList =  WithData( 
                        WithChildrenFunc(ItemList, renderModelAndName), 
                        getAllStarShips);

export {
    PersonList,
    PlanetList,
    StarshipList
};
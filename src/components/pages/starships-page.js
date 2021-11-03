import React from "react";
import { StarshipList } from '../sw-components';
import { withRouter } from "react-router-dom";

 const StarshipsPage =  ({ history }) => {
 
 
    return (
    <StarshipList 
        onSelectItem={(itemId) => {
            history.push(`/starships/${itemId}`);
        }}/>
    );
};

export default withRouter(StarshipsPage);
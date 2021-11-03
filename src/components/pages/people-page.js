import React from "react";
import { PersonList, PersonDetails } from '../sw-components';
import { withRouter } from "react-router-dom";
import Row from "../row";

const PeoplePage = ({ history, match }) => {   
   const { id } = match.params;
    return (      
      <Row 
         left={<PersonList onSelectItem={(itemId) => history.push(itemId) }/>} 
         right={<PersonDetails itemId={id} />} />
    );
};

export default withRouter(PeoplePage);
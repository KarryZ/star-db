import React, { Component } from "react";

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const WithData = (View, getData) => {
    return class extends Component{
        state = {
          odata: null
        } 
      
        componentDidMount () {
          getData()
          .then((odata) => {
            this.setState({odata});
          })
        }

        render () {
            const { odata } = this.state;
            if (!odata) return <Spinner />;

            return <View {...this.props} data={odata} />;
        }

    }
};

export default WithData;
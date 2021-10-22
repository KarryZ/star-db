import React, { Component } from "react";
import Spinner from '../spinner';


const WithData = (View) => {
    return class extends Component{
        state = {
          odata: null
        } 
      
        componentDidMount () {
          this.props.getData()
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
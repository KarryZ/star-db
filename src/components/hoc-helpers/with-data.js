import React, { Component } from "react";
import Spinner from '../spinner';
import ErrorIndicator from "../error-indicator";


const WithData = (View) => {
    return class extends Component{
        state = {
          odata: null,
          loading: true,
          error: false
        } 
      
        componentDidMount () {
          this.updateData();
        }

        componentDidUpdate (prevProps) {
          if ( this.props.getData !== prevProps.getData ) {
            this.updateData();
          }
        }

        updateData () {
          this.setState({loading: true});
          this.props.getData()
          .then((odata) => {
            this.setState({
              odata,
              loading: false
            });
          })
          .catch(error => {
            this.setState({error: true, loading: false});
          })
        }

        render () {
            const { odata, loading, error } = this.state;
            if (loading) return <Spinner />;
            if(error) return <ErrorIndicator />;
            return <View {...this.props} data={odata} />;
        }

    }
};

export default WithData;
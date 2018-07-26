import React, {Component} from 'react';

export default class Errors extends Component{

    errorPassword = (errorPassword) => {
        this.props.errorPassword="Password don't match.  Please try again"
    }
    render(){
        return(
            this.props.errorPassword
        );
    }
}
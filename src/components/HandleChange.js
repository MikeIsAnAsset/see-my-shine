import React from 'react';

const changeHandler = (event, props) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value,
    });

    return props.changeHandler

}
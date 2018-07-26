import React from 'react';


const ValidateAfter= (email, password, passwordConfirm) => {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];

    if (email.length === 0) {
        errors.push("Name can't be empty");
    }

    if (email.length < 5) {
        errors.push("Email should be at least 5 charcters long");
    }
    if (email.split('').filter(x => x === '@').length !== 1) {
        errors.push("Email should contain a @");
    }
    if (email.indexOf('.') === -1) {
        errors.push("Email should contain at least one dot");
    }

    if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
    }

    if (!this.state.password === this.state.passwordConfirm) {
        errors.push("Passwords must match");

        return this.setState({
            password: '',
            passwordConfirm: ''
        })
    }

    return errors;
}

export default ValidateAfter;
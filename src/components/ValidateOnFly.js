import React from 'react';

const ValidateOnFly = (props) => {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];

    if (props.email.length === '') {
        errors.push("Name can't be empty");
    }

    if (props.email.length < 5) {
        errors.push("Email should be at least 5 charcters long");
    }
    if (props.email.split('').filter(x => x === '@').length !== 1) {
        errors.push("Email should contain a @");
    }
    if (props.email.indexOf('.') === -1) {
        errors.push("Email should contain at least one dot");
    }

    if (props.password.length < 6) {
        errors.push("Password should be at least 6 characters long");
    }

    if (!props.password === props.passwordConfirm) {
        errors.push("Passwords must match");
        props.password === '', props.passwordConfirm === '';
    }


    let displayerror = errors.map((error, index) => (
        <li key={index}>{error}</li>
    )



)

// if (errors.length = 0 )   
//     displayerror = null;

const space = <div className="customPad"></div>;
    return (
        <React.Fragment>
            {space}
            {displayerror}

        </React.Fragment>
     )
}

export default ValidateOnFly;
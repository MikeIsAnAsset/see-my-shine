import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
// import Redirect from 'react-router-dom';
import axios from 'axios';
// import { Route } from 'react-router-dom';
import Errors from './Errors';
import ReactDOM from 'react-dom';
import ValidateAfter from './ValidateAfter';
import ValidateOnFly from './ValidateOnFly';
import LoggedInBridge from './LoggedInBridge';
// import Header from '../Header/Header';
// import AboutUs from '../AboutUs/AboutUs';



class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            errors: [],
            SignInfo: [],
            redirect: false
        }
        this.signUpSubmitHandler = this.signUpSubmitHandler.bind(this);
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/UserWelcome.js' />
        }
    }







    
    clearPasswords = (passwords) => {
        this.setState({
            password: this.props.password,
            passwordConfirm: this.props.passwordConfirm
        })
    }


    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    signUpSubmitHandler = (event) => {
        event.preventDefault();  // hides the query stirng from being displayed on the browser
        // const email = ReactDOM.findDOMNode(this._emailInput).value;
        // const password = ReactDOM.findDOMNode(this._passwordInput).value;
        // const passwordConfirm = ReactDOM.findDOMNode(this._passwordConfirmInput).value;
        let user = null
        // const errors = ValidateAfter(email, password, passwordConfirm);

        // if (errors.length > 0) {
        //     this.setState({ errors });
        //     return;
        // }

        if (this.state.password === this.state.passwordConfirm) {

            user = {
                email: this.state.email,
                password: this.state.password
            };

            //Sending and receiving
            axios.post('http://localhost:8080/join', user)
                .then(response => {
                    console.log("user was created")
                    const loggedInUserFromBackEndSystem = response.data;
                    this.props.setLoggedInUser(loggedInUserFromBackEndSystem);
                    console.log('You SHOULD see something!')
                               console.log(loggedInUserFromBackEndSystem);
                }).catch(error => {
                    // add logic for displaying user name or password is invalid
                    console.log("this was an error");
                })

            // <Route path='/UserWelcome' exact component={UserWelcome}/>


            // if (this.props.loggedInUser) {
            //     { this.renderRedirect() }
            // }


            // //     // <Redirect to="/UserWelcome.js" />
            // <div onClick={this.props.history.push('/UserWelcome.js')}>
            // </div>
            




            // Receiving array
            // axios.post('http://localhost:8080/join', user)
            //     .then(response => {
            //         this.setState({
            //             // SignInfo: response.data
            //             // can also be const = repsonse.data
            //         })
            //     }).catch(error => {
            //         console.log("this was an error");
            //     })





        }

    }

    render() {
        const errors = this.state.errors;
        const validation = <ValidateOnFly email={this.state.email} password={this.state.password} passwordConfirm={this.state.passwordConfirm} />;

        // if (this.props.loggedInUser) {
        //     <Redirect to="/UserWelcome.js" />
        // }

        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* <LoggedInBridge loggedInUser setloggedInUser/> */}
                <form onSubmit={this.signUpSubmitHandler.bind(this)} class="container" style={{ marginTop: "150" }}>

                    {errors.map(error => (<p key={error}>Error: {error}</p>))}
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="email">Email</label>
                            <input onChange={this.changeHandler} name="email" value={this.state.email} type="email"
                                className="form-control" id="email" placeholder="Email"
                            // onBlur={validation} 
                            // onBlur=ValidateOnFly(email={this.state.email} password={this.state.password} passwordConfirm={this.state.passwordConfirm})
                            />

                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword">Password</label>
                            <input onBlur={validation} onChange={this.changeHandler} name="password" value={this.state.password} type="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword">Password</label>
                            <input onChange={this.changeHandler} name="passwordConfirm" value={this.state.passwordConfirm} type="password" className="form-control" id="inputPasswordConfirm" placeholder="Confirm Password" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        );
    }
}
export default SignUp;












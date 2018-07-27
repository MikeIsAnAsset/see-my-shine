import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
// import '../../_css/normalize.css';
import '../_css/base.css';
import SignUp from './SignUp';
// import '../../_css/font-awesome.css';


class Header extends Component {

    state = {
        email: '',
        password: ''
    }

    signInSubmitHandler = (event) => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:8080/login', user)
            .then(response => {
                const loggedInUserFromBackEndSystem = response.data;
                // this.props.setLoggedInUser(loggedInUserFromBackEndSystem);
                console.log(loggedInUserFromBackEndSystem);
            }).catch(error => {
                // add logic for displaying user name or password is invalid
            })
    }


    signInChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        })
    }



    render() {

        let links = null;
        let searchBarOrSignInField = null;
        if (this.props.loggedInUser !== null) {
            searchBarOrSignInField = (
                < form className="form-inline mt-2 mt-md-0" >
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <h2>Welcome {this.props.loggedInUser.email}!</h2>
                </form >
            )
            links = (
                // <React.Fragment classNamenp="navbar transparent navbar-inverse">
                <React.Fragment className="menubar">
                    <li className="nav-item active" className="navbar-inner">
                        <a className="nav-link navlink-space affix" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <br />{"      "}
                    <li className="nav-item">
                        <Link className="nav-link" to="/SearchContainer">I am logged IN!!!!!</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/settings">Settings</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-out">Sign Out</Link>
                    </li>
                </React.Fragment>
            )
        } else {
            searchBarOrSignInField = (
                <form onSubmit={this.signInSubmitHandler} className="navbar-form navbar-right">
                    <input onChange={this.signInChangeHandler} value={this.state.email} name="email" className="form-control mr-sm-2" type="text" placeholder="email" />
                    <input onChange={this.signInChangeHandler} value={this.state.password} name="password" className="form-control mr-sm-2" type="password" placeholder="password" />
                    <button className="btn btn-left::before btn-left::after btn-outline-success my-2 my-sm-0" type="submit">Submit



                    </button>
                </form>
            );
            links = (
                <React.Fragment>
                    {/* <a className="nav-item navbar-brand " href="/Home">
                        <h1 className="navbar logo">You. &nbsp; Me. &nbsp; Us.</h1>
                    </a> */}
                    <li className=" ">
                        <Link className="logo navlink-space" to="/"><h1 className="navbar logo">You. &nbsp; Me. &nbsp; Us.</h1></Link>
                    </li>
                    <li className="nav-item navlink-space">
                        <Link className="navbar navlink-space" to="/SearchContainer">Search jobs & companies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar navlink-space" to="/Home">News & Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar navlink-space" to="/SearchContainer">Entrepreneurs & Techies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar navlink-space" to="/Join" data-toggle="modal" data-target="#exampleModalCenter">JOIN</Link>
                    </li>
                    <li className="nav-item">
                        {/* <Link className="navbar navlink-space" onClick={this.showModal} to="/SignUp" data-toggle="modal" data-target="#exampleModalCenter">SIGNUP</Link> */}
                        <Link className="navbar navlink-space" to="/SignUp" component={SignUp} >SIGNUP</Link>

                    </li>
       




                    <li className="navbar nav-item navlink-space">|</li>
                    <li className="nav-item">
                        <Link className="navbar navlink-space" to="/sign-up">LOGIN</Link>
                    </li>
                </React.Fragment>
            );


        }
        return (
            <div>

                {/* <div className="jumbotron" id="FixMyJumbo" >
                    <div className="container" id="FixMyJumbo" >
                        <h1 className="display-3">This is about us!</h1>
                        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                    </div>
                </div> */}


                <div className="menubar navbar-fixed-top">
                    {/* <a className="navbar navbar-brand " href="/Home">
                        <h1 className=" navbar logo">You. &nbsp; Me . &nbsp; Us.</h1>
                    </a> */}
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            {links}

                        </ul>
                        {searchBarOrSignInField}

                    </div>
                </div >



                {/* <div className="menubar">
                    <div className="container">
                        <div className="btn i.icon-camera btn i[class^='icon-'] back back::before back::before btn  btn::before btn::after .btn-left::before  btn-left::after btn-right::before btn-right::after">
                            <div className="back"></div>
                            <i></i>
                        </div>
                        <h1 className="h1">Shoon</h1>
                        <div className="btn btn-right btn::before btn::after .btn-left::before  btn-left::after btn-right::before btn-right::after">
                            <i></i>
                        </div>
                    </div>
                </div> */}










            </div>
        );
    }

}

export default Header;
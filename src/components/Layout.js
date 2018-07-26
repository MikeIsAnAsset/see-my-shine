import React, { Component } from 'react';
import Header from '../components/Header';
import { Route } from 'react-router-dom';
// import AboutUs from '../AboutUs/AboutUs';
// import SignUp from '../SignUp/SignUp';
import Home from './../components/Home';
import SearchContainer from './../components/SearchContainer';
import Join from './../components/Join';
import SignUp from './SignUp';
import UserWelcome from './../components/UserWelcome';

class Layout extends Component {

    state = {
        loggedInUser: null
    }

    // This function is used to update the root component's state by adding the logged in user to the layout component
    setLoggedInUser = (user) => {
        this.setState({
            loggedInUser: user
        })
    }

    render() {
        let routes = (

            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route exact path="/SearchContainer" component={SearchContainer} />
                <Route exact path='/UserWelcome' component={UserWelcome} />
                {/* <Route exact path="/Join" component={Join} /> */}
                <Route exact path="/SignUp" component={SignUp} />
            </React.Fragment>

        )
        // if (this.state.loggedInUser) {
        //     routes = (
        //         <React.Fragment>
        //             <Route exact path="/" component={Home} />
        //             <Route exact path="/SearchContainer" component={SearchContainer} />
        //             <Route exact path='/UserWelcome' component={UserWelcome} />
        //             {/* <Route exact path="/about-us" component={AboutUs} />
        //             <Route exact path="/" component={Home} /> */}
        //             {/* <Route exact path="/settings" component={Settings} /> */}
        //         </React.Fragment>
        //     )
        // }
        const signup = <SignUp loggedInUser={this.state.loggedInUser} setLoggedInUser={this.setLoggedInUser}></SignUp>

        return (
            <React.Fragment>

                <Header loggedInUser={this.state.loggedInUser} setLoggedInUser={this.setLoggedInUser}></Header>

                {routes}
            </React.Fragment>
        );
    }


}

export default Layout;
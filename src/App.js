import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Home from './components/Home';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Layout />
            {/* <Home /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

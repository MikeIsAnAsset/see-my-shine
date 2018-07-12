import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Demo from './components/Demo';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Demo />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

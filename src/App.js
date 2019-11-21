import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navigation} from './components/Navigation.js';

class App extends Component {
  render() {
    return (
      //React solo puede renderizar una etiqueta -> debemos contener todo en un div
      //<h1 className="display-1"> TITULO CON BOOTSTRAP </h1>
      <div className="App">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;

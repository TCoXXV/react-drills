import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NewComponent />
      </div>
    );
  }
}

export default App;

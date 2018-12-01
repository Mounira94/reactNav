import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Main from './Components/Main';
import Contact from'./Components/Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>

    );
  }
}

export default App;

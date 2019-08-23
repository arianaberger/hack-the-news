import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import logo from './logo.svg';


class App extends Component {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <h3>Hack the News</h3>
      <p>Search for news using keywords with the search functionality below:</p>

      <Search />

    </div>
  );
}

export default App;

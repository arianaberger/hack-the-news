import React from 'react';
import './App.css';
import Search from './Search';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Hack the News</h3>
      <p>Search for news using keywords with the search functionality below:</p>
        <Search />
        <hr />
        <a
          className="App-link"
          href="https://hn.algolia.com/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Link
        </a>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Search />

        <a
          className="App-link"
          href="https://hn.algolia.com/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Link
        </a>
      </header>
    </div>
  );
}

export default App;

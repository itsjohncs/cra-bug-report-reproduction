import React from 'react';
import logo from './logo.svg';
import './App.css';

import foo from "./foo";
function baz(a: string): number {
  // This line should error (returning a string from a function that expects
  // to return a number). It will only error if you rename `bar.js` to
  // `bar.ts`.
  return a;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

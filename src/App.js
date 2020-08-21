import React from 'react';

import logo from './assets/image/logo.svg';
import './assets/css/App.css';
import './assets/css/table.css';
import './assets/css/form.css';

import HelloWorld from './components/HelloWorld';
import HelloUniverse from './components/HelloUniverse';
import HelloImmutable from './components/ImmutableExamples/HelloImmutable';
import StatefulComponent from './components/StatefulComponent';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
       <h2>Todo Example</h2>
      <Todo />
    </div>
  );
}

export default App;

import mama from './mama.gif';
import './App.css';
import React from 'react';
import AdventuresContainer from './containers/AdventuresContainer'

const App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mama} className="App-logo" alt="logo" />
      
       <AdventuresContainer />
      </header>
    </div>
  );
}

export default App;

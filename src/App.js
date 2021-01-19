
import './App.css';
import React from 'react';
import Main from './components/Main'
import NavBar from './components/NavBar'
import AdventuresContainer from './containers/AdventuresContainer';

const App = () =>  {
  return (
    <div className="App">
      <NavBar />
       <Main />
      
      <AdventuresContainer />
    </div>
  );
}

export default App;

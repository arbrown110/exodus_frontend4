
import './App.css';
import React from 'react';
import Main from './components/Main'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
//import AdventuresContainer from './containers/AdventuresContainer';

const App = () =>  {
  return (
    <div className="App">
      
       <Main />
      
      {/* <AdventuresContainer /> */}
    </div>
  );
}


const mapStateToProps = state => {
  return {

      adventures: state.adventures
  }
}

// export default App;
export default withRouter(connect(mapStateToProps, {})(App));
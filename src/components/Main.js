import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Home from '../components/home'
import About from '../components/about'
// import AdventuresList from '../components/AdventuresList'
// import AdventureShow from '../components/AdventureShow'
import Links from '../components/links'
import Contacts from '../components/contacts'
import AdventuresContainer from '../containers/AdventuresContainer';
import EventsContainer from '../containers/EventsContainer';
import AdventuresList from './AdventuresList';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route path='/adventures' component={AdventuresContainer} />
                <Route path='/adventures/:id'component={AdventuresList} />
                 <Route path='/adventures/:adventure_id/events' component={EventsContainer} /> 
               {/* <Route path='/adventures/:adventure_id/events' render={(routerProps) => <EventsContainer {...routerProps} adventures={this.props.adventures} />} />*/}
                <Route exact path='/links' component={Links} />
                <Route exact path='/contacts' component={Contacts} />
            </Switch>
        </div>
        
    );
};

export default Main;
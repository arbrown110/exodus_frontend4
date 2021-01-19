import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../components/home'
import About from '../components/about'
import AdventuresList from '../components/AdventuresList'
import Links from '../components/links'
import Contacts from '../components/contacts'

const Main = () => {
    return (
        
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/Adventures' component={AdventuresList} />
            <Route exact path='/links' component={Links} />
            <Route exact path='/contacts' component={Contacts} />
        </Switch>
        
    );
};

export default Main;
//this will house data and method around adventure's domain form will be mounted

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAdventures } from '../actions/AdventuresActions'
import AdventureForm from '../components/adventureForm'

class AdventuresContainer extends Component {
    componentDidMount(){
        this.props.fetchAdventures()
    }

    render() {
        return (
            <div>
                Adventures Container
                <br></br>
                <AdventureForm />
            </div>
        );
    }
}

export default connect(null, { fetchAdventures })(AdventuresContainer);


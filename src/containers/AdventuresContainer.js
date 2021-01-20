//this will house data and method around adventure's domain form will be mounted

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAdventures } from '../actions/AdventuresActions'
import AdventureForm from '../components/adventureForm'
import AdventuresList from '../components/AdventuresList';


class AdventuresContainer extends Component {
    componentDidMount(){
        this.props.fetchAdventures()
    }

    render() {
        return (
            <div>
              
                <AdventuresList adventures={this.props.adventures && this.props.adventures.events}/>
                <br></br>
               
                <AdventureForm />
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        adventures: state.adventures
    }
}

export default connect(mapStateToProps, { fetchAdventures })(AdventuresContainer);


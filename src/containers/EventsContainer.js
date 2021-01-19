import React, { Component } from 'react';

import EventForm from '../components/eventForm'
import EventsList from '../components/EventsList';

class EventsContainer extends Component {

    render() {
        return (
            <div>
              
                <EventsList events={this.props.adventure && this.props.adventures.events} />
                <br></br>
               
                <EventForm adventure={this.props.adventure} />
            </div>
        );
    }
}

export default EventsContainer;
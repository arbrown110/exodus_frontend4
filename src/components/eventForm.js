import React, { Component  } from 'react';
import { addEvent } from '../actions/EventActions'
import { connect} from 'react-redux'

class EventForm extends Component {

    state = {
        title: '',
        decription: '',
        krio: ''
    };

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        e.preventDefault()
        this.props.addAdventure(this.state, this.props.adventure.id);
        this.setState({
            title: '',
            description: '',
            krio: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>New Event</h4>
                <label>Title:</label>
                <input type='text' value={this.state.title} onChange={this.handleChange} name='title'/>
                <br/>

                <label>Description:</label>
                <input type='text' value={this.state.description} onChange={this.handleChange} name='description'/>
                <br/>
                <label>What would you say?:</label>
                <input type='text' value={this.state.krio} onChange={this.handleChange} name='krio'/>
                <br/>
                <input type='submit' value='Add event' />


            </form>
        );
    }
}

export default connect(null, { addEvent })(EventForm);
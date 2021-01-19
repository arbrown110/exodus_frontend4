import React, { Component  } from 'react';

class AdventureForm extends Component {

    state = {
        name: "",
        image_url: ""
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
                <br/>

                <label>Image:</label>
                <input type='text' value={this.state.image_url} onChange={this.handleChange} name='image_url'/>
                <br/>
                <input type='submit' value='Create Entry' />


            </form>
        );
    }
}

export default AdventureForm;

//storestate == redux store it's global  localstate == component state is isolate to that component only
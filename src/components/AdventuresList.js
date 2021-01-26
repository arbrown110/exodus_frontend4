import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const AdventuresList = props => {
    debugger;
    return (
        <div>
            <Link to='/adventures/new' className= 'NewAdventure' role= 'button'>Add Adventure</Link>
            
            <h3>Topics to talk about :</h3>
            {props.adventures && props.adventures.map(adventure => 
                <Link key={adventure.id} to={`/adventures/${adventure.id}/events`}>
                    <li >
                        <div>{adventure.name}</div>
                        <br>
                        </br>
                        <br></br>
                         <div>{adventure.image_url}</div>
                    </li>
                </Link>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {

        adventures: state.adventures
    }
}

export default withRouter(connect(mapStateToProps)(AdventuresList));


/// how can I make it better?
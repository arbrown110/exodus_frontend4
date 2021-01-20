import React from 'react';
import { Link } from 'react-router-dom'

const AdventuresList = props => {
    return (
        <div>
            <Link to='/adventures/new' className= 'NewAdventure' role= 'button'>Add Adventure</Link>
            
            <h3>Topics to talk about :</h3>
            {props.adventures.map(adventure => 
                <ul key={adventure.id} to={`/adventures/${adventure.id}`}>
                    <li >
                        {adventure.name}
                        <br>
                        </br>
                        <br></br>
                        {adventure.image_url} 
                    </li>
                </ul>
        )}
        </div>
    );
};

// const mapStateToProps = state => {
//     return { adventures: state.adventures }
// }

export default AdventuresList;


/// how can I make it better?
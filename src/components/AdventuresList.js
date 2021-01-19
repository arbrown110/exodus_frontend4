import React from 'react';
import { connect } from 'react-redux'

const AdventuresList = ({ adventures }) => {
    return (
        <div>
            <h1>Topics to talk about :</h1>
            {adventures.map(adventure => 
                <ul key={adventure.id}>
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

const mapStateToProps = state => {
    return { adventures: state.adventures }
}

export default connect(mapStateToProps)(AdventuresList);
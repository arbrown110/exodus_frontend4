import React from 'react';
import { connect } from 'react-redux';
import EventsContainer from '../containers/EventsContainer';
import { deleteAdventure } from '../actions/AdventuresActions';


const AdventureShow = props => {

  let adventure = props.adventures.filter(adventure => adventure.id === props.match.params.id)[0];

  const handleDelete = () => {
    props.deleteAdventure(adventure.id);
    const path = `/adventures`;
    props.history.push(path);
  };


  return (
        
    <div>
        {props.events && props.events.map(event => 
            <div className="adventure" key={adventure.id} id={adventure.id}>
                 <h3 >{adventure.name}</h3>
                
                {adventure.image_url}
                
                 
                 <button onClick={()=> handleDelete(event)}>Delete</button>
                 <EventsContainer adventure={adventure} />
            </div>
           
        )}
    </div>
  );
};

export default connect(null, { deleteAdventure })(AdventureShow);

//   <Card className = 'AdventureShow'>
// <h3>{adventure && adventure.name} </h3>
// <CardImg className='adventureImage' src={adventure && adventure.image_url} alt={adventure && adventure.name} /><br></br><br></br>

// <Button onClick={handleDelete} className='DeleteButton'>Delete adventure</Button>


// <EventsContainer adventure={adventure} />
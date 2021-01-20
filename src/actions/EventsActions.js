export const addEvent = (activity, adventureId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/adventures/${adventureId}/events`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(activity)
      })
      .then(res => res.json())
      .then(adventure => {
        dispatch({type: 'ADD_EVENT', payload: adventure})
      })
    };
};

  // deleting events
export const deleteEvent = (eventId, adventureId) => {
    return (dispatch) => {
      fetch(`http://localhost:3000/adventures/${adventureId}/events/${eventId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(adventure =>
        dispatch({type: 'DELETE_EVENT', payload: adventure})
      )
    };
};
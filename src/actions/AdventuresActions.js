// creating an action that is going to fetch the adventures from api 

export const fetchAdventures = () => {
    return (dispatch) => {
        fetch("/adventures")
        .then(resp => resp.json())
        .then(adventures => dispatch({ type: 'FETCH_ADVENTURES', payload: adventures}))
    };
};

export const addAdventure = (adventure) => {
    return (dispatch) => {
        fetch("/adventures", {
            method: 'POST',
            body: JSON.stringify(adventure),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(adventure => dispatch({ type: 'ADD_ADVENTURE', payload: adventure}))
    }
}

export const deleteAdventure = adventureId => {
    return (dispatch) => {
      fetch(`/adventures/${adventureId}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(adventure => {
        dispatch({type: 'DELETE_ADVENTURE', payload: adventure.id})
      })
    };
  };
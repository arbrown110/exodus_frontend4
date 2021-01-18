export const adventuresReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ADVENTURES':
            return action.playload
        default:
            return state    
    }
}










///return action.playload will return the data that you are passing
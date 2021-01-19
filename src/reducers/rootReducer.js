import { combineReducers } from 'redux'
import { adventuresReducer } from './reducers/adventuresReducer'
//import { eventsReducer} from './eventsReducer'

const rootReducer = combineReducers({
    adventures: adventuresReducer
    //events: eventsReducer
})

export default rootReducer
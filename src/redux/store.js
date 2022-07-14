import {createStore , applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import elsplReducer from './reducer'

const rootReducer = combineReducers({elsplReducer});

export const Store = createStore(rootReducer , applyMiddleware(thunk));


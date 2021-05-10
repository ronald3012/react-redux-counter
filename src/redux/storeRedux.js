import {createStore, combineReducers} from 'redux';
import CounterReducer from '../reducers/CounterReducer';
import logsReducer from '../reducers/losgReducer';

const reducers = combineReducers({
    counter:CounterReducer, 
    logs:logsReducer
});  

export const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


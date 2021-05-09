import {createStore, combineReducers} from 'redux';
import CounterReducer from '../reducers/CounterReducer';

const reducers = combineReducers({
    counter:CounterReducer, 
});  

export const store = createStore(reducers);


import { types } from '../types/types';

const CounterReducer = (state = {counter:0},action) => {

    switch (action.type) {
        case types.increment: 
            return {counter: state.counter+action.payload.amount};

        case types.decrement:            
            return {counter: state.counter-action.payload.amount}; 
                     
        default:
            return state;
    }
}


export default CounterReducer;
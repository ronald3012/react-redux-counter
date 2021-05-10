import { types } from '../types/types';

const logsReducer = (state = [],action) => {

    switch (action.type) {
        case types.addLog: 
            return [
                {  amount: action.payload.amount,
                   descripcion: action.payload.description,
                   label: action.payload.label,
                   id:action.payload.id,
                },...state
            ];
          
        default:
            return state;
    }
}


export default logsReducer;
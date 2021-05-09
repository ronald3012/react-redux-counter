import { types } from '../types/types'

export const incrementCounter = (amount)=>({
        type: types.increment,
        payload:{
            amount: amount
        }
})


export const decrementCounter = (amount)=> ({
        type: types.decrement,
        payload:{
            amount: amount
        }
})

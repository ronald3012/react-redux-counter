import { types } from '../types/types'

export const addLog = (amount,description, label)=>({
        type: types.addLog,
        payload:{
            amount,
            description,
            label,
            id: Math.round(Math.random()*1000)
        }
})
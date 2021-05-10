import {useDispatch, useSelector} from 'react-redux';
import {incrementCounter,decrementCounter} from '../actions/counterActions';
import { addLog } from '../actions/logsActions';


const CounterView = ()=>{

    const {counter:{counter}} =  useSelector((store)=>store);
    const dispatch = useDispatch();

    const handleToIncrement = (e, amount = 10)=>{
        dispatch(incrementCounter(amount)); 
        dispatch(addLog(amount,`They have been added to the counter`, '+')); 
    }

    const handleToDecrement = (e, amount = 10)=>{
        dispatch(decrementCounter(amount));
        dispatch(addLog(amount,`They were subtracted from the counter`, '-')
        ); 
    }

    return(
        <>
            <h1>COUNTER</h1>
            <div className="counter">
                <button onClick={handleToDecrement}>Decrement -10</button>
                <p>{counter}</p>
                <button onClick={handleToIncrement}>Increment +10</button>
            </div>
        </>
    )
};

CounterView.prototype = {

}


export default CounterView;
import {useDispatch, useSelector} from 'react-redux';
import {incrementCounter,decrementCounter} from '../actions/counterActions';


const CounterView = ()=>{

    const {counter:{counter}} =  useSelector((store)=>store);
    const dispatch = useDispatch();

    const handleToIncrement = ()=>{
        dispatch(incrementCounter(10)); 
    }

    const handleToDecrement = ()=>{
        dispatch(decrementCounter(10))
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
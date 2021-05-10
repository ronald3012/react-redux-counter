import {useSelector} from 'react-redux';

const LogsView = () => {

    const {logs} =  useSelector((store)=>store);

    return (
        <div className="logs">
            <p>Actions log</p>
            <ul>
                {
                    logs.length === 0 &&  <li style={{textAlign:"center"}}>No actions have been taken yet ⏳ </li> 
                }
                {
                    logs.map(({descripcion,label, amount, id})=>
                        (
                            <li key={id}>{descripcion}<span className={label=== '-' ? 'decrement':''}>{label} {amount}</span></li>
                        )
                    )
                }
            </ul>
            
        </div>
    )
}

export default LogsView;

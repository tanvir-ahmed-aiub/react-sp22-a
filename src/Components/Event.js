import {useState} from 'react';
import axios from 'axios';

const Event=()=>{
    const [counter,setCounter]=useState("");
    function calc(){
        setCounter(counter+1);
    }

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={calc}>Calc</button>
        </div>
    )
}
export default Event;
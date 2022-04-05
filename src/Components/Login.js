import {useState} from 'react';
import axios from 'axios';
const Login=()=>{
    const [uname,setUname] = useState("");
    const [password,setPass] = useState("");
    const handleForm=(event)=>{
        event.preventDefault();
        var credentials = {username:uname,pass:password};
        axios.post("http://localhost:8000/api/login",credentials).then(function(rsp){
            debugger;
        },function(err){});
        
    }
    return(
        <form onSubmit={handleForm}>
            Username: <input type="text" onChange={function(event){setUname(event.target.value);}} value={uname}></input><br/>
            Password: <input type="password" value={password}onChange={(event)=>{setPass(event.target.value)}}></input> <br/>
            <input type="submit"></input>
        </form>
    )
}
export default Login;
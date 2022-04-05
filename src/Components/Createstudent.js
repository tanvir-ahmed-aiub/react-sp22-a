import { useState } from "react";
import axios from "axios";
import Product from "./Product";
const Createstudent=()=>{
    const [name,setName] = useState("");
    const [dob,setDob]= useState("");
    const [id,setId] = useState("");
    const [msg,setMsg] = useState("");

    const handleForm=(e)=>{
        e.preventDefault();
        var st={name:name,dob:dob,st_id:id};
        debugger;
        axios.post("http://localhost:8000/api/student/add",st).then((rsp)=>{
            //setMsg(rsp.data.msg);
            //return <Product></Product>
            window.location.href="/";
        },(err)=>{
            
        });
    }

    return(
        <form onSubmit={handleForm}>
            Name : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} ></input><br/>
            Dob : <input type="text" value={dob} onChange={(e)=>{setDob(e.target.value)}} ></input><br/>
            Student Id : <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} ></input><br/>
            <input type="submit" value="Create"></input>

            <span>{msg}</span>
        </form>
    )
}
export default Createstudent;
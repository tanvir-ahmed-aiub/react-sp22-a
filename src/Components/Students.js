import axios from 'axios';
import  {useState,useEffect} from 'react';
import Student from './Student';

const Students=()=>{

    const [students,setStudents] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/student/all").then((rsp)=>{
            setStudents(rsp.data);
        },(err)=>{});
    },[]);

    return (
        <div class="row">
            {
                students.map(st=>(
                <Student Name={st.name} Dob={st.dob} UId={st.userid}/>
                ))
            }
        </div>
        
    )
}
export default Students;
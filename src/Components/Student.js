const Student=(props)=>{
    return(
        <div class="card" style={{width: "18rem;"}}>
            <img class="card-img-top" style={{width:"200px"}} src="https://webdamn.com/demo/forum-php-mysql-demo/images/user-avatar.png" alt="Card image cap"/>
            <div className="card-body">
                <span>{props.Name} &nbsp; {props.Dob} &nbsp; {props.UId}</span>
            </div>
        </div>
    )
}
export default Student;
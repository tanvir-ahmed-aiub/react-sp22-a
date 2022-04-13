import {Link}  from 'react-router-dom';
const Header=()=>{
    return (
        <div>
            
            

            <Link class="btn btn-primary" to="/">Home</Link>
            <Link class="btn btn-success" to="/login">Login</Link>
            <Link class="btn btn-danger" to="/event">Event Handling</Link>
            <Link class="btn btn-info" to="/post">Post</Link>
            <Link class="btn btn-warning" to="/add">Add Student</Link>
            <Link class="btn btn-secondary" to="/students">Students</Link>
        </div>

    );
};
export default Header;



import axios from 'axios';
import {useState,useEffect} from 'react';
const Post=()=>{

    const [post,setPost] = useState({});
    useEffect(function(){
        axios.get("https://jsonplaceholder.typicode.com/posts/2").then(function(rsp){
            setPost(rsp.data);
        },function(err){

        });
    },[]);

    return(
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )

}

export default Post;
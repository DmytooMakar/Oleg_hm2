import React, { useEffect, useState } from "react";
import { useParams, } from "react-router-dom";
import {Table} from "react-bootstrap";
import SingleUserPosts from "./SingleUserPosts";


function UserAndItsPosts() {
    let { userIdAndPosts } = useParams();
    const [user, setUser] = useState({});
    const [posts, setPosts] =useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/' + userIdAndPosts)
        .then(res => res.json())
        .then(data =>setUser(data));
    }, [userIdAndPosts]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json())
        .then(data => setPosts(data.filter(post => post.userId == userIdAndPosts)));
    }, []);   
    console.log(posts)

    return (
    <Table striped bordered hover>  
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User name</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{'Street: ' + user.address?.street + ' City: ' +user.address?.city}</td>
            </tr>
        </tbody>
        <thead>
            <tr>
                <th>Id</th>
                <th>User Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Link for post</th>
            </tr>
        </thead>
        {posts.map(post => <SingleUserPosts key={post.id} post={post} />)}
    </Table>       
    )
}

export default UserAndItsPosts
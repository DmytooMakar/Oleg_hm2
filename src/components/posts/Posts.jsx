import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap"
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data.map(post => {
        return { 
            id: post.id,
            title: post.title,
            body: post.body
        }})))
    }, [])
    // console.log(posts)
    
    

    return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>User link</th>
            </tr>
        </thead>
        {posts.map(post => <Post key={post.id} post={post} />)}
    </Table>
    )
}

export default Posts
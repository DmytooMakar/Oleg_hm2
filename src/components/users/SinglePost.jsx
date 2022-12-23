import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Table} from "react-bootstrap"

function SinglePost() {
    let { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
        .then(res => res.json())
        .then(data =>setPost(data))
    }, [postId])
    console.log(post)
    return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr>
    </tbody>
    </Table>
    )
}

export default SinglePost
import React from "react";
import { Link } from "react-router-dom";

function SingleUserPosts({post}) {
    return (
    <tbody>
    <tr>
        <td>{post.id}</td>
        <td>{post.userId}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td><Link to={`/posts/${post.id}`}>Link post</Link></td>
    </tr>
    </tbody>
    ) 
}

export default SingleUserPosts
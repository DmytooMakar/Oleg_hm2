import React from "react";

function SingleUserPosts({post, userIdAndPosts}) {
    return (
    <tbody>
    <tr>
        <td>{post.id}</td>
        <td>{post.userId === userIdAndPosts?post.userId:''}</td>
        <td>{post.title}</td>
        <td colSpan={3}>{post.body}</td>
    </tr>
    </tbody>
    ) 
}

export default SingleUserPosts
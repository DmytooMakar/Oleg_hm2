import React from "react";
import {Link} from "react-router-dom"

function Post({post}) {
    return <tbody>
    <tr>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td><Link to={`/user/${post.id}`}>User Info</Link></td>
    </tr>
</tbody>
}

export default Post
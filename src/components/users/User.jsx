import React from "react";
import { Link } from "react-router-dom";

function User({user}) {
    return <>
        <tbody>
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td><Link to={`/post/${user.id}`}>Post Info</Link></td>
            </tr>
        </tbody>
    </>
}

export default User
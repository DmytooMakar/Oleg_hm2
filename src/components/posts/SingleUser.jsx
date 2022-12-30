import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

function SingleUser() {
    let { userId } = useParams();
    const [user, setUser] = useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(res => res.json())
        .then(data =>setUser(data))
    }, [userId])
    console.log(userId)
    
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
        </Table>
    ) 
    
    
}

export default SingleUser
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import User from "./User";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data.map(user => {
            return {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                address: 'City: '+user.address.city +' Street: '+ user.address.street
        }})))
    }, [])
    // console.log(users)
     


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>post link</th>
                </tr>
            </thead>
            {users.map(user => <User key={user.id} user={user}/>)}
        </Table>
    )
}

export default Users
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    const fetchingData = async () => {
        try {
            const response = await fetch("https://reqres.in/api/users?page=2");
            const data = await response.json();
            setUsers(data.data);
        }
        catch(error){
            console.log(error);
        }

    }

    useEffect(() => {
        fetchingData();
    }, [])

  return (
    <>
        <h1>Users Page</h1>
        {
            users.map((user) => {
                return ( <div key={user.id} style={{border: "1px solid black", margin: "10px"}}>
                    <img src={user.avatar} alt={"profile image"} />
                    <Link to={`${user.id}`}>{user.first_name}</Link>
                </div> )
            })
        }
    </>
    
  )
}

export default Users
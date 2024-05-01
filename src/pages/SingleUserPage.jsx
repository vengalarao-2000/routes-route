import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleUserPage = () => {
    

    const[user, setUser] = useState({});

    const params = useParams();

    const fetchUser = async () => {
        try {
            const response = await fetch(`https://reqres.in/api/users/${params.id}`);
            const data = await response.json();
            console.log(data);
            setUser(data);
        }
        catch(error){
            console.log(error);
        }

    }

    useEffect(() => {
        fetchUser();
    }, [params.id]);

  return (
    <div>
        <img src={user?.data?.avatar} alt='profile' />
        <p>{user?.data?.first_name}</p>
        <Link to="/users">Go back</Link>
    </div>
  )
}

export default SingleUserPage
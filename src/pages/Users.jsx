import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';

const getCurrentPage = (pageNumber) => {
    pageNumber = Number(pageNumber);
    if(!pageNumber){
        pageNumber = 1;
    }
    return pageNumber;
}

const Users = () => {

    const [users, setUsers] = useState([]);
    const {isAuth} = useContext(AuthContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const initialPage = getCurrentPage(searchParams.get("page"));
    const navigate = useNavigate();
    const [page, setPage] = useState(initialPage);

    

    const fetchingData = async (page) => {
        try {
            const response = await fetch(`https://reqres.in/api/users?page=${page}`);
            const data = await response.json();
            setUsers(data.data);
        }
        catch(error){
            console.log(error);
        }

    }

    useEffect(() => {
        fetchingData(page);
    }, [page])

    useEffect(() => {
        setSearchParams({page});
    }, [page])

    const handlePageChange = (value) => {
        setPage(prevValue => prevValue + value)
    }

    if(!isAuth){
        return (
            <Navigate to="/login" />
        )
    }

  return (
    <>
        <h1>Users Page</h1>
        <button onClick={() => navigate('/')}>To HomePage using useNaviagte hook</button>
        <Link to='/'>
            <button>To HomePage using Link</button>
        </Link>
        
        {
            users.map((user) => {
                return ( <div key={user.id} style={{border: "1px solid black", margin: "10px"}}>
                    <img src={user.avatar} alt={"profile image"} />
                    <Link to={`${user.id}`}>{user.first_name}</Link>
                </div> )
            })
        }

        <button onClick={() => handlePageChange(-1)}>Previous</button>
        <button onClick={() => handlePageChange(1)}>Next</button>
    </>
    
  )
}

export default Users
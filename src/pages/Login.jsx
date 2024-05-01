import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Navigate } from 'react-router-dom';

const Login = () => {

    const {isAuth, login} = useContext(AuthContext);

    if(isAuth) {
        return <Navigate to='/users' />
    }

  return (

    <div>
        <button disabled={isAuth} onClick={() => login()}>Login</button>
    </div>
  )
}

export default Login
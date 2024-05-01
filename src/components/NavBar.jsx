import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.module.css';
import { AuthContext } from '../context/AuthContextProvider';

//We'll get the routeinfo from backend so using this array as we don't have backend
const routes = [
    {
        path: "/",
        text: 'Home'
    },
    {
        path: "/about",
        text: 'About'
    },
    {
        path: "/cart",
        text: 'Cart'
    },
    {
        path: "/users",
        text: 'Users'
    }
]
const NavBar = () => {

    const {isAuth, logout} = useContext(AuthContext);

    const defaultStyle = {
        color: 'black',
        backgroundColor: 'white'
    }
    const activeStyle = {
        color: 'green',
        backgroundColor: 'white'
    }
  return (
    <div style={{display: "flex", alignItems:"center", justifyContent:"space-around", gap:"10px"}}>
        {
            routes.map((link) => {
                //Use below if you want to use style without module.css
                // style={({isActive}) => {
                //     return isActive ? activeStyle : defaultStyle
                // }}

                //With module.css is not working. My doubt is if we can access isActive in className attribute?
                // className = {({isActive}) => {
                //     return isActive ? styles.activeStyle : styles.defaultStyle
                // }}
                return <NavLink to={link.path} key={link.path} className = {({isActive}) => {
                     return isActive ? styles.activeStyle : styles.defaultStyle
                 }}>{link.text}</NavLink>
            })
        }
        <p>User Logged In: {isAuth ? "Yes": "No"}</p>
        {isAuth && <button onClick={() => logout()}>Logout</button>}
    </div>
  )
}

export default NavBar
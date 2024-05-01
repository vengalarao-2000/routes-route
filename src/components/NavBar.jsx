import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.module.css';

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
    const defaultStyle = {
        color: 'black',
        backgroundColor: 'white'
    }
    const activeStyle = {
        color: 'green',
        backgroundColor: 'white'
    }
  return (
    <div style={{display: "flex", gap:"10px"}}>
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
                return <NavLink to={link.path} key={link.path} style={({isActive}) => {
                    return isActive ? activeStyle : defaultStyle
                }}>{link.text}</NavLink>
            })
        }
    </div>
  )
}

export default NavBar
import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../context/authContext";
import Links from "./Links";

const NavBar = () => {
    const auth = useContext(AuthContext)
    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
    }
    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
                <span href="#" className="brand-logo">Лого</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <Links roles={auth.roles}/>
                    <li><NavLink to={'/'} onClick={logoutHandler}>Вийти</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
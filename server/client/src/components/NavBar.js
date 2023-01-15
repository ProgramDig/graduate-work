import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../context/authContext";

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
                    <li><NavLink to={'/admin'}>admin</NavLink></li>
                    <li><NavLink to={'/department-head'}>depart-head</NavLink></li>
                    <li><NavLink to={'/scientific-employer'}>scientific-employer</NavLink></li>
                    <li><NavLink to={'/teacher'}>teacher</NavLink></li>
                    <li><NavLink to={'/main'}>main</NavLink></li>
                    <li><NavLink to={'/'} onClick={logoutHandler}>Вийти</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
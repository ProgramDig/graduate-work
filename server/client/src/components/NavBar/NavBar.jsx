import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/authContext";
import Links from "../Links";
import {BiExit, BiUserCircle} from "react-icons/bi";
import logo from "../../assets/lens_black_24dp.svg"
const NavBar = () => {
    const auth = useContext(AuthContext)
    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
    }
    return (
        <nav>
            <div className="nav-wrapper" style={{padding: '0 2rem', backgroundColor: "#2e3e50"}}>
                <span href="#" className="brand-logo"><img src={logo} alt="logo"/></span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <Links role={auth.role}/>
                    <li>
                        <NavLink to={'/account'}>
                            <BiUserCircle/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/auth'} onClick={logoutHandler}>
                            <BiExit/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
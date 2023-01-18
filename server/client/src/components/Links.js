import React from 'react';
import {NavLink} from "react-router-dom";

const Links = (role) => {
    switch (role.role) {
        case 'ADMIN':
            return (
                <>
                    <li><NavLink to={'/admin'}>admin</NavLink></li>
                    <li><NavLink to={'/department-head'}>depart-head</NavLink></li>
                    <li><NavLink to={'/scientific-employer'}>scientific-employer</NavLink></li>
                    <li><NavLink to={'/teacher'}>teacher</NavLink></li>
                    <li><NavLink to={'/main'}>main</NavLink></li>
                </>
            )
        case 'DEPARTMENT_HEAD':
            return (
                <>
                    <li><NavLink to={'/department-head'}>depart-head</NavLink></li>
                    <li><NavLink to={'/teacher'}>teacher</NavLink></li>
                    <li><NavLink to={'/main'}>main</NavLink></li>
                </>
            )
        case 'SCIENTIFIC_EMPLOYER':
            return (
                <>
                    <li><NavLink to={'/scientific-employer'}>scientific-employer</NavLink></li>
                    <li><NavLink to={'/teacher'}>teacher</NavLink></li>
                    <li><NavLink to={'/main'}>main</NavLink></li>
                </>
            )
        case 'TEACHER':
            return (
                <>
                    <li><NavLink to={'/teacher'}>teacher</NavLink></li>
                    <li><NavLink to={'/main'}>main</NavLink></li>
                </>
            )
        default:
            console.log('default')
            return (
                <>
                    <li><NavLink to={'/main'}>main</NavLink></li>
                </>
            )
    }
};

export default Links;
import React, {useContext} from 'react';
import {AuthContext} from "../context/authContext";
import {Link} from "react-router-dom";

const MainPage = () => {
    const auth = useContext(AuthContext)
    return (
        <div>
            <h1>main</h1>
            <div>
                <Link to={'/admin'}>admin</Link>
            </div>
            <div>
                <Link to={'/department-head'}>depart-head</Link>
            </div>
            <div>
                <Link to={'/scientific-employer'}>scientific-employer</Link>
            </div>
            <div>
                <Link to={'/teacher'}>teacher</Link>
            </div>
            <div>
                <Link to={'/main'}>main</Link>
            </div>
            <button onClick={auth.logout}>Logout</button>
        </div>
    );
};

export default MainPage;
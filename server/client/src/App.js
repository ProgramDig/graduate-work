import React from "react";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/authContext";
import NavBar from "./components/NavBar";
import 'materialize-css'
import Footer from "./components/Footer";

function App() {
    const {token, login, logout, userId, roles} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(roles)
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, roles, isAuth
        }}>
            { !!roles && <NavBar/>}
            <div className={'container'} style={{height: '70vh'}}>
                {routes}
            </div>
            { !!roles && <Footer/>}
        </AuthContext.Provider>
    );
}

export default App;

import React from "react";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/authContext";
import NavBar from "./components/NavBar";
import 'materialize-css'

function App() {
    const {token, login, logout, userId, roles} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(roles)
    return (
        <AuthContext.Provider value={{
            token, login, logout, userId, roles, isAuth
        }}>
            { !!roles && <NavBar/>}
            <div className={'container'}>
                {routes}
            </div>
        </AuthContext.Provider>
    );
}

export default App;

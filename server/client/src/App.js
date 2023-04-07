import React from "react";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/authContext";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import 'materialize-css'

const App = () => {
    const {token, login, logout, userId, role} = useAuth()
    const isAuth = !!token
    const routes = useRoutes(role)

    return (
        <AuthContext.Provider value={{token, login, logout, userId, role, isAuth}}>
            {isAuth && <NavBar/>}
            <div style={{backgroundColor: "#ffffff"}}>
                    {routes}
            </div>
            {isAuth && <Footer/>}
        </AuthContext.Provider>
    );
}

export default App;

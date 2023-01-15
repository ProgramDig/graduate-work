import {useRoutes} from "./routes";
import {Router} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
import 'materialize-css'

function App() {
    const {token, login, logout, userId} = useAuth()
    const routes = useRoutes("")
    return (
        <Router>
            <div className={'container'}>
                {routes}
            </div>
        </Router>
    );
}

export default App;

import 'materialize-css'
import {useRoutes} from "./routes";

function App() {
    const routes = useRoutes("")
  return (
    <div className={'container'}>
        {routes}
    </div>
  );
}

export default App;

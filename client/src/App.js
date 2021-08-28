import Topbar from './components/topbar/Topbar';
import { Home } from './pages/home/Home';
import { Single } from './pages/single/Single';
import { Write } from './pages/write/Write';
import { Settings } from './pages/settings/Settings';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const App = () => {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/settings">
            {user ? <Settings /> : <Home />}
          </Route>
          <Route path="/write">
            {user ? <Write /> : <Home />}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
    </Router>
  )
}


export default App;

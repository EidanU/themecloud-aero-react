import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <HomePage />
          </Route>
          <Route path="/users">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

import HomePage from "./pages/HomePage";
import FlightPage from "./pages/FlightPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from "./components/errors/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/flight/:trip">
            <FlightPage />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

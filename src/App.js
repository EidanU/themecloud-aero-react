import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
          <Route exact path="/flight/:from">
            <OrderPage />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

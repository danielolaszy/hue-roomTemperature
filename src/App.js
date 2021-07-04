import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Garden from "./components/Garden";
import Groundfloor from "./components/Groundfloor";
import Secondfloor from "./components/Secondfloor";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/groundfloor">
          <Groundfloor />
        </Route>
        <Route path="/secondfloor">
          <Secondfloor />
        </Route>
        <Route path="/garden">
          <Garden />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

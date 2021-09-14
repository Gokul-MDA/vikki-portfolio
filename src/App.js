import "./App.css";
import CooKoo from "./components/CooKoo/CooKoo";
import Home from "./components/Home/Home";
import Talk from "./components/Talk/Talk";
import Works from "./components/works/Works";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/hello" component={Home}></Route>
        <Route exact path="/works" component={Works}></Route>
        <Route exact path="/lets-talk" component={Talk}></Route>
        <Route exact path="/cookoo" component={CooKoo}></Route>
      </Switch>
    </Router>
  );
}

export default App;

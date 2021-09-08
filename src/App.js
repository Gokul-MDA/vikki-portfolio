import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Talk from "./components/Talk/Talk";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Works />
      <Talk />
    </div>
  );
}

export default App;

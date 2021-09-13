import "./App.css";
// import CooKoo from "./components/CooKoo/CooKoo";
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
      {/* <CooKoo /> */}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Register />
    </div>
  );
}

export default App;

import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/HomePage/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <AllRoutes />
    </div>
  );
}

export default App;

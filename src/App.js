import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/HomePage/Navbar';
import AdminNavbar from './Pages/Admin/AdminNavbar';
import AdminLogin from './Pages/Admin/AdminLogin';
import Dashboard from './Pages/Admin/Dashboard';

function App() {
  return(<div className="App">
    <Navbar/>
    <AllRoutes/>
  </div>)
  
  
  
}

export default App;

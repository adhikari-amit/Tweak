import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom"
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const {user}= useContext(AuthContext)
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={ user? <Home/> : <Login/>} />
        <Route exact path="/login" element={user ? <Navigate to="/"/>: <Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/profile/:username" element={<Profile/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

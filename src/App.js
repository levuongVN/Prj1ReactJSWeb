import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './HomePage/home';
import LoginUser from './Login/LoginUser';
import SignUpUser from './Login/SignUpUser';
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Login/user" element={<LoginUser />} />
        <Route path="/SignUp/user" element={<SignUpUser />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

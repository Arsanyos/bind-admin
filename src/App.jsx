import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import "./assests/styles/App.css";
//importing components
import Main from "./components/Main.jsx";
import Home from "./components/routes/Home.jsx";
import Business from "./components/routes/Business.jsx";
import Settings from "./components/routes/Setting.jsx";
import Dashboard from "./components/routes/Dashboard.jsx";
import Users from "./components/routes/User.jsx";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="main-container">
     
          <Main />
          <Routes>
            <Route  exact={true} path="/" element={<Home/>}/>
            <Route path="/businesses" element={<Business/>}/>
          </Routes>
          
      </div>
    </div>
    </BrowserRouter>
    
  );
}
export default App;

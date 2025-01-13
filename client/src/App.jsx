import React from "react";
import Login from "./pages/Login"; 
import HomePage from "./pages/HomePage";
import Navbar from "./components/articles/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup";
import ChatPage from "./pages/ChatPage";
import Currency from "./pages/Currency";
import About from "./pages/About";

const App = () => {
  return (
    <div className="w-full h-screen bg-white">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/c" element={<ChatPage/>}/>
        <Route path="/cr" element={<Currency/>}/>
        <Route path="/a" element={<About/>}/>

      </Routes>
      </Router>
    </div>
  );
};

export default App;

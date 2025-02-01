import React from "react";
import Login from "./pages/Login"; 
import MainPage from "./pages/MainPage";
import Navbar from "./components/articles/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup";
import ChatPage from "./pages/ChatPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import About from "./pages/About";
import NewsChatSidebar from "./components/articles/NewsChatSidebar";


const App = () => {  
  return (
    <div className="w-full h-screen bg-white">
      {
 <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/c" element={<ChatPage/>}/>
        <Route path="/cr" element={<CurrenciesPage/>}/>
        <Route path="/a" element={<About/>}/>
        <Route path="/crr" element={<NewsChatSidebar/>}/>
      </Routes>
      </Router>
  
    }
    </div>
  );
};

export default App;

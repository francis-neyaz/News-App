import React from "react";
import Login from "./pages/Login"; 
import MainPage from "./pages/MainPage";
import Navbar from "./components/articles/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup";
//import ChatPage from "./pages/ChatPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import About from "./pages/About";
import NewsChatSidebar from "./components/articles/NewsChatSidebar"
import NotFound from "./pages/NotFound";
import { useState } from "react";


const App = () => {  

const [isAuth, setIsAuth]=useState(false);


if(!isAuth) return <Signup setIsAuth={setIsAuth}/>
  return (
    <div className="w-full h-screen bg-black overflow-y-auto">
      {
 <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/cr" element={<CurrenciesPage/>}/>
        <Route path="/a" element={<About/>}/>
        <Route path="/crr" element={<NewsChatSidebar/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/l" element={<Login/>}/>
      </Routes>
      </Router>
    }
    </div>
  );
};

export default App;

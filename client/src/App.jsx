import React from "react";
import Login from "./pages/Login"; 
import MainPage from "./pages/MainPage";
import Navbar from "./components/articles/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup";
import ChatPage from "./pages/ChatPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import About from "./pages/About";
<<<<<<< HEAD
import NewsChatSidebar from "./components/articles/NewsChatSidebar";
=======
import NewsChatSidebar from "./components/articles/NewsChatSidebar"
import NotFound from "./pages/NotFound";
>>>>>>> b3009e2fbbb886f807d1d45dd4496ab7f7d72544


const App = () => {  
  return (
    <div className="w-full h-screen bg-white">
      {
 <Router>
      <Navbar/>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<MainPage/>}/>
=======
       {/* <Route path="/" element={<HomePage/>}/>
>>>>>>> b3009e2fbbb886f807d1d45dd4496ab7f7d72544
        <Route path="/c" element={<ChatPage/>}/>
        <Route path="/cr" element={<CurrenciesPage/>}/>
        <Route path="/a" element={<About/>}/>
        <Route path="/crr" element={<NewsChatSidebar/>}/>
        */}
        
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* 404 Route (This should be the last route) */}
        <Route path="*" element={<NotFound />} />
      
      </Routes>
      </Router>
  
    }
    </div>
  );
};

export default App;

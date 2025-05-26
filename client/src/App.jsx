// src/App.js
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Login from './pages/Login'; // Updated import path
import Signup from './pages/Signup';
import MainPage from './pages/MainPage';
import Navbar from './components/articles/Navbar';
import CurrenciesPage from './pages/CurrenciesPage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import LandingPage from './pages/landingPage';
import api from './services/api';

const ProtectedRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" replace />;
};

const AppRoutes = ({ isAuth, setIsAuth }) => {
  const location = useLocation();
  const showNavbarRoutes = ['/home', '/cr', '/a'];
  const shouldShowNavbar = isAuth && showNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cr"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <CurrenciesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/a"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [isAuth, setIsAuth] = useState(() => {
    const token = localStorage.getItem('token');
    return !!token;
  });

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          await api.post('/predict', {}, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setIsAuth(true);
        } catch (error) {
          console.error('Token verification failed:', error);
          localStorage.removeItem('token');
          setIsAuth(false);
        }
      } else {
        setIsAuth(false);
      }
    };
    verifyToken();
  }, []);

  useEffect(() => {
    localStorage.setItem('isAuth', isAuth);
  }, [isAuth]);

  return (
    <div className="w-full h-screen bg-black overflow-y-auto">
      <Router>
        <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
      </Router>
    </div>
  );
};

export default App;

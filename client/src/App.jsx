import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiDollarSign, FiInfo, FiLogOut, FiMoon, FiSun, FiUser, FiSettings, FiChevronDown } from 'react-icons/fi';
import Login from './pages/Login';
import Signup from './pages/Signup';
import News from './components/News';
import CurrenciesPage from './pages/CurrenciesPage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import LandingPage from './pages/landingPage';
import api from './services/api';
import { AuthContext, useAuth, ThemeContext, useTheme } from './context';

// Error Boundary Component
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      console.error('Error caught by boundary:', error, errorInfo);
      setHasError(true);
    };
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-700 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-neumorphic text-white text-xl"
        >
          Something went wrong. Please refresh the page.
        </motion.div>
      </div>
    );
  }

  return children;
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

// Sidebar Component
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { isAuth, setIsAuth } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [username, setUsername] = useState('User');
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuth');
    setIsAuth(false);
    toggleSidebar();
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  const navItems = [
    { path: '/home', name: 'News', icon: <FiHome className="text-2xl" />, tooltip: 'News' },
    { path: '/cr', name: 'Currencies', icon: <FiDollarSign className="text-2xl" />, tooltip: 'Currencies' },
    { path: '/a', name: 'About', icon: <FiInfo className="text-2xl" />, tooltip: 'About' },
    { path: '/settings', name: 'Settings', icon: <FiSettings className="text-2xl" />, tooltip: 'Settings' },
  ];

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: isOpen ? 0 : '-100%' }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-900 to-purple-900 text-white z-50 shadow-2xl backdrop-blur-lg bg-opacity-80 sm:w-16 sm:hover:w-64 group transition-all duration-300 ${theme === 'dark' ? 'bg-opacity-90' : 'bg-opacity-70'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between p-4 sm:p-3">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
        >
          Flash
        </motion.span>
        <button
          onClick={toggleSidebar}
          className="sm:hidden text-white focus:outline-none focus:ring-2 focus:ring-pink-400 rounded"
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <div className="p-4 flex items-center space-x-3 border-b border-purple-600 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-neumorphic"
        >
          {username[0]?.toUpperCase() || 'U'}
        </motion.div>
        <div>
          <p className="text-sm font-semibold">{username}</p>
          <p className="text-xs text-gray-300">Online</p>
        </div>
      </div>
      <nav className="mt-4 flex-1">
        {navItems.map((item) => (
          <div key={item.path} className="relative group/item">
            <Link
              to={item.path}
              onClick={toggleSidebar}
              className={`flex items-center p-3 mx-2 my-1 rounded-xl transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-neumorphic'
                  : 'hover:bg-white hover:bg-opacity-10 hover:shadow-glow'
              } focus:outline-none focus:ring-2 focus:ring-pink-400 sm:pl-4 sm:pr-2`}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleSidebar()}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              {item.icon}
              <span className="ml-3 text-sm font-medium sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                {item.name}
              </span>
            </Link>
            <span className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/item:opacity-100 transition-opacity sm:group-hover:opacity-0 pointer-events-none">
              {item.tooltip}
            </span>
          </div>
        ))}
        <div className="relative group/item">
          <button
            onClick={toggleSubmenu}
            className="flex items-center w-full p-3 mx-2 my-1 rounded-xl hover:bg-white hover:bg-opacity-10 hover:shadow-glow transition-all focus:outline-none focus:ring-2 focus:ring-pink-400 sm:pl-4 sm:pr-2"
            aria-expanded={isSubmenuOpen}
            aria-label="Toggle additional options"
          >
            <FiChevronDown className={`text-2xl transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`} />
            <span className="ml-3 text-sm font-medium sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              More
            </span>
          </button>
          <span className="absolute left-20 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover/item:opacity-100 transition-opacity sm:group-hover:opacity-0 pointer-events-none">
            More Options
          </span>
          <AnimatePresence>
            {isSubmenuOpen && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-6 sm:ml-4 overflow-hidden"
              >
                <li>
                  <Link
                    to="/profile"
                    onClick={toggleSidebar}
                    className="flex items-center p-2 my-1 rounded-xl hover:bg-white hover:bg-opacity-10 transition-all text-sm"
                  >
                    <FiUser className="text-lg mr-2" />
                    <span className="sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      Profile
                    </span>
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <div className="p-4 border-t border-purple-600">
        <button
          onClick={toggleTheme}
          className="flex items-center w-full p-3 mx-2 rounded-xl hover:bg-white hover:bg-opacity-20 hover:shadow-glow transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400 sm:pl-4 sm:p-3 sm:mx-0"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          <span className="ml-3 text-sm font-medium sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
        {isAuth && (
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-3 mx-2 mt-1 rounded-xl hover:bg-white hover:bg-opacity-20 hover:shadow-glow transition-all focus:outline-none focus:ring-2 focus:ring-gray-400 sm:pl-4 sm:p-3 sm:mx-0"
            aria-label="Log out"
          >
            <FiLogOut className="text-lg" />
            <span className="ml-3 text-sm font-medium sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
              Logout
            </span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

// App Routes Component
const AppRoutes = () => {
  const { isAuth } = useAuth();
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      console.log('Sidebar toggled:', !prev); // Debug log
      return !prev;
    });
  };

  return (
    <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} min-h-screen`}>
      {isAuth && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      <div
        className={`flex-1 transition-all duration-300 ${isAuth ? 'sm:ml-16 sm:group-hover:ml-64' : ''} ${isSidebarOpen ? 'ml-64 sm:ml-16' : 'ml-0'}`}
      >
        <AnimatePresence>
          {isAuth && !isSidebarOpen && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}
              className="fixed top-4 left-4 z-50 sm:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-neumorphic focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Open sidebar"
            >
              <FiMenu size={24} />
            </motion.button>
          )}
        </AnimatePresence>
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className={`p-4 sm:p-6 lg:p-8 min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-pink-600' : 'bg-gradient-to-br from-blue-100 via-gray-100 to-pink-100'}`}
        >
          <Routes>
            <Route
              path="/"
              element={isAuth ? <Navigate to="/home" replace /> : <LandingPage />}
            />
            <Route path="/login" element={isAuth ? <Navigate to="/home" replace /> : <Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <News />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cr"
              element={
                <ProtectedRoute>
                  <CurrenciesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/a"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-neumorphic">
                    <h1 className="text-3xl text-white font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                      Settings
                    </h1>
                    <p className="text-gray-300">Settings page under construction.</p>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-neumorphic">
                    <h1 className="text-3xl text-white font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
                      Profile
                    </h1>
                    <p className="text-gray-300">Profile page under construction.</p>
                  </div>
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
        {isAuth && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-neumorphic z-40"
            aria-label="Quick Action"
          >
            <FiUser size={24} />
          </motion.div>
        )}
      </div>
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-60 z-40 sm:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  const [isAuth, setIsAuth] = useState(() => {
    const token = localStorage.getItem('token');
    return !!token;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const verifyToken = async () => {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await api.get('/verify-token', {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.data.success) {
            setIsAuth(true);
          } else {
            throw new Error('Token invalid');
          }
        } catch (error) {
          console.error('Token verification failed:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('isAuth');
          setIsAuth(false);
        }
      } else {
        setIsAuth(false);
      }
      setIsLoading(false);
    };
    verifyToken();
  }, []);

  useEffect(() => {
    localStorage.setItem('isAuth', isAuth);
  }, [isAuth]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-700 flex flex-col items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 border-8 border-t-pink-600 border-purple-400 rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-white text-xl font-semibold"
        >
          Loading Flash...
        </motion.p>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <ErrorBoundary>
          <Router>
            <AppRoutes />
          </Router>
        </ErrorBoundary>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
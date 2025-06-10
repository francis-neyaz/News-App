import { createContext, useContext } from 'react';

// Auth Context
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

// Theme Context
const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

export { AuthContext, useAuth, ThemeContext, useTheme };
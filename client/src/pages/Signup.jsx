import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { BiUser, BiEnvelope, BiLock } from 'react-icons/bi';
import api from '../services/api';
import { useAuth, useTheme } from '../context';

const Signup = () => {
  const { setIsAuth } = useAuth();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await api.post('/auth/signup', formData);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setIsAuth(true);
        navigate('/home');
      } else {
        throw new Error(response.data.error || 'Signup failed');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center p-4 sm:p-6 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-pink-700'
          : 'bg-gradient-to-br from-blue-100 via-gray-50 to-pink-100'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-10 shadow-neumorphic"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Join Flash
        </h1>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-center mb-6"
          >
            {error}
          </motion.p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <BiUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-purple-400 text-xl" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full pl-12 pr-4 py-3 bg-transparent border border-purple-400 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div className="relative">
            <BiEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-purple-400 text-xl" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 bg-transparent border border-purple-400 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div className="relative">
            <BiLock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-purple-400 text-xl" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 bg-transparent border border-purple-400 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-semibold transition-all ${
              loading
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-glow'
            }`}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </motion.button>
        </form>
        <p className="text-gray-300 text-center mt-6 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-400 hover:text-pink-300 font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default Signup;
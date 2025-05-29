import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '', general: '' });
  const [loading, setLoading] = useState(false);

  // Check for existing token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
      navigate('/home');
    }
  }, [navigate, setIsAuth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '', general: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '', general: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 4) {
      newErrors.password = 'Password must be at least 4 characters'; // Aligned with backend
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrors((prev) => ({ ...prev, general: '' }));

    try {
      const response = await api.post('/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setIsAuth(true);
        navigate('/home');
      } else {
        setErrors({ general: response.data.error || 'Login failed' });
      }
    } catch (error) {
      console.error('Login error:', error);
      console.log('Axios config:', error.config); // Debug Axios request
      const errorMessage = error.response?.data?.error || 'Login failed. Please try again.';
      setErrors({ general: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16 bg-black bg-opacity-20 rounded-2xl p-8 shadow-2xl max-w-4xl w-full"
      >
        <motion.div
          className="md:w-1/2 max-w-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            src="/FLASH.png" // Use same image as Signup.jsx for consistency
            alt="Login Illustration"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <div className="md:w-1/2 max-w-md">
          <motion.div
            className="text-center md:text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="text-white text-lg font-semibold">Sign in with</label>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <motion.button
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg"
                aria-label="Sign in with Facebook"
              >
                <BiLogoFacebook size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center shadow-lg"
                aria-label="Sign in with Twitter"
              >
                <AiOutlineTwitter size={24} />
              </motion.button>
            </div>
          </motion.div>

          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white"></div>
            <p className="mx-4 text-white font-semibold">Or</p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white"></div>
          </div>

          {errors.general && (
            <p className="text-red-500 text-center mb-4" role="alert">{errors.general}</p>
          )}

          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative mb-4"
            >
              <input
                type="email"
                name="email"
                aria-label="Email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-lg"></div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative mb-4"
            >
              <input
                type="password"
                name="password"
                aria-label="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-lg"></div>
            </motion.div>

            <div className="mt-4 flex justify-between text-sm text-white">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 accent-pink-500"
                />
                <span>Remember Me</span>
              </label>
              <a
                href="#"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            <motion.button
              whileHover={{
                scale: loading ? 1 : 1.05,
                boxShadow: loading ? 'none' : '0 0 20px rgba(236, 72, 153, 0.7)',
              }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
              type="submit"
              disabled={loading}
              className={`mt-6 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold tracking-wider shadow-lg transition-all duration-300 ${
                loading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </motion.button>
          </form>

          <div className="mt-4 text-center text-sm text-white">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Login;


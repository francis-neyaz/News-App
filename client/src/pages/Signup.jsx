// pages/Signup.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import api from '../services/api';

const Signup = ({ setIsAuth }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [termsAgreed, setTermsAgreed] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleTermsChange = (e) => {
    setTermsAgreed(e.target.checked);
    setErrors({ ...errors, terms: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    }

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
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!termsAgreed) {
      newErrors.terms = 'You must agree to the terms and conditions';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const signIn = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await api.post('/auth/signup', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });

        if (res.data.success) {
          console.log('Signup success:', res.data);
          setIsAuth(true); // Update authentication state
          localStorage.setItem('token', res.data.token); // Store token
          navigate('/home'); // Redirect to home page
        } else {
          setErrors({ general: res.data.message || 'Signup failed. Try again.' });
        }
      } catch (error) {
        console.error('Signup error:', error);
        const errorMessage =
          error.response?.data?.error || 'Signup failed. Please try again.';
        setErrors({ general: errorMessage });
      }
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
            src="/images/FLASH.png"
            alt="Futuristic illustration"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <div className="md:w-1/2 max-w-md">
          <div className="text-center md:text-left mb-6">
            <label className="text-white text-lg font-semibold">Sign up with</label>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <motion.button
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg"
              >
                <BiLogoFacebook size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center shadow-lg"
              >
                <AiOutlineTwitter size={24} />
              </motion.button>
            </div>
          </div>

          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white"></div>
            <p className="mx-4 text-white font-semibold">Or</p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white"></div>
          </div>

          <form onSubmit={signIn}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                placeholder="Full Name"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                placeholder="Email Address"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                placeholder="Password"
              />
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="mb-4 text-sm text-white">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={termsAgreed}
                  onChange={handleTermsChange}
                  className="mr-2 accent-pink-500"
                />
                I agree to the <span className="underline ml-1">terms and conditions</span>
              </label>
              {errors.terms && <p className="text-red-400 text-xs mt-1">{errors.terms}</p>}
            </div>

            {errors.general && (
              <p className="text-red-400 text-sm mb-4">{errors.general}</p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Sign Up
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Signup;



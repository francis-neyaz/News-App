import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const InputField = ({ name, type, placeholder, value, onChange, error }) => (
  <div className="mb-4">
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-transparent border border-purple-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
    />
    {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
  </div>
);

const Signup = ({ setIsAuth }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, password, confirmPassword } = formData;
    const isEmail = /\S+@\S+\.\S+/.test(email);

    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!isEmail) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Minimum 6 characters';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm your password';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!termsAgreed) newErrors.terms = 'You must agree to terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const signIn = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const { name, email, password } = formData;
      const res = await api.post('/auth/signup', { name, email, password });

      if (res.data.success) {
        setIsAuth(true);
        localStorage.setItem('token', res.data.token);
        navigate('/home');
      } else {
        setErrors({ general: res.data.message || 'Signup failed.' });
      }
    } catch (err) {
      const message = err.response?.data?.error || 'Signup failed. Please try again.';
      setErrors({ general: message });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-700 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-12 bg-black bg-opacity-30 rounded-2xl p-8 shadow-2xl max-w-4xl w-full">
        <motion.img
          src="/images/FLASH.png"
          alt="Futuristic illustration"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="rounded-lg shadow-lg w-full md:w-1/2"/>

        <div className="md:w-1/2 w-full">
          <div className="text-center md:text-left mb-6">
            <p className="text-white text-lg font-semibold">Sign up with</p>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <SocialButton icon={<BiLogoFacebook size={24} />} gradient="from-blue-500 to-blue-700" />
              <SocialButton icon={<AiOutlineTwitter size={24} />} gradient="from-cyan-500 to-blue-500" />
            </div>
          </div>

          <Divider text="Or" />

          <form onSubmit={signIn}>
            <InputField name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} error={errors.name} />
            <InputField name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} error={errors.email} />
            <InputField name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} error={errors.password} />
            <InputField name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />

            <div className="mb-4 text-sm text-white">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={termsAgreed}
                  onChange={(e) => {
                    setTermsAgreed(e.target.checked);
                    setErrors(prev => ({ ...prev, terms: '' }));
                  }}
                  className="mr-2 accent-pink-500"
                />
                I agree to the <span className="underline ml-1">terms and conditions</span>
              </label>
              {errors.terms && <p className="text-red-400 text-xs mt-1">{errors.terms}</p>}
            </div>

            {errors.general && (
              <p className="text-red-400 text-sm mb-4 text-center">{errors.general}</p>
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

const SocialButton = ({ icon, gradient }) => (
  <motion.button
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className={`h-10 w-10 rounded-full bg-gradient-to-r ${gradient} text-white flex items-center justify-center shadow-lg`}
  >
    {icon}
  </motion.button>
);

const Divider = ({ text }) => (
  <div className="my-6 flex items-center">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white"></div>
    <p className="mx-4 text-white font-semibold">{text}</p>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white"></div>
  </div>
);

export default Signup;

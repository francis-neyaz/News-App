import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// ✅ Correct:
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';


const landingPage = () => {
  const features = [
    {
      title: 'Real-Time Breaking News',
      description: 'Stay ahead with instant updates on global events as they happen.',
      icon: '⚡',
    },
    {
      title: 'Personalized News Feed',
      description: 'Tailored content based on your interests and reading habits.',
      icon: '📰',
    },
    {
      title: 'Push Notifications',
      description: 'Get alerted to breaking news and top stories instantly.',
      icon: '🔔',
    },
    {
      title: 'Offline Reading',
      description: 'Save articles to read anytime, even without internet.',
      icon: '📚',
    },
  ];

  const testimonials = [
    {
      name: 'Jane Doe',
      quote: 'Flash News keeps me informed with lightning-fast updates!',
      role: 'Journalist',
    },
    {
      name: 'John Smith',
      quote: 'The personalized feed is a game-changer for staying relevant.',
      role: 'News Enthusiast',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Flash News
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Your ultimate source for real-time, personalized news delivered with speed and style.
          </p>
          <motion.div
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(236, 72, 153, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold tracking-wider shadow-lg"
              >
                Get Started
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-purple-500 text-white py-3 px-6 rounded-lg font-semibold"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Why Choose Flash News?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the features that make Flash News the go-to app for staying informed.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-black bg-opacity-20 p-6 rounded-lg shadow-lg relative"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-lg"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black bg-opacity-30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">What Users Say</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-black bg-opacity-40 p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-200 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Join the News Revolution
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Sign up now to experience news like never before with Flash News.
          </p>
          <motion.div className="mt-8 flex justify-center space-x-4">
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(236, 72, 153, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold tracking-wider shadow-lg"
              >
                Sign Up Now
              </motion.button>
            </Link>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                whileHover={{ scale: 1.2 }}
                className="text-white"
              >
                <BiLogoFacebook size={32} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                whileHover={{ scale: 1.2 }}
                className="text-white"
              >
                <AiOutlineTwitter size={32} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black bg-opacity-50 text-center">
        <p className="text-gray-400">
          &copy; 2025 Flash News. All rights reserved.
        </p>
        <div className="mt-4">
          <Link to="/login" className="text-pink-400 hover:text-pink-300 mx-2">
            Login
          </Link>
          <Link to="/signup" className="text-pink-400 hover:text-pink-300 mx-2">
            Signup
          </Link>
          <Link to="/about" className="text-pink-400 hover:text-pink-300 mx-2">
            About
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default landingPage;
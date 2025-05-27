import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter, AiOutlineThunderbolt, AiOutlineBell } from 'react-icons/ai';
import { BiLogoFacebook, BiNews } from 'react-icons/bi';
import { MdOutlineOfflinePin } from 'react-icons/md';

const LandingPage = () => {
  const features = [
    {
      title: 'Real-Time Breaking News',
      description: 'Stay ahead with instant updates on global events as they happen.',
      icon: <AiOutlineThunderbolt size={40} className="text-pink-400" />,
    },
    {
      title: 'Personalized News Feed',
      description: 'Tailored content based on your interests and reading habits.',
      icon: <BiNews size={40} className="text-purple-400" />,
    },
    {
      title: 'Push Notifications',
      description: 'Get alerted to breaking news and top stories instantly.',
      icon: <AiOutlineBell size={40} className="text-cyan-400" />,
    },
    {
      title: 'Offline Reading',
      description: 'Save articles to read anytime, even without internet.',
      icon: <MdOutlineOfflinePin size={40} className="text-indigo-400" />,
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
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
            Flash News
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Your ultimate source for real-time, personalized news delivered with speed and style.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(236, 72, 153, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg"
              >
                Get Started
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-500 py-3 px-6 rounded-lg font-semibold text-white"
            >
              Learn More
            </motion.button>
          </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Flash News?</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover the features that make Flash News the go-to app for staying informed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-blue-900 p-6 rounded-xl shadow-md text-left hover:shadow-lg transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
                className="bg-blue-800 p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-200 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the News Revolution</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Sign up now to experience news like never before with Flash News.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg"
              >
                Sign Up Now
              </motion.button>
            </Link>
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
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black bg-opacity-50 text-center text-gray-400">
        <p>&copy; 2025 Flash News. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link to="/login" className="text-pink-400 hover:text-pink-300">
            Login
          </Link>
          <Link to="/signup" className="text-pink-400 hover:text-pink-300">
            Signup
          </Link>
          <Link to="/about" className="text-pink-400 hover:text-pink-300">
            About
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

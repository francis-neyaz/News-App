import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ newsItems, onNewsClick }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-1/4 h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white rounded-lg shadow-2xl overflow-y-auto"
    >
      <h2 className="text-2xl font-bold mx-6 my-6 tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
        News Categories
      </h2>
      <ul className="mt-6 space-y-3 px-6">
        {newsItems.map((news) => (
          <motion.li
            key={news.id}
            whileHover={{ scale: 1.03, backgroundColor: '#ffffff', color: '#1e1b4b' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-indigo-800/50 to-purple-800/50 hover:bg-white text-white hover:text-indigo-900 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => onNewsClick(news)}
          >
            <span className="text-xl">{news.icon}</span>
            <span className="text-sm font-medium tracking-tight">{news.title}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Sidebar;








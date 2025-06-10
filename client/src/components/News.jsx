import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../services/api';
import { useTheme } from '../context';

const News = () => {
  const { theme } = useTheme();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    q: '',
    country: 'us',
    category: 'general',
    page: 1,
    pageSize: 20,
  });

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/news', {
          headers: { Authorization: `Bearer ${token}` },
          params: filters,
        });
        if (response.data.success) {
          setArticles(response.data.articles);
        } else {
          setError(response.data.error || 'Failed to fetch news');
        }
      } catch (err) {
        console.error('News fetch error:', err);
        setError(err.response?.data?.error || 'Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value, page: 1 }));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col items-center p-4 sm:p-6 lg:p-12 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-blue-900 via-purple-900 to-pink-700'
          : 'bg-gradient-to-br from-blue-100 via-gray-50 to-pink-100'
      }`}
    >
      <div className="max-w-6xl w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-10 shadow-neumorphic">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          News Feed
        </h1>
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            name="q"
            value={filters.q}
            onChange={handleFilterChange}
            placeholder="Search news..."
            className="px-4 py-3 bg-transparent border border-purple-400 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 flex-1 text-sm sm:text-base"
          />
          <select
            name="country"
            value={filters.country}
            onChange={handleFilterChange}
            className="px-4 py-3 bg-transparent border border-purple-400 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
          >
            <option value="us">United States</option>
            <option value="gb">United Kingdom</option>
            <option value="in">India</option>
          </select>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="px-4 py-3 bg-transparent border border-purple-400 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm sm:text-base"
          >
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-center mb-8"
          >
            {error}
          </motion.p>
        )}
        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-6 border-t-pink-600 border-purple-400 rounded-full mx-auto"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl shadow-neumorphic hover:shadow-glow transition-all"
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h2 className="text-xl text-white font-semibold mb-3 line-clamp-2">{article.title}</h2>
                <p className="text-gray-300 mb-4 line-clamp-3 text-sm">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 font-medium text-sm"
                >
                  Read More
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default News;
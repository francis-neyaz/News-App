import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../news/Card";


const Technology= () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:5000/news/technology");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again.");
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto pr-4">
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Card key={article.index}
            urlToImage={article.urlToImage}
            title={article.title}
            description={article.description}
            href={article.url}
            /> 
          ))
        ) : (
          !loading && <p className="text-center text-gray-500">No news available.</p>
        )}
      </div>
    </div>
  );
};

export default Technology;



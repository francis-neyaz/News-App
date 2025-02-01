import React from "react";
import { FaComments } from "react-icons/fa";


const Card = ({ title, description, url, urlToImage, category, date, comments, readTime  }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 m-5">
      
      {urlToImage && (
        <div className="relative">
          <img src={urlToImage} alt={title} className="w-full h-48 object-cover" />
          {date && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">
              {date}
            </div>
          )}
        </div>
      )}
      <div className="p-4">
        {category && (
          <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
            {category}
          </span>
        )}
        
        <h3 className="font-bold text-lg mt-2 text-blue-500">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <div className="flex items-center text-gray-500 text-xs mt-3">
          <span className="mr-3">⏳ {readTime} min. read</span>
          <span className="flex gap-2 items-center"><FaComments/>{comments}comments</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-2 block font-semibold">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;








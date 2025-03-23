import React from "react";


const Sidebar = ({ newsItems, onNewsClick }) => {
  return (
    <div className="w-1/4 h-screen bg-gradient-to-r from-yellow-300 to-red-500  rounded-lg">
      <h2 className="text-xl font-bold mx-4 my-5">News Categories</h2>
      <ul className="mt-5 space-y-4 px-4">
        {newsItems.map((news) => (
          <li key={news.id}
            className="text-black p-3 bg-gradient-to-r from-yellow-300 to-red-500 rounded-lg hover:text-gray-900 hover:bg-white transition-colors cursor-pointer flex gap-2 items-center"
            onClick={() => onNewsClick(news)}>
            {news.icon}
            {news.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;








import React from "react";

const Sidebar = ({ newsItems, onNewsClick }) => {
  return (
    <div className="w-1/4 h-screen bg-gray-200 rounded-lg">
      <h2 className="text-xl font-bold mx-4 my-5">News Categories</h2>
      <ul className="mt-5 space-y-4 px-4">
        {newsItems.map((news) => (
          <li key={news.id}
            className="text-black p-3 bg-gray-200 rounded-lg hover:text-gray-900 hover:bg-white transition-colors cursor-pointer  "
            onClick={() => onNewsClick(news)}>
            {news.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

















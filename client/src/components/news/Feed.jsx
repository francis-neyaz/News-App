import React from "react";

const Feed = ({ news }) => {
  return (
    <div className="flex-grow p-6 bg-white rounded-lg">
      {news ? (
        <>
          <h2 className="text-2xl font-semibold mb-4">{news.title}</h2>
          <p className="text-gray-700 text-lg">{news.content}</p>
        </>
      ) : (
        <p className="text-gray-500 text-lg">Select a news item to read more.</p>
      )}
    </div>
  );
};

export default Feed;

import React from "react";
import NotFound from "../../pages/NotFound";

const Feed = ({ news }) => {
  return (
<div className="w-full h-screen p-6  items-center justify-center" 

    style={{
      overflowY:"scroll",
      scrollbarWidth:"none"
    }}
    >      
      {news ? (
        <>
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-yellow-500 to-red-600 text-white p-5 rounded-lg">{news.title}</h2>
          <p className="text-gray-700 text-lg">{news.content}</p>
       </>
      ) : (
        <div 
          className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/usa-1777986_960_720.jpg")' }}>
          <div className="p-10 bg-blue-500  rounded-lg text-center">
            <h1 className="text-white font-bold text-5xl">Flash News</h1>
            <p className="text-white text-lg mt-2">Select a news item to read more.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;

import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500 text-white text-center w-full">
      
      <div className="flex items-center space-x-2">
        <div className="bg-white p-2 rounded">
          <span className="text-blue-500 font-bold text-lg">+</span>
        </div>
        <span className="text-lg font-bold">digitaltrends</span>
      </div>
      <h2 className="text-xl font-semibold">OOPS!</h2>
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-lg mt-2">Sorry, we couldn't find that page.</p>    
      <p className="mt-4 text-sm">
        From here you can either check out the <a href="/" className="underline font-bold">front page</a> 
        or try searching for what you were trying to find.
      </p>
    </div>
  );
};
export default NotFound;


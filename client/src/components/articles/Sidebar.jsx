import React, { useState } from 'react';

const Sidebar = () => {
  //const [isOpen, setIsOpen] = useState(true); // State to control sidebar visibility

  //const toggleSidebar = () => {
    //setIsOpen(!isOpen); // Toggle sidebar state
  //};

  const categories = [
    {
        id:1,
        title:"Technology"},
    {id:2,
        title:"Sports"},
    { id:3,
        title:"Entertainment"},
    {id:4,
        title:"Health"},
    {id:5,
        title:"Business"},
    {id:6,
        title:"Science"},
    {id:7,
        title:"World"}
  ];

  return (
    <div className="w-1/4 h-screen bg-gray-200 rounded-lg">
      <h1 className="text-3xl font-bold text-center p-2 text-gray-700">What's Trending</h1>
        <ul className=" mt-10 space-y-4 px-4 ">
          {categories.map((newsItem) => (
            <li
              key={newsItem.id}
              className=" text-black p-3 bg-gray-100 rounded-lg hover:text-gray-900 hover:bg-white transition-colors cursor-pointer">
              {newsItem.title}
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default Sidebar;

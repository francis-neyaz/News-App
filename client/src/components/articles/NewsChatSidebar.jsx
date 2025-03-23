import React, { useState } from "react";

const NewsChatSidebar = () => {
  // State to handle active chats and categories
  const [activeChat, setActiveChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data for categories and active chats
  const categories = ["Politics", "Technology", "Sports", "Entertainment", "Global"];
  const activeChats = [
    { id: 1, name: "John Doe", lastMessage: "Hey, did you see the news?", time: "10:30 AM" },
    { id: 2, name: "Jane Smith", lastMessage: "AI is evolving fast!", time: "9:15 AM" },
    { id: 3, name: "Sports Group", lastMessage: "The match was amazing!", time: "Yesterday" },
  ];

  return (
    <div className="flex flex-col w-64 h-screen bg-gradient-to-r from-yellow-300 to-red-500 text-black shadow-lg">
      {/* Header Section */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray==-900">
        <h1 className="text-lg font-bold">News Chat</h1>
        <button className="text-gray-400 hover:text-white">➖</button>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-2">
        <input
          type="text"
          placeholder="Search topics or chats..."
          className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Categories Section */}
      <div className="flex flex-col px-4 py-2">
        <h2 className="text-sm font-bold text-gray-400">Categories</h2>
        <div className="mt-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className="block w-full text-left px-4 py-2 mt-1 text-gray-300 bg-gray-700 hover:bg-gray-600 rounded"
              onClick={() => setActiveChat(null)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Active Chats Section */}
      <div className="flex-grow px-4 py-2 overflow-y-auto">
        <h2 className="text-sm font-bold text-gray-400">Active Chats</h2>
        <div className="mt-2">
          {activeChats
            .filter((chat) =>
              chat.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((chat) => (
              <button
                key={chat.id}
                className={`flex items-center justify-between w-full px-4 py-2 mt-1 rounded ${
                  activeChat === chat.id ? "bg-gray-600" : "bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => setActiveChat(chat.id)}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {chat.name[0]}
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium">{chat.name}</h3>
                    <p className="text-xs text-gray-400 truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{chat.time}</span>
              </button>
            ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-3 bg-gray-900">
        <button className="w-full px-4 py-2 text-sm font-bold bg-gradient-to-r from-yellow-300 to-red-500  rounded hover:bg-blue-700">
          Share News Link
        </button>
      </div>
    </div>
  );
};

export default NewsChatSidebar;


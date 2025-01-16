/*import React from 'react'
import Sidebar from '../components/articles/SideBar'
import NewsFeed from '../components/news/NewsFeed'
import ChatBox from '../components/chats/ChatBox'

function HomePage() {
  return (
    <div className="w-full flex flex-row items-center gap-2 bg-white">
      <Sidebar/>
      <NewsFeed/>
      <ChatBox/>
    </div>
  )
}

export default HomePage
*/


import React, { useState } from "react";
//import Sidebar from "./Sidebar";
import Sidebar from "../components/articles/SideBar";
import Feed from "../components/news/Feed";

const MainPage = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsItems = [
    {id:1, title:"Technology", content:"Latest Technology news  goes here"},
    {id:2, title:"Sports", content:"Latest sports news  goes here"},
    {id:3, title:"Entertainment", content:"Latest Entertainment news  goes here"},
    {id:4, title:"Health", content:"Latest Health news  goes here"},
    {id:5, title:"Business", content:"Latest Business news  goes here"},
    {id:6, title:"Science", content:"Latest Science news  goes here"},
    {id:7, title:"World", content:"Latest World news  goes here"}
  ];



  /*const newsItems = [
    { id: 1, title: "Sports Update", content: "Latest sports news goes here." },
    { id: 2, title: "Cultural Insights", content: "Latest culture news here." },
    { id: 3, title: "Tech Trends", content: "Latest technology trends here." },
    { id: 4, title: "World News", content: "Breaking news from around the world." },
  ];
*/
  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  return (
    <div className="flex h-screen gap-2 m-2">
      <Sidebar newsItems={newsItems} onNewsClick={handleNewsClick} />
      <Feed news={selectedNews} />
    </div>
  );
};

export default MainPage;





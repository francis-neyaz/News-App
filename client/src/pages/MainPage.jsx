import React, { useState } from "react";
import Sidebar from "../components/articles/Sidebar";
import Feed from "../components/news/Feed";
import Technology from "../components/newsInfo/Technology";
import Entertainment from "../components/newsInfo/Entertainment";
import Health from "../components/newsInfo/Health";
import Business from "../components/newsInfo/Business";
import Science from "../components/newsInfo/Science";
import Sports from "../components/newsInfo/Sports";
import { SiTechcrunch } from "react-icons/si";
import { IoCarSportSharp } from "react-icons/io5";
import { PiMaskHappyFill } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";
import { Si365Datascience } from "react-icons/si";


const MainPage = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsItems = [
    {id:1, title:"Technology", icon:<SiTechcrunch/>,  content:<Technology/>},
    {id:2, title:"Sports", icon:<IoCarSportSharp/> ,  content:<Sports/>},
    {id:3, title:"Entertainment", icon:<PiMaskHappyFill/>,  content:<Entertainment/>},
    {id:4, title:"Health", icon:<MdHealthAndSafety/>,  content:<Health/>},
    {id:5, title:"Business", icon:<TbBusinessplan/>,  content:<Business/>},
    {id:6, title:"Science", icon:<Si365Datascience/>,  content:<Science/>},
  ];

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  return (
    <div className="flex h-screen bg-black gap-2 m-2">
      <Sidebar newsItems={newsItems} onNewsClick={handleNewsClick} />
      <Feed news={selectedNews} />
    </div>
  );
};

export default MainPage;
import React from 'react'
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

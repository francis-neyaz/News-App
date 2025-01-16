import React from 'react'
import ChatBox from '../components/chats/ChatBox';
import NewsChatSidebar from '../components/articles/NewsChatSidebar';


function ChatPage() {
  return (
    <div className="w-full flex h-screen bg-white">
      <NewsChatSidebar/>
    </div>
  )
}

export default ChatPage;
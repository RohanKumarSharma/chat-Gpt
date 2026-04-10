import React from 'react';
import './ChatSidebar.css';
import { useNavigate } from 'react-router-dom';


const ChatSidebar = ({ chats, activeChatId, onSelectChat, onNewChat, open }) => {

const navigate=useNavigate()
  
  return (
    <aside className={"chat-sidebar " + (open ? 'open' : '')} aria-label="Previous chats">
      <div className="sidebar-header">
        <h2>Chats</h2>
        <button className="small-btn" onClick={onNewChat}>New</button>
      </div>
      <nav className="chat-list" aria-live="polite">
        {chats.map(c => (
          <button
            key={c._id} style={{background:"black"}}
            className={"chat-list-item " + (c._id === activeChatId ? 'active' : '')}
            onClick={() => onSelectChat(c._id)}
          >
            <span style={{color: "white"}} className="title-line">{c.title}</span>
          </button>
        ))}
        {chats.length === 0 && <p className="empty-hint">No chats yet.</p>}
      </nav>
      <button onClick={()=>{
        sessionStorage.clear()
        navigate('/login')
      }} className='logout'>Logout</button>
    </aside>
  );
};

export default ChatSidebar;
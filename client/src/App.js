import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import "./index.css";
import "./normal.css";

const App = () => {
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "Hello and welcome! I'm ChatGPT, a language model designed to assist you with any questions or concerns you may have. Whether you need help with a product, have a general inquiry, or just want to chat, I'm here to assist you to the best of my abilities. How can I assist you today?",
    },
  ]);

  const clearChat = () => {
    setChatLog([]);
  };

  return (
    <div className="App">
      <div className="chatbox">
        <div className="chat-new-button" onClick={clearChat}>
          New Chat
        </div>
        <ChatBox chatLog={chatLog} setChatLog={setChatLog} />
      </div>
    </div>
  );
};

export default App;

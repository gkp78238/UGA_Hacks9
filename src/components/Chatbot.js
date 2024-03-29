import React from 'react';
import { useNavigate } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from './ActionProvider'; 
import MessageParser from './MessageParser'; 
import config from './config'; 

function ChatbotComponent() {
  const navigate = useNavigate();


  const handleNext = () => {
    navigate('/match');
  };


  return (
    <div className="chatbot-container">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
            <button onClick={handleNext}>Next</button>

    </div>
  );
}

export default ChatbotComponent;

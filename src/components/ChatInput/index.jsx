import React from 'react';

import './index.scss';

const ChatInput = ({ getMessage, sendMessage }) => {
  return (
    <form className="input-chat-container" onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Escribi tu nombre"
        onChange={(e) => getMessage(e.target.value)}
        
      />
      <button type="submit" />
    </form>
  );
};

export default ChatInput;

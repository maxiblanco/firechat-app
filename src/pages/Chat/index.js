import React, { useState, useEffect } from 'react';

import FireItem from 'components/FireItem';
import UserItem from 'components/UserItem';
import ChatInput from 'components/ChatInput';
import './index.scss';

const Chat = ({ history }) => {
  let idCounter = 0;
  const [message, setMessage] = useState({});
  const [chat, setChat] = useState([
    {
      id: 0,
      emitter: 'fire',
      message: [
        'El fuego chispea.',
        'Te calienta las manos.',
        '¿Cómo te llamas?',
      ],
    },
  ]);
  function firstResponse(name) {
    let newChat = {
      id: idCounter + 2,
      emitter: 'fire',
      message: [
        'Mucho gusto',
        `Tengo una historia para un ${name}`,
        'Pero no la recuerdo',
      ],
    };
    if (newChat) {
      setChat([...chat, newChat]);
    }
  }
  useEffect(() => {
    if (chat.length === 2) {
      setTimeout(() => firstResponse(message.message), 500);
      setMessage({ ...message, message: '' });
    }
  }, [chat]);

  function getMessage(value) {
    idCounter++;
    setMessage({
      id: idCounter,
      emmiter: 'user',
      message: [value],
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    console.log('message', message);
    setChat([...chat, message]);
  }

  console.log('chat', chat);
  console.log('message', message);

  return (
    <div className="chatbot-chat-container">
      <div className="chatbot-chat-content">
        <div className="chatbot-chat">
          <div className="chatbot-chat-container-body">
            {chat.map(({ id, emitter, message }) =>
              emitter === 'fire' ? (
                <FireItem text={message} key={emitter + id} />
              ) : (
                <UserItem text={message} key={emitter + id} />
              )
            )}
          </div>
          <div className="chatbot-chat-container-input">
            <ChatInput getMessage={getMessage} sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

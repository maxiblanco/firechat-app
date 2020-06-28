import React from 'react';
import speechBubble from 'assets/speech-bubble.json';
import Lottie from 'react-lottie';
import './index.scss';

const UserItem = ({ text }) => {
  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    renderer: 'svg',
    animationData: speechBubble,
  };

  return (
    <div className="user-item-container">
      <div className="user-item-messages">
        {text &&
          text.map((message, index) => <label key={index}>{message}</label>)}
      </div>
      <Lottie options={defaultOptions} height="50px" width="50px" />
    </div>
  );
};

export default UserItem;

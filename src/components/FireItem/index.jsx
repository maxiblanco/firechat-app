import React from 'react';
import campfireAnimation from 'assets/campfire.json';
import Lottie from 'react-lottie';
import './index.scss';

const FireItem = ({ text }) => {
  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    renderer: 'svg',
    animationData: campfireAnimation,
    className: 'fire-avatar',
  };

  return (
    <div className="fire-item-container">
      <Lottie options={defaultOptions} height="50px" width="50px" />
      <div className="fire-item-messages">
        {text &&
          text.map((message, index) => <label key={index}>{message}</label>)}
      </div>
    </div>
  );
};

export default FireItem;

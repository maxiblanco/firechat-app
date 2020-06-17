import React from 'react';
import Lottie from 'react-lottie';
// Assets
import campfireAnimation from './campfire.json';
// Styles
import './index.scss';

const Campfire = ({ history }) => {
  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    renderer: 'svg',
    animationData: campfireAnimation,
  };

  const handleOnClick = (event) => {
    console.log('Me estoy ejecutando!');
    history.push('/chat');
  };

  return (
    <div className="campfire-container" onClick={handleOnClick}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Campfire;

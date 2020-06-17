import React from 'react';
// Components
import Campfire from 'components/Campfire';
// Styles
import './index.scss';

const Home = ({ history }) => (
  <div className="home-campfireBot-container">
    <div className="home-campfireBot-content">
      <Campfire history={history} />
      <div className="home-campfireBot-greeting">
        <h1>¡Hola humano!</h1>
        <label>¿Querés charlar?</label>
        <label>Hace click sobre mi para comenzar.</label>
      </div>
    </div>
  </div>
);

export default Home;

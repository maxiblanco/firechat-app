import React from 'react';
// Components
import Campfire from 'components/Campfire';
import Fade from 'react-reveal/Fade';
// Styles
import './index.scss';

const Home = ({ history }) => (
  <div className="home-campfireBot-container">
    <div className="home-campfireBot-content">
      <Campfire history={history} />

      <div className="home-campfireBot-greeting">
        <Fade opposite>
          <h1>¡Hola humano!</h1>
        </Fade>
        <Fade opposite>
          <label>¿Querés charlar?</label>
          <label>Hace click sobre mi para comenzar.</label>
        </Fade>
      </div>
    </div>
  </div>
);

export default Home;

import React from 'react';
import ReactDOM from 'react-dom';

import { Calendar } from './components/calendar/calendar';

import './styles/styles.scss';

const App: React.FunctionComponent = () => {
  return (
    <>
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Next Desk</h1>
            <h2 className="subtitle">Choose your next office to work from.</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Calendar />
        </div>
      </section>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

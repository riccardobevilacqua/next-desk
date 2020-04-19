import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header/header';

import './styles/styles.scss';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container"></div>
      </section>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

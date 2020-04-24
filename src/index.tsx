import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header/header';
import { Planner } from './components/planner/planner';
import { Footer } from './components/footer/footer';

import './styles/styles.scss';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Planner />
      <Footer />
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

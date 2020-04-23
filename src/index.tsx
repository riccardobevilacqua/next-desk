import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header/header';
import { Planner } from './components/planner/planner';

import './styles/styles.scss';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Planner />
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

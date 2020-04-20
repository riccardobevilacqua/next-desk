import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header/header';
import { Planner } from './components/planner/planner';
import { createMockserver } from './mock/mock-server';

import './styles/styles.scss';

createMockserver();

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

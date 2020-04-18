import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.scss';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Next Desk</h1>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

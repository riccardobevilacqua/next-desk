import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/header/header';
import { LocationPicker } from './components/location-picker/location-picker';

import './styles/styles.scss';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <fieldset>
            <LocationPicker label="Departure" />
            <LocationPicker label="Destination" />
          </fieldset>
        </div>
      </section>
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

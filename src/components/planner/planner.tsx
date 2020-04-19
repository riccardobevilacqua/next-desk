import React, { useState } from 'react';

import { LocationPicker } from '../location-picker/location-picker';
import { Card } from '../card/card';

const locations: string[] = [
  'Amsterdam',
  'Budapest',
  'Madrid'
];

const Planner: React.FunctionComponent = () => {
  const [departureLocation, setDepartureLocation] = useState('');

  const handleDepartureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartureLocation(e.target.value)
  };

  const destinations = locations
    .filter(location => departureLocation && departureLocation !== '' && location !== departureLocation)
    .map((location, index) => (<Card title={location} key={index} />));

  return (
    <>
      <section className="section">
        <div className="container">
          <LocationPicker
            label="Departure"
            value={departureLocation}
            locations={locations}
            onChange={handleDepartureChange}
          />
          {destinations}
        </div>
      </section>
    </>
  );
}

export { Planner };

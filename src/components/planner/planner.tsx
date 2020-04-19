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

  return (
    <>
      <section className="section">
        <div className="container">
          <fieldset>
            <LocationPicker
              label="Departure"
              value={departureLocation}
              locations={locations}
              onChange={handleDepartureChange}
            />
          </fieldset>
        </div>
      </section>
    </>
  );
}

export { Planner };

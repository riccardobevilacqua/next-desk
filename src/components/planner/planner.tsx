import React, { useState } from 'react';

import { LocationPicker } from '../location-picker/location-picker';

const Planner: React.FunctionComponent = () => {
  const [departureLocation, setDepartureLocation] = useState('');
  const [destinationLocation, setDestinationLocation] = useState('');

  const handleDepartureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartureLocation(e.target.value)
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDestinationLocation(e.target.value)
  };

  return (
    <section className="section">
      <div className="container">
        <fieldset>
          <LocationPicker label="Departure" value={departureLocation} onChange={handleDepartureChange} />
          <LocationPicker label="Destination" value={destinationLocation} onChange={handleDestinationChange} />
        </fieldset>
      </div>
    </section>
  );
}

export { Planner };

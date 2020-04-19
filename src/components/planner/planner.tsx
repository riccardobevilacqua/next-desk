import React, { useState } from 'react';

import { LocationPicker } from '../location-picker/location-picker';
import { LocationCard } from '../location-card/location-card';

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

  const destinations = locations.reduce((acc, current, index) => {
    if (departureLocation && departureLocation !== '' && current !== departureLocation) {
      acc.push(<LocationCard title={current} key={index} />);
    }

    return acc;
  }, []);

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

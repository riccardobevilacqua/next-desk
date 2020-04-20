import React, { useState, useEffect } from 'react';

import { Location } from '../../common/location';
import { LocationPicker } from '../location-picker/location-picker';
import { LocationCard } from '../location-card/location-card';


const locations: Location[] = [
  {
    city: 'Amsterdam',
    country: 'NL'
  },
  {
    city: 'Budapest',
    country: 'HU'
  },
  {
    city: 'Madrid',
    country: 'ES'
  }
];

const Planner: React.FunctionComponent = () => {
  const [departureLocation, setDepartureLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/forecasts/2759794');
      const parsed = await response.json();

      console.info(parsed);
    };

    fetchData();
  }, []);

  const handleDepartureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartureLocation(e.target.value)
  };

  const destinations = locations.reduce((acc, current, index) => {
    if (departureLocation && departureLocation !== '' && current.city !== departureLocation) {
      acc.push(<LocationCard title={current.city} key={index} />);
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

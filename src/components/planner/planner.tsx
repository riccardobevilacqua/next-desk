import React, { useState, useEffect } from 'react';

import { Location } from '../../common/location';
import { LocationPicker } from '../location-picker/location-picker';
import { LocationCard } from '../location-card/location-card';

const locations: Location[] = [
  {
    city: 'Amsterdam',
    country: 'NL',
    forecastId: 2759794,
  },
  {
    city: 'Budapest',
    country: 'HU',
    forecastId: 3054643,
  },
  {
    city: 'Madrid',
    country: 'ES',
    forecastId: 3117735
  }
];

const Planner: React.FunctionComponent = () => {
  const [departureLocation, setDepartureLocation] = useState('');
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    if (departureLocation && departureLocation !== '') {
      locations.forEach(location => {
        if (location.city !== departureLocation) {
          fetchData(location.forecastId);
        }
      });
    }
  }, [departureLocation]);

  const fetchData = async (forecastId: number) => {
    const response = await fetch('/api/forecasts/' + forecastId);
    const parsed = await response.json();

    setForecasts(prevState => {
      const list = [...prevState];
      const index = list.findIndex(item => item.city.id === forecastId);

      if (index > -1) {
        return list.map(item => item.city.id === forecastId ? parsed : item);
      } else {
        return [...list, parsed];
      }
    });
  };

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

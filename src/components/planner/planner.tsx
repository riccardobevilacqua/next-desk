import React, { useState, useEffect } from 'react';

import { LocationPicker } from '../location-picker/location-picker';
import { LocationCard } from '../location-card/location-card';
import { locations } from '../../common/location';

const Planner: React.FunctionComponent = () => {
  const [departureLocation, setDepartureLocation] = useState('');
  const [forecasts, setForecasts] = useState([]);

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

  useEffect(() => {
    if (departureLocation && departureLocation !== '') {
      locations.forEach(location => {
        if (location.city !== departureLocation) {
          fetchData(location.forecastId);
        }
      });
    }
  }, [departureLocation]);

  const handleDepartureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartureLocation(e.target.value)
  };

  const destinations = forecasts.reduce((acc, current, index) => {
    if (departureLocation && departureLocation !== '' && current.city.name !== departureLocation) {
      acc.push(<LocationCard title={current.city.name} forecast={current.list} key={index} />);
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

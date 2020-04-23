import React, { useState, useEffect } from 'react';

import { LocationPicker } from '../location-picker/location-picker';
import { LocationCard } from '../location-card/location-card';
import { Location, locations } from '../../common/location';

const forecastServiceURL = 'https://api.openweathermap.org/data/2.5/onecall';

const Planner: React.FunctionComponent = () => {
  const [departureLocation, setDepartureLocation] = useState('');
  const [forecasts, setForecasts] = useState([]);

  const fetchData = async (location: Location) => {
    const response = await fetch(`${forecastServiceURL}?units=metric&lat=${location.lat}&lon=${location.lon}&appid=${process.env.FORECAST_API_KEY}`);
    const parsed = await response.json();

    setForecasts(prevState => {
      const others = [...prevState].filter(item => item.lat !== location.lat && item.lon !== location.lon);

      return [...others, parsed];
    });
  };

  useEffect(() => {
    if (departureLocation && departureLocation !== '') {
      locations.forEach(location => {
        if (location.city !== departureLocation) {
          fetchData(location);
        }
      });
    }
  }, [departureLocation]);

  const handleDepartureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDepartureLocation(e.target.value);
  };

  const destinations = locations.reduce((acc, currentLocation, index) => {
    if (departureLocation && departureLocation !== '' && currentLocation.city !== departureLocation) {
      const locationForecast = forecasts.find(item => item.lat === currentLocation.lat && item.lon === currentLocation.lon);
      acc.push(<LocationCard title={currentLocation.city} forecast={locationForecast} key={index} />);
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

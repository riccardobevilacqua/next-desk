import React, { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';

import { LocationPicker } from '../location-picker/location-picker';
import { LocationCard } from '../location-card/location-card';
import { Location, locations } from '../../common/location';
import { useDebounce } from '../../common/debounce';

const forecastServiceURL = 'https://api.openweathermap.org/data/2.5/onecall';
const flightServiceURL = 'https://kiwicom-prod.apigee.net/v2/search';

const flightDateFormat = 'dd/MM/yyyy';
const flightDaysQty = 7;
const flightMaxStopOver = 1;
const currency = 'EUR';

const Planner: React.FunctionComponent = () => {
  const [departureLocationId, setDepartureLocationId] = useState('');
  const [forecasts, setForecasts] = useState([]);
  const [flights, setFlights] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const debouncedDepartureLocationId = useDebounce(departureLocationId, 5000);

  const fetchForecast = async (location: Location) => {
    const response = await fetch(`${forecastServiceURL}?units=metric&lat=${location.lat}&lon=${location.lon}&appid=${process.env.FORECAST_API_KEY}`);
    const parsed = await response.json();

    setForecasts(prevState => {
      const others = [...prevState].filter(item => item.lat !== location.lat && item.lon !== location.lon);

      return [...others, parsed];
    });
  };

  const fetchFlight = async (location: Location) => {
    const dateFrom = format(new Date(), flightDateFormat);
    const dateTo = format(addDays(new Date(), flightDaysQty), flightDateFormat);
    const response = await fetch(`${flightServiceURL}?fly_from=${departureLocationId}&fly_to=${location.id}&max_stopovers=${flightMaxStopOver}&dateFrom=${dateFrom}&dateTo=${dateTo}&curr=${currency}&apikey=${process.env.FLIGHT_API_KEY}`);
    const parsed = await response.json();

    setFlights(prevState => {
      const others = [...prevState].filter(item => item.data && item.data.length > 0 && item.data[0].flyTo !== location.id);

      return [...others, parsed];
    });
  };

  useEffect(() => {
    if (departureLocationId && departureLocationId !== '') {
      locations.forEach(location => {
        if (location.id !== departureLocationId) {
          fetchForecast(location);
          fetchFlight(location);
        }
      });
    }
  }, [debouncedDepartureLocationId]);

  useEffect(() => {
    const cards = locations.reduce((acc, currentLocation) => {
      if (departureLocationId && departureLocationId !== '' && currentLocation.id !== departureLocationId) {
        const locationForecast = forecasts.find(item => item.lat === currentLocation.lat && item.lon === currentLocation.lon);
        const locationFlight = flights.find(item => item.data && item.data.length > 0 && item.data[0].flyTo === currentLocation.id);
        acc.push(
          <LocationCard
            title={currentLocation.city}
            forecast={locationForecast}
            flight={locationFlight}
            currency={currency}
            key={currentLocation.id}
          />
        );
      }

      return acc;
    }, []);

    setDestinations(cards);
  }, [forecasts, flights]);

  const handleDepartureChange = (locationId: string) => {
    if (locationId && locationId !== departureLocationId) {
      setDepartureLocationId(locationId);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <LocationPicker
          label="Depart from:"
          value={departureLocationId}
          locations={locations}
          onChange={handleDepartureChange}
        />
        <article className="message is-warning">
          <div className="message-body">
            <sup>*</sup> Due to COVID-19 flights might experience disruptions.
          </div>
        </article>
        {destinations}
      </div>
    </section>
  );
}

export { Planner };

import React, { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';

import { LocationPicker } from '../location-picker/location-picker';
import { LocationCard } from '../location-card/location-card';
import { Location, locations } from '../../common/location';


interface PlannerProps {
  flightDateFormat?: string;
  flightDaysQty?: number;
  flightMaxStopOver?: number;
  currencyId?: string;
  languageId?: string;
}

const Planner: React.FunctionComponent<PlannerProps> = ({
  flightDateFormat = 'dd/MM/yyyy',
  flightDaysQty = 7,
  flightMaxStopOver = 1,
  currencyId = 'EUR',
  languageId = 'en-GB'
}: PlannerProps) => {
  const [departureLocationId, setDepartureLocationId] = useState('');
  const [forecasts, setForecasts] = useState([]);
  const [flights, setFlights] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const fetchForecast = async (location: Location) => {
    const response = await fetch(`./.netlify/functions/forecast?lat=${location.lat}&lon=${location.lon}`);
    const parsed = await response.json();

    setForecasts(prevState => {
      const others = [...prevState].filter(item => item.lat !== location.lat && item.lon !== location.lon);

      return [...others, parsed];
    });
  };

  const fetchFlight = async (location: Location) => {
    const dateFrom = format(new Date(), flightDateFormat);
    const dateTo = format(addDays(new Date(), flightDaysQty), flightDateFormat);
    const response = await fetch(`./.netlify/functions/flight?fly_from=${departureLocationId}&fly_to=${location.id}&max_stopovers=${flightMaxStopOver}&dateFrom=${dateFrom}&dateTo=${dateTo}&curr=${currencyId}`);
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
  }, [departureLocationId]);

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
            currencyId={currencyId}
            languageId={languageId}
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

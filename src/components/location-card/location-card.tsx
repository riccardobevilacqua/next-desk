import React, { useState, useEffect } from 'react';
import { format, fromUnixTime } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

import { Forecast } from '../../common/forecast';
import { Flight } from '../../common/flight';

interface LocationCardProps {
  title: string;
  forecast: Forecast;
  flight: Flight;
  daysQty?: number;
  flightsQty?: number;
  currency?: string;
}

const forecastDateFormat = 'EEEEEE dd/MM';
const flightDateFormat = 'EEEEEE dd/MM';
const flightTimeFormat = 'HH:mm';
const forecastTempFormat = '°C';

const LocationCard: React.FunctionComponent<LocationCardProps> = ({
  title,
  forecast,
  flight,
  daysQty = 5,
  flightsQty = 5,
  currency = 'EUR'
}: LocationCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  let forecastList: JSX.Element[] = [];
  let flightList: JSX.Element[] = [];

  useEffect(() => {
    setIsLoading(forecastList.length === 0 || flightList.length === 0);
  }, [forecastList, flightList]);


  if (forecast && forecast.daily && forecast.daily.length > 0) {
    forecastList = [...(forecast.daily)].slice(0, daysQty).map((item, index) => {
      const date = format(fromUnixTime(item.dt), forecastDateFormat);
      const description = item.weather[0].description;
      const temperature = Math.round(item.temp.day);

      return (
        <tr key={index}>
          <td>{date}</td>
          <td className="is-capitalized">{description}</td>
          <td>{temperature}{forecastTempFormat}</td>
        </tr>
      );
    });
  }

  if (flight && flight.data && flight.data.length > 0) {
    flightList = [...flight.data].slice(0, flightsQty).map(item => {
      const dateRaw = new Date(item.local_departure);
      const date = format(dateRaw, flightDateFormat);
      const time = format(dateRaw, flightTimeFormat);
      return (
        <tr key={item.id}>
          <td>{date}</td>
          <td>{time}</td>
          <td>{item.price} {currency}</td>
        </tr>
      );
    });
  }

  return (
    <div className="box">
      <div className="content">
        <h2 className="title is-spaced">{title}</h2>
        <div className="columns">
          <div className="column">
            <h3 className="subtitle">Forecast</h3>
            <table className="table">
              <tbody>{forecastList}</tbody>
            </table>
          </div>
          <div className="column">
            <h3 className="subtitle">Flights</h3>
            <table className="table">
              <tbody>{flightList}</tbody>
            </table>
          </div>
        </div>
        {
          isLoading ?
            <div className="has-text-centered">
              <FontAwesomeIcon icon={faCompass} spin color="green" />
            </div>
            : null
        }
      </div>
    </div>
  );
}

export { LocationCard, LocationCardProps };

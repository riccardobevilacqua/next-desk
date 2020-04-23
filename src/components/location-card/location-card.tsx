import React from 'react';
import { format, fromUnixTime } from 'date-fns';

interface LocationCardProps {
  title: string;
  forecast: Forecast;
}

const LocationCard: React.FunctionComponent<LocationCardProps> = (props: LocationCardProps) => {
  let weatherList: JSX.Element[];

  if (props.forecast && props.forecast.daily) {
    weatherList = [...(props.forecast.daily)].map((item, index) => {
      return (
        <tr key={index}>
          <td>{format(fromUnixTime(item.dt), 'EEE dd/MM')}</td>
          <td>{item.weather[0].description}</td>
          <td>{Math.round(item.temp.day)}&deg;C</td>
        </tr>
      );
    });
  }

  return (
    <div className="box">
      <div className="content">
        <p className="title">{props.title}</p>
        <table className="table">
          <tbody>{weatherList}</tbody>
        </table>
      </div>
    </div>
  );
}

export { LocationCard, LocationCardProps };

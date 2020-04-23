import React from 'react';
import { format, fromUnixTime } from 'date-fns';

interface LocationCardProps {
  title: string;
  forecast: Forecast;
  daysQty?: number;
}

const forecastDateFormat = 'EEEEEE dd/MM';
const forecastTempFormat = '°C';

const LocationCard: React.FunctionComponent<LocationCardProps> = ({
  title,
  forecast,
  daysQty = 5,
}: LocationCardProps) => {
  let weatherList: JSX.Element[];

  if (forecast && forecast.daily) {
    weatherList = [...(forecast.daily)].slice(0, daysQty).map((item, index) => {
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

  return (
    <div className="box">
      <div className="content">
        <p className="title">{title}</p>
        <table className="table">
          <tbody>{weatherList}</tbody>
        </table>
      </div>
    </div>
  );
}

export { LocationCard, LocationCardProps };

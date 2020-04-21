export interface Location {
  city: string;
  country: string;
  forecastId: number;
  lat: number;
  lon: number;
}

const locations: Location[] = [
  {
    city: 'Amsterdam',
    country: 'NL',
    forecastId: 2759794,
    lat: 52.37,
    lon: 4.89
  },
  {
    city: 'Budapest',
    country: 'HU',
    forecastId: 3054643,
    lat: 47.5,
    lon: 19.04
  },
  {
    city: 'Madrid',
    country: 'ES',
    forecastId: 3117735,
    lat: 40.42,
    lon: 3.7
  }
];

export { locations };

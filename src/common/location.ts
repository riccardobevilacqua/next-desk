export interface Location {
  city: string;
  country: string;
  forecastId: number;
}

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

export { locations };

export interface Location {
  id: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
}

export const locations: Location[] = [
  {
    id: 'AMS',
    city: 'Amsterdam',
    country: 'NL',
    lat: 52.37,
    lon: 4.89
  },
  {
    id: 'BUD',
    city: 'Budapest',
    country: 'HU',
    lat: 47.5,
    lon: 19.04
  },
  {
    id: 'MAD',
    city: 'Madrid',
    country: 'ES',
    lat: 40.42,
    lon: 3.7
  }
];

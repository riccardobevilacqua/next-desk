export interface Flight {
  search_id: string;
  data: Datum[];
  connections: any[];
  time: number;
  currency: string;
  currency_rate: number;
  fx_rate: number;
  refresh: any[];
  del?: any;
  ref_tasks: any[];
  search_params: Searchparams;
  all_stopover_airports: any[];
  all_airlines: any[];
}

export interface Searchparams {
  flyFrom_type: string;
  to_type: string;
  seats: Seats;
}

export interface Seats {
  passengers: number;
  adults: number;
  children: number;
  infants: number;
}

export interface Datum {
  id: string;
  route: Route[];
  nightsInDest?: any;
  duration: FlightDuration;
  flyFrom: string;
  cityFrom: string;
  cityCodeFrom: string;
  countryFrom: CountryFrom;
  flyTo: string;
  cityTo: string;
  cityCodeTo: string;
  countryTo: CountryFrom;
  distance: number;
  routes: string[][];
  airlines: string[];
  pnr_count: number;
  virtual_interlining: boolean;
  has_airport_change: boolean;
  technical_stops: number;
  price: number;
  bags_price: Bagsprice;
  baglimit: Baglimit;
  availability: Availability;
  facilitated_booking_available: boolean;
  transfers: any[];
  type_flights: string[];
  conversion: Conversion;
  fare: Fare;
  price_dropdown: Pricedropdown;
  quality: number;
  booking_token: string;
  local_arrival: string;
  utc_arrival: string;
  local_departure: string;
  utc_departure: string;
}

export interface Pricedropdown {
  base_fare: number;
  fees: number;
}

export interface Fare {
  adults: number;
  children: number;
  infants: number;
}

export interface Conversion {
  EUR: number;
}

export interface Availability {
  seats?: number;
}

export interface Baglimit {
  hand_width: number;
  hand_height: number;
  hand_length: number;
  hand_weight: number;
  hold_width: number;
  hold_height: number;
  hold_length: number;
  hold_dimensions_sum: number;
  hold_weight: number;
}

export interface Bagsprice {
  '1': number;
  '2'?: number;
}

export interface CountryFrom {
  code: string;
  name: string;
}

export interface FlightDuration {
  departure: number;
  return: number;
  total: number;
}

export interface Route {
  fare_basis: string;
  fare_category: string;
  fare_classes: string;
  fare_family: string;
  last_seen: string;
  refresh_timestamp: string;
  return: number;
  bags_recheck_required: boolean;
  guarantee: boolean;
  id: string;
  combination_id: string;
  cityTo: string;
  cityFrom: string;
  cityCodeFrom: string;
  cityCodeTo: string;
  flyTo: string;
  flyFrom: string;
  airline: string;
  operating_carrier: string;
  equipment?: string | string;
  flight_no: number;
  vehicle_type: string;
  operating_flight_no: string;
  local_arrival: string;
  utc_arrival: string;
  local_departure: string;
  utc_departure: string;
}

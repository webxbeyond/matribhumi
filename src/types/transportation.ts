export interface Airport {
  id: string;
  name: string;
  bn_name: string;
  iata_code: string;
  icao_code: string;
  district: string;
  division: string;
  type: 'international' | 'domestic' | 'military';
  coordinates: {
    lat: number;
    lon: number;
  };
  contact_info: {
    phone?: string;
    email?: string;
    website?: string;
  };
  facilities?: string[];
  airlines?: string[];
  runway_length?: number; // in meters
  passenger_capacity?: string;
  operating_hours?: string;
}

export interface BusStation {
  id: string;
  name: string;
  bn_name: string;
  district: string;
  division: string;
  type: 'intercity' | 'local' | 'highway';
  coordinates?: {
    lat: number;
    lon: number;
  };
  contact_info: {
    phone?: string;
    address: string;
  };
  routes?: string[];
  operators?: string[];
  facilities?: string[];
}

export interface RailwayStation {
  id: string;
  name: string;
  bn_name: string;
  district: string;
  division: string;
  type: 'main' | 'junction' | 'terminal' | 'halt';
  coordinates?: {
    lat: number;
    lon: number;
  };
  contact_info: {
    phone?: string;
    address: string;
  };
  lines?: string[];
  facilities?: string[];
  platforms?: number;
}
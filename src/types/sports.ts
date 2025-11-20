export interface SportsFacility {
  id: string;
  name: string;
  bn_name: string;
  type: 'stadium' | 'arena' | 'field' | 'complex' | 'court' | 'pool' | 'track';
  sport_types: string[];
  district: string;
  division: string;
  capacity?: number;
  coordinates?: {
    lat: number;
    lon: number;
  };
  contact_info: {
    phone?: string;
    email?: string;
    website?: string;
    address: string;
  };
  facilities?: string[];
  ownership: 'government' | 'private' | 'club' | 'educational';
  established?: number;
  major_events?: string[];
  operating_hours?: string;
  rental_info?: {
    available: boolean;
    rates?: {
      hourly?: number;
      daily?: number;
      currency: string;
    };
  };
}
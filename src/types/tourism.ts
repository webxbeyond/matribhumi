export interface TouristAttraction {
  id: string;
  name: string;
  bn_name: string;
  type: 'historical' | 'natural' | 'cultural' | 'religious' | 'adventure' | 'beach' | 'hill' | 'park';
  district: string;
  division: string;
  description: string;
  best_time_to_visit: string;
  entry_fee?: number;
  opening_hours?: string;
  coordinates?: {
    lat: number;
    lon: number;
  };
  contact_info?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  facilities?: string[];
  nearby_attractions?: string[];
  rating?: number;
  visitor_count?: string;
}
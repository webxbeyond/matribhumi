export interface EnvironmentalSite {
  id: string;
  name: string;
  bn_name: string;
  type: 'national-park' | 'wildlife-sanctuary' | 'eco-park' | 'wetland' | 'mangrove-forest' | 'hill-station' | 'marine-protected-area';
  district: string;
  division: string;
  area_sq_km: number;
  established: number;
  description: string;
  biodiversity: {
    flora?: string[];
    fauna?: string[];
    endangered_species?: string[];
  };
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
  best_time_to_visit: string;
  conservation_status: 'excellent' | 'good' | 'fair' | 'poor';
  unesco_status?: boolean;
  entry_fee?: number;
  operating_hours?: string;
}
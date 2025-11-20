export interface HealthcareFacility {
  id: string;
  name: string;
  type: 'hospital' | 'clinic' | 'medical_college' | 'diagnostic_center';
  district: string;
  division: string;
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  coordinates?: {
    lat: number;
    lon: number;
  };
  specialties?: string[];
  beds?: number;
  emergencyServices: boolean;
}

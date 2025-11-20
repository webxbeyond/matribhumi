export interface GovernmentOffice {
  id: string;
  name: string;
  bn_name: string;
  type: 'administrative' | 'service' | 'law-enforcement' | 'postal' | 'revenue' | 'education' | 'health' | 'utility';
  category: 'central' | 'district' | 'upazila' | 'municipal' | 'union';
  district: string;
  division: string;
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
  services?: string[];
  working_hours?: string;
  jurisdiction?: string;
  head_official?: {
    title: string;
    name?: string;
  };
  departments?: string[];
}
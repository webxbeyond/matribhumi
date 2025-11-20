export interface EducationalInstitution {
  id: string;
  name: string;
  bn_name: string;
  type: 'university' | 'medical-college' | 'engineering-college' | 'college' | 'school' | 'madrasa' | 'polytechnic';
  category: 'public' | 'private' | 'autonomous' | 'international';
  district: string;
  division: string;
  established: number;
  description?: string;
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
  departments?: string[];
  student_count?: number;
  faculty_count?: number;
  accreditation?: string[];
  ranking?: {
    national?: number;
    international?: number;
  };
  admission_info?: {
    application_deadline?: string;
    requirements?: string[];
    fees?: {
      admission?: number;
      tuition?: number;
      currency: string;
    };
  };
}
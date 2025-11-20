import { educationalInstitutions } from '../data/education/education';
import { EducationalInstitution } from '../types/education';

/**
 * Get all educational institutions
 */
export function getAllEducationalInstitutions(): EducationalInstitution[] {
  return educationalInstitutions;
}

/**
 * Get educational institutions by district
 */
export function getEducationalInstitutionsByDistrict(district: string): EducationalInstitution[] {
  return educationalInstitutions.filter(institution =>
    institution.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Get educational institutions by division
 */
export function getEducationalInstitutionsByDivision(division: string): EducationalInstitution[] {
  return educationalInstitutions.filter(institution =>
    institution.division.toLowerCase() === division.toLowerCase()
  );
}

/**
 * Get educational institutions by type
 */
export function getEducationalInstitutionsByType(type: EducationalInstitution['type']): EducationalInstitution[] {
  return educationalInstitutions.filter(institution => institution.type === type);
}

/**
 * Get educational institutions by category
 */
export function getEducationalInstitutionsByCategory(category: EducationalInstitution['category']): EducationalInstitution[] {
  return educationalInstitutions.filter(institution => institution.category === category);
}

/**
 * Search educational institutions by name or description
 */
export function searchEducationalInstitutions(query: string): EducationalInstitution[] {
  const searchTerm = query.toLowerCase();
  return educationalInstitutions.filter(institution =>
    institution.name.toLowerCase().includes(searchTerm) ||
    institution.bn_name.includes(searchTerm) ||
    institution.description?.toLowerCase().includes(searchTerm) ||
    institution.district.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get top-ranked educational institutions
 */
export function getTopRankedEducationalInstitutions(limit: number = 10): EducationalInstitution[] {
  return educationalInstitutions
    .filter(institution => institution.ranking?.national)
    .sort((a, b) => (a.ranking?.national || 999) - (b.ranking?.national || 999))
    .slice(0, limit);
}

/**
 * Get educational institutions with specific facilities
 */
export function getEducationalInstitutionsWithFacilities(facilities: string[]): EducationalInstitution[] {
  return educationalInstitutions.filter(institution =>
    facilities.every(facility =>
      institution.facilities?.some(f => f.toLowerCase().includes(facility.toLowerCase()))
    )
  );
}

/**
 * Get educational institutions by establishment year range
 */
export function getEducationalInstitutionsByEstablishedYearRange(startYear: number, endYear: number): EducationalInstitution[] {
  return educationalInstitutions.filter(institution =>
    institution.established >= startYear && institution.established <= endYear
  );
}

/**
 * Get educational institutions by student count range
 */
export function getEducationalInstitutionsByStudentCount(minStudents: number, maxStudents?: number): EducationalInstitution[] {
  return educationalInstitutions.filter(institution => {
    if (!institution.student_count) return false;
    if (maxStudents) {
      return institution.student_count >= minStudents && institution.student_count <= maxStudents;
    }
    return institution.student_count >= minStudents;
  });
}

/**
 * Get educational institution by ID
 */
export function getEducationalInstitutionById(id: string): EducationalInstitution | null {
  return educationalInstitutions.find(institution => institution.id === id) || null;
}

/**
 * Get educational institutions with contact information
 */
export function getEducationalInstitutionsWithContactInfo(): EducationalInstitution[] {
  return educationalInstitutions.filter(institution =>
    institution.contact_info.phone || institution.contact_info.email || institution.contact_info.website
  );
}

/**
 * Get educational institutions grouped by type
 */
export function getEducationalInstitutionsGroupedByType(): Record<EducationalInstitution['type'], EducationalInstitution[]> {
  return educationalInstitutions.reduce((groups, institution) => {
    if (!groups[institution.type]) {
      groups[institution.type] = [];
    }
    groups[institution.type].push(institution);
    return groups;
  }, {} as Record<EducationalInstitution['type'], EducationalInstitution[]>);
}

/**
 * Get educational institutions grouped by category
 */
export function getEducationalInstitutionsGroupedByCategory(): Record<EducationalInstitution['category'], EducationalInstitution[]> {
  return educationalInstitutions.reduce((groups, institution) => {
    if (!groups[institution.category]) {
      groups[institution.category] = [];
    }
    groups[institution.category].push(institution);
    return groups;
  }, {} as Record<EducationalInstitution['category'], EducationalInstitution[]>);
}

/**
 * Get universities only
 */
export function getUniversities(): EducationalInstitution[] {
  return getEducationalInstitutionsByType('university');
}

/**
 * Get medical colleges only
 */
export function getMedicalColleges(): EducationalInstitution[] {
  return getEducationalInstitutionsByType('medical-college');
}

/**
 * Get engineering colleges only
 */
export function getEngineeringColleges(): EducationalInstitution[] {
  return getEducationalInstitutionsByType('engineering-college');
}

/**
 * Get public institutions only
 */
export function getPublicInstitutions(): EducationalInstitution[] {
  return getEducationalInstitutionsByCategory('public');
}

/**
 * Get private institutions only
 */
export function getPrivateInstitutions(): EducationalInstitution[] {
  return getEducationalInstitutionsByCategory('private');
}
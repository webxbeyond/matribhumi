import { healthcareFacilities } from '../data';
import type { HealthcareFacility } from '../types';

/**
 * Gets all healthcare facilities
 * @returns Array of all healthcare facilities
 */
export function getAllHealthcareFacilities(): HealthcareFacility[] {
  return healthcareFacilities;
}

/**
 * Gets healthcare facilities by district
 * @param district - District name
 * @returns Array of healthcare facilities in the district
 */
export function getHealthcareFacilitiesByDistrict(
  district: string
): HealthcareFacility[] {
  return healthcareFacilities.filter(
    (facility) => facility.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Gets healthcare facilities by division
 * @param division - Division name
 * @returns Array of healthcare facilities in the division
 */
export function getHealthcareFacilitiesByDivision(
  division: string
): HealthcareFacility[] {
  return healthcareFacilities.filter(
    (facility) => facility.division.toLowerCase() === division.toLowerCase()
  );
}

/**
 * Gets healthcare facilities by type
 * @param type - Facility type
 * @returns Array of healthcare facilities of the specified type
 */
export function getHealthcareFacilitiesByType(
  type: HealthcareFacility['type']
): HealthcareFacility[] {
  return healthcareFacilities.filter((facility) => facility.type === type);
}

/**
 * Searches healthcare facilities by name (partial match)
 * @param query - Search query
 * @returns Array of matching healthcare facilities
 */
export function searchHealthcareFacilities(
  query: string
): HealthcareFacility[] {
  const searchTerm = query.toLowerCase();
  return healthcareFacilities.filter(
    (facility) =>
      facility.name.toLowerCase().includes(searchTerm) ||
      facility.address.toLowerCase().includes(searchTerm)
  );
}

/**
 * Gets healthcare facilities with emergency services
 * @returns Array of healthcare facilities with emergency services
 */
export function getEmergencyFacilities(): HealthcareFacility[] {
  return healthcareFacilities.filter((facility) => facility.emergencyServices);
}

/**
 * Gets healthcare facilities by specialty
 * @param specialty - Medical specialty
 * @returns Array of healthcare facilities offering the specialty
 */
export function getFacilitiesBySpecialty(
  specialty: string
): HealthcareFacility[] {
  return healthcareFacilities.filter((facility) =>
    facility.specialties?.some((spec) =>
      spec.toLowerCase().includes(specialty.toLowerCase())
    )
  );
}

/**
 * Gets a specific healthcare facility by ID
 * @param id - Facility ID
 * @returns Healthcare facility or null if not found
 */
export function getHealthcareFacilityById(
  id: string
): HealthcareFacility | null {
  return healthcareFacilities.find((facility) => facility.id === id) || null;
}

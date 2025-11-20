import { postalCodes } from '../data';
import type { PostalCode } from '../types';

/**
 * Gets postal code information by postal code
 * @param code - The postal code to search for
 * @returns Postal code information or null if not found
 */
export function getPostalCodeInfo(code: string): PostalCode | null {
  return postalCodes.find((pc) => pc.code === code) || null;
}

/**
 * Gets all postal codes for a specific district
 * @param district - District name
 * @returns Array of postal codes in the district
 */
export function getPostalCodesByDistrict(district: string): PostalCode[] {
  return postalCodes.filter(
    (pc) => pc.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Gets all postal codes for a specific division
 * @param division - Division name
 * @returns Array of postal codes in the division
 */
export function getPostalCodesByDivision(division: string): PostalCode[] {
  return postalCodes.filter(
    (pc) => pc.division.toLowerCase() === division.toLowerCase()
  );
}

/**
 * Searches postal codes by area name (partial match)
 * @param area - Area name to search for
 * @returns Array of matching postal codes
 */
export function searchPostalCodesByArea(area: string): PostalCode[] {
  const searchTerm = area.toLowerCase();
  return postalCodes.filter((pc) => pc.area.toLowerCase().includes(searchTerm));
}

/**
 * Gets all available postal codes
 * @returns Array of all postal codes
 */
export function getAllPostalCodes(): PostalCode[] {
  return postalCodes;
}

/**
 * Validates if a postal code exists
 * @param code - Postal code to validate
 * @returns True if postal code exists, false otherwise
 */
export function isValidPostalCode(code: string): boolean {
  return postalCodes.some((pc) => pc.code === code);
}

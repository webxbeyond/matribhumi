import { districts, divisions, unions, upazillas } from '../data';
import { District, Division, Union, Upazilla } from '../types';

// --------------------------------

/**
 * Gets a division by name (English or Bengali).
 * @param name - The name of the division.
 * @returns The division object.
 * @throws Error if division not found or name is empty.
 */
export function getDivision(name: string): Division {
  if (!name || name.trim() === '') {
    throw new Error('Division name is required');
  }

  const division = divisions.find(
    (division) =>
      division.name.toLowerCase() === name.toLowerCase() ||
      division.bn_name === name
  );

  if (!division) {
    throw new Error(`Division not found for name: ${name}`);
  }

  return division;
}

/**
 * Gets a district by name (English or Bengali).
 * @param name - The name of the district.
 * @returns The district object.
 * @throws Error if district not found or name is empty.
 */
export function getDistrict(name: string): District {
  if (!name || name.trim() === '') {
    throw new Error('District name is required');
  }

  const district = districts.find(
    (district) =>
      district.name.toLowerCase() === name.toLowerCase() ||
      district.bn_name === name
  );

  if (!district) {
    throw new Error(`District not found for name: ${name}`);
  }

  return district;
}

/**
 * Gets an upazilla by name (English or Bengali).
 * @param name - The name of the upazilla.
 * @returns The upazilla object.
 * @throws Error if upazilla not found or name is empty.
 */
export function getUpazilla(name: string): Upazilla {
  if (!name || name.trim() === '') {
    throw new Error('Upazilla name is required');
  }

  const upazilla = upazillas.find(
    (upazilla) =>
      upazilla.name.toLowerCase() === name.toLowerCase() ||
      upazilla.bn_name === name
  );

  if (!upazilla) {
    throw new Error(`Upazilla not found for name: ${name}`);
  }

  return upazilla;
}

/**
 * Gets a union by name (English or Bengali).
 * @param name - The name of the union.
 * @returns The union object.
 * @throws Error if union not found or name is empty.
 */
export function getUnion(name: string): Union {
  if (!name || name.trim() === '') {
    throw new Error('Union name is required');
  }

  const unionData = unions.find(
    (union) =>
      union.name.toLowerCase() === name.toLowerCase() || union.bn_name === name
  );

  if (!unionData) {
    throw new Error(`Union not found for name: ${name}`);
  }

  return unionData;
}

// ----------------------------------------------------------
// Function to get districts by division name
/**
 * Gets all districts in a division.
 * @param name - The name of the division.
 * @returns Array of districts in the division.
 */
export function getDistrictsOfDivision(name: string): District[] {
  const division = getDivision(name);
  return division
    ? districts.filter((district) => district.division_id === division.id)
    : [];
}

/**
 * Gets all upazillas in a district.
 * @param name - The name of the district.
 * @returns Array of upazillas in the district.
 */
export function getUpazillasOfDistrict(name: string): Upazilla[] {
  const district = districts.find(
    (district) => district.name.toLowerCase() === name.toLowerCase()
  );
  return district
    ? upazillas.filter((upazilla) => upazilla.district_id === district.id)
    : [];
}

/**
 * Gets all unions in an upazilla.
 * @param name - The name of the upazilla.
 * @returns Array of unions in the upazilla.
 */
export function getUnionsOfUpazilla(name: string): Union[] {
  const upazilla = upazillas.find(
    (upazilla) => upazilla.name.toLowerCase() === name.toLowerCase()
  );
  return upazilla
    ? unions.filter((union) => union.upazilla_id === upazilla.id)
    : [];
}

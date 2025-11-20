import { governmentOffices } from '../data/government/government';
import { GovernmentOffice } from '../types/government';

/**
 * Get all government offices
 */
export function getAllGovernmentOffices(): GovernmentOffice[] {
  return governmentOffices;
}

/**
 * Get government offices by district
 */
export function getGovernmentOfficesByDistrict(district: string): GovernmentOffice[] {
  return governmentOffices.filter(office =>
    office.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Get government offices by division
 */
export function getGovernmentOfficesByDivision(division: string): GovernmentOffice[] {
  return governmentOffices.filter(office =>
    office.division.toLowerCase() === division.toLowerCase()
  );
}

/**
 * Get government offices by type
 */
export function getGovernmentOfficesByType(type: GovernmentOffice['type']): GovernmentOffice[] {
  return governmentOffices.filter(office => office.type === type);
}

/**
 * Get government offices by category
 */
export function getGovernmentOfficesByCategory(category: GovernmentOffice['category']): GovernmentOffice[] {
  return governmentOffices.filter(office => office.category === category);
}

/**
 * Search government offices by name or services
 */
export function searchGovernmentOffices(query: string): GovernmentOffice[] {
  const searchTerm = query.toLowerCase();
  return governmentOffices.filter(office =>
    office.name.toLowerCase().includes(searchTerm) ||
    office.bn_name.includes(searchTerm) ||
    office.services?.some(service => service.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get government offices that provide specific services
 */
export function getGovernmentOfficesByService(service: string): GovernmentOffice[] {
  const searchTerm = service.toLowerCase();
  return governmentOffices.filter(office =>
    office.services?.some(s => s.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get district commissioner offices
 */
export function getDistrictCommissionerOffices(): GovernmentOffice[] {
  return governmentOffices.filter(office =>
    office.type === 'administrative' && office.category === 'district'
  );
}

/**
 * Get law enforcement offices
 */
export function getLawEnforcementOffices(): GovernmentOffice[] {
  return getGovernmentOfficesByType('law-enforcement');
}

/**
 * Get postal service offices
 */
export function getPostalServiceOffices(): GovernmentOffice[] {
  return getGovernmentOfficesByType('postal');
}

/**
 * Get government office by ID
 */
export function getGovernmentOfficeById(id: string): GovernmentOffice | null {
  return governmentOffices.find(office => office.id === id) || null;
}

/**
 * Get government offices grouped by type
 */
export function getGovernmentOfficesGroupedByType(): Record<GovernmentOffice['type'], GovernmentOffice[]> {
  return governmentOffices.reduce((groups, office) => {
    if (!groups[office.type]) {
      groups[office.type] = [];
    }
    groups[office.type].push(office);
    return groups;
  }, {} as Record<GovernmentOffice['type'], GovernmentOffice[]>);
}

/**
 * Get government offices grouped by category
 */
export function getGovernmentOfficesGroupedByCategory(): Record<GovernmentOffice['category'], GovernmentOffice[]> {
  return governmentOffices.reduce((groups, office) => {
    if (!groups[office.category]) {
      groups[office.category] = [];
    }
    groups[office.category].push(office);
    return groups;
  }, {} as Record<GovernmentOffice['category'], GovernmentOffice[]>);
}

/**
 * Get central government offices
 */
export function getCentralGovernmentOffices(): GovernmentOffice[] {
  return getGovernmentOfficesByCategory('central');
}

/**
 * Get district-level government offices
 */
export function getDistrictLevelOffices(): GovernmentOffice[] {
  return getGovernmentOfficesByCategory('district');
}
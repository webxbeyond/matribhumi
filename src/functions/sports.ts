import { sportsFacilities } from '../data/sports/sports';
import { SportsFacility } from '../types/sports';

/**
 * Get all sports facilities
 */
export function getAllSportsFacilities(): SportsFacility[] {
  return sportsFacilities;
}

/**
 * Get sports facilities by district
 */
export function getSportsFacilitiesByDistrict(district: string): SportsFacility[] {
  return sportsFacilities.filter(facility =>
    facility.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Get sports facilities by division
 */
export function getSportsFacilitiesByDivision(division: string): SportsFacility[] {
  return sportsFacilities.filter(facility =>
    facility.division.toLowerCase() === division.toLowerCase()
  );
}

/**
 * Get sports facilities by type
 */
export function getSportsFacilitiesByType(type: SportsFacility['type']): SportsFacility[] {
  return sportsFacilities.filter(facility => facility.type === type);
}

/**
 * Get sports facilities by sport type
 */
export function getSportsFacilitiesBySport(sport: string): SportsFacility[] {
  const searchTerm = sport.toLowerCase();
  return sportsFacilities.filter(facility =>
    facility.sport_types.some(s => s.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get sports facilities by ownership
 */
export function getSportsFacilitiesByOwnership(ownership: SportsFacility['ownership']): SportsFacility[] {
  return sportsFacilities.filter(facility => facility.ownership === ownership);
}

/**
 * Get sports facilities with specific facilities
 */
export function getSportsFacilitiesWithFacilities(facilities: string[]): SportsFacility[] {
  return sportsFacilities.filter(facility =>
    facilities.every(f =>
      facility.facilities?.some(fac => fac.toLowerCase().includes(f.toLowerCase()))
    )
  );
}

/**
 * Get sports facilities by capacity range
 */
export function getSportsFacilitiesByCapacity(minCapacity: number, maxCapacity?: number): SportsFacility[] {
  return sportsFacilities.filter(facility => {
    if (!facility.capacity) return false;
    if (maxCapacity) {
      return facility.capacity >= minCapacity && facility.capacity <= maxCapacity;
    }
    return facility.capacity >= minCapacity;
  });
}

/**
 * Get stadiums only
 */
export function getStadiums(): SportsFacility[] {
  return getSportsFacilitiesByType('stadium');
}

/**
 * Get cricket stadiums
 */
export function getCricketFacilities(): SportsFacility[] {
  return getSportsFacilitiesBySport('cricket');
}

/**
 * Get football facilities
 */
export function getFootballFacilities(): SportsFacility[] {
  return getSportsFacilitiesBySport('football');
}

/**
 * Get swimming pools
 */
export function getSwimmingPools(): SportsFacility[] {
  return getSportsFacilitiesByType('pool');
}

/**
 * Get sports facility by ID
 */
export function getSportsFacilityById(id: string): SportsFacility | null {
  return sportsFacilities.find(facility => facility.id === id) || null;
}

/**
 * Search sports facilities by name
 */
export function searchSportsFacilities(query: string): SportsFacility[] {
  const searchTerm = query.toLowerCase();
  return sportsFacilities.filter(facility =>
    facility.name.toLowerCase().includes(searchTerm) ||
    facility.bn_name.includes(searchTerm) ||
    facility.sport_types.some(s => s.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get sports facilities available for rent
 */
export function getRentableSportsFacilities(): SportsFacility[] {
  return sportsFacilities.filter(facility => facility.rental_info?.available);
}

/**
 * Get government-owned sports facilities
 */
export function getGovernmentSportsFacilities(): SportsFacility[] {
  return getSportsFacilitiesByOwnership('government');
}

/**
 * Get sports facilities grouped by type
 */
export function getSportsFacilitiesGroupedByType(): Record<SportsFacility['type'], SportsFacility[]> {
  return sportsFacilities.reduce((groups, facility) => {
    if (!groups[facility.type]) {
      groups[facility.type] = [];
    }
    groups[facility.type].push(facility);
    return groups;
  }, {} as Record<SportsFacility['type'], SportsFacility[]>);
}

/**
 * Get sports facilities grouped by sport type
 */
export function getSportsFacilitiesGroupedBySport(): Record<string, SportsFacility[]> {
  const groups: Record<string, SportsFacility[]> = {};

  sportsFacilities.forEach(facility => {
    facility.sport_types.forEach(sport => {
      if (!groups[sport]) {
        groups[sport] = [];
      }
      groups[sport].push(facility);
    });
  });

  return groups;
}
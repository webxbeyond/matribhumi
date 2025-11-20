import { EnvironmentalSite } from '../types/environmental';
import { environmentalSites } from '../data/environmental/environmental';

/**
 * Get all environmental sites
 */
export function getEnvironmentalSites(): EnvironmentalSite[] {
  return environmentalSites;
}

/**
 * Get environmental sites by type
 */
export function getEnvironmentalSitesByType(type: EnvironmentalSite['type']): EnvironmentalSite[] {
  return environmentalSites.filter(site => site.type === type);
}

/**
 * Get environmental sites by district
 */
export function getEnvironmentalSitesByDistrict(district: string): EnvironmentalSite[] {
  return environmentalSites.filter(site =>
    site.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Get environmental sites by division
 */
export function getEnvironmentalSitesByDivision(division: string): EnvironmentalSite[] {
  return environmentalSites.filter(site =>
    site.division.toLowerCase() === division.toLowerCase()
  );
}

/**
 * Get national parks
 */
export function getNationalParks(): EnvironmentalSite[] {
  return getEnvironmentalSitesByType('national-park');
}

/**
 * Get wildlife sanctuaries
 */
export function getWildlifeSanctuaries(): EnvironmentalSite[] {
  return getEnvironmentalSitesByType('wildlife-sanctuary');
}

/**
 * Get mangrove forests
 */
export function getMangroveForests(): EnvironmentalSite[] {
  return getEnvironmentalSitesByType('mangrove-forest');
}

/**
 * Get wetlands
 */
export function getWetlands(): EnvironmentalSite[] {
  return getEnvironmentalSitesByType('wetland');
}

/**
 * Get eco parks
 */
export function getEcoParks(): EnvironmentalSite[] {
  return getEnvironmentalSitesByType('eco-park');
}

/**
 * Get hill stations
 */
export function getHillStations(): EnvironmentalSite[] {
  return getEnvironmentalSitesByType('hill-station');
}

/**
 * Get marine protected areas
 */
export function getMarineProtectedAreas(): EnvironmentalSite[] {
  return getEnvironmentalSitesByType('marine-protected-area');
}

/**
 * Get UNESCO recognized sites
 */
export function getUNESCORecognizedSites(): EnvironmentalSite[] {
  return environmentalSites.filter(site => site.unesco_status);
}

/**
 * Get sites with endangered species
 */
export function getSitesWithEndangeredSpecies(): EnvironmentalSite[] {
  return environmentalSites.filter(site =>
    site.biodiversity?.endangered_species && site.biodiversity.endangered_species.length > 0
  );
}

/**
 * Search environmental sites by name
 */
export function searchEnvironmentalSites(query: string): EnvironmentalSite[] {
  const lowerQuery = query.toLowerCase();
  return environmentalSites.filter(site =>
    site.name.toLowerCase().includes(lowerQuery) ||
    site.bn_name.includes(query) ||
    site.description.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get sites by conservation status
 */
export function getSitesByConservationStatus(status: EnvironmentalSite['conservation_status']): EnvironmentalSite[] {
  return environmentalSites.filter(site => site.conservation_status === status);
}

/**
 * Get sites with specific facilities
 */
export function getSitesWithFacilities(facility: string): EnvironmentalSite[] {
  return environmentalSites.filter(site =>
    site.facilities?.some(f => f.toLowerCase().includes(facility.toLowerCase())) ?? false
  );
}

/**
 * Get sites within area range
 */
export function getSitesByAreaRange(minArea: number, maxArea: number): EnvironmentalSite[] {
  return environmentalSites.filter(site =>
    site.area_sq_km >= minArea && site.area_sq_km <= maxArea
  );
}

/**
 * Get sites by entry fee range
 */
export function getSitesByEntryFeeRange(minFee: number, maxFee: number): EnvironmentalSite[] {
  return environmentalSites.filter(site =>
    site.entry_fee !== undefined && site.entry_fee >= minFee && site.entry_fee <= maxFee
  );
}

/**
 * Get sites suitable for a specific season
 */
export function getSitesForSeason(season: 'summer' | 'winter' | 'monsoon'): EnvironmentalSite[] {
  const seasonMappings = {
    summer: ['March to May'],
    winter: ['November to February'],
    monsoon: ['June to October']
  };

  return environmentalSites.filter(site =>
    seasonMappings[season].some(period =>
      site.best_time_to_visit.includes(period)
    )
  );
}

/**
 * Get environmental site by ID
 */
export function getEnvironmentalSiteById(id: string): EnvironmentalSite | undefined {
  return environmentalSites.find(site => site.id === id);
}

/**
 * Get sites with specific biodiversity features
 */
export function getSitesWithBiodiversityFeature(feature: 'flora' | 'fauna' | 'endangered_species', searchTerm: string): EnvironmentalSite[] {
  return environmentalSites.filter(site =>
    site.biodiversity?.[feature]?.some(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    ) ?? false
  );
}

/**
 * Get sites near coordinates (within radius in km)
 */
export function getSitesNearCoordinates(lat: number, lon: number, radiusKm: number = 50): EnvironmentalSite[] {
  const toRadians = (degrees: number) => degrees * (Math.PI / 180);

  return environmentalSites.filter(site => {
    if (!site.coordinates) return false;

    const dLat = toRadians(site.coordinates.lat - lat);
    const dLon = toRadians(site.coordinates.lon - lon);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat)) * Math.cos(toRadians(site.coordinates.lat)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = 6371 * c; // Earth's radius in km
    return distance <= radiusKm;
  });
}
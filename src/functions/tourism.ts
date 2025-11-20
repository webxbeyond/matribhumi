import { touristAttractions } from '../data/tourism/tourism';
import { TouristAttraction } from '../types/tourism';

/**
 * Get all tourist attractions
 */
export function getAllTouristAttractions(): TouristAttraction[] {
  return touristAttractions;
}

/**
 * Get tourist attractions by district
 */
export function getTouristAttractionsByDistrict(district: string): TouristAttraction[] {
  return touristAttractions.filter(attraction =>
    attraction.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Get tourist attractions by division
 */
export function getTouristAttractionsByDivision(division: string): TouristAttraction[] {
  return touristAttractions.filter(attraction =>
    attraction.division.toLowerCase() === division.toLowerCase()
  );
}

/**
 * Get tourist attractions by type
 */
export function getTouristAttractionsByType(type: TouristAttraction['type']): TouristAttraction[] {
  return touristAttractions.filter(attraction => attraction.type === type);
}

/**
 * Search tourist attractions by name or description
 */
export function searchTouristAttractions(query: string): TouristAttraction[] {
  const searchTerm = query.toLowerCase();
  return touristAttractions.filter(attraction =>
    attraction.name.toLowerCase().includes(searchTerm) ||
    attraction.bn_name.includes(searchTerm) ||
    attraction.description.toLowerCase().includes(searchTerm) ||
    attraction.district.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get tourist attractions by budget (entry fee)
 */
export function getTouristAttractionsByBudget(maxFee: number): TouristAttraction[] {
  return touristAttractions.filter(attraction =>
    !attraction.entry_fee || attraction.entry_fee <= maxFee
  );
}

/**
 * Get top-rated tourist attractions
 */
export function getTopRatedTouristAttractions(limit: number = 10): TouristAttraction[] {
  return touristAttractions
    .filter(attraction => attraction.rating)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
}

/**
 * Get tourist attractions with facilities
 */
export function getTouristAttractionsWithFacilities(facilities: string[]): TouristAttraction[] {
  return touristAttractions.filter(attraction =>
    facilities.every(facility =>
      attraction.facilities?.some(f => f.toLowerCase().includes(facility.toLowerCase()))
    )
  );
}

/**
 * Get tourist attractions by season/best time to visit
 */
export function getTouristAttractionsBySeason(season: string): TouristAttraction[] {
  const seasonLower = season.toLowerCase();
  return touristAttractions.filter(attraction =>
    attraction.best_time_to_visit.toLowerCase().includes(seasonLower)
  );
}

/**
 * Get tourist attraction by ID
 */
export function getTouristAttractionById(id: string): TouristAttraction | null {
  return touristAttractions.find(attraction => attraction.id === id) || null;
}

/**
 * Get nearby tourist attractions (within certain coordinates - simplified version)
 */
export function getNearbyTouristAttractions(lat: number, lon: number, radiusKm: number = 50): TouristAttraction[] {
  return touristAttractions.filter(attraction => {
    if (!attraction.coordinates) return false;

    const distance = calculateDistance(
      lat, lon,
      attraction.coordinates.lat, attraction.coordinates.lon
    );
    return distance <= radiusKm;
  });
}

/**
 * Calculate distance between two points (Haversine formula)
 */
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Get tourist attractions grouped by type
 */
export function getTouristAttractionsGroupedByType(): Record<TouristAttraction['type'], TouristAttraction[]> {
  return touristAttractions.reduce((groups, attraction) => {
    if (!groups[attraction.type]) {
      groups[attraction.type] = [];
    }
    groups[attraction.type].push(attraction);
    return groups;
  }, {} as Record<TouristAttraction['type'], TouristAttraction[]>);
}

/**
 * Get tourist attractions with contact information
 */
export function getTouristAttractionsWithContactInfo(): TouristAttraction[] {
  return touristAttractions.filter(attraction => attraction.contact_info);
}
import { districts } from '../data';
import type { District } from '../types';

/**
 * Calculates the distance between two geographic points using the Haversine formula
 * @param lat1 - Latitude of first point
 * @param lon1 - Longitude of first point
 * @param lat2 - Latitude of second point
 * @param lon2 - Longitude of second point
 * @returns Distance in kilometers
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.round(distance * 100) / 100; // Round to 2 decimal places
}

/**
 * Converts degrees to radians
 * @param degrees - Angle in degrees
 * @returns Angle in radians
 */
function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Finds the nearest districts to a given coordinate
 * @param lat - Latitude
 * @param lon - Longitude
 * @param limit - Maximum number of results (default: 5)
 * @returns Array of districts with distances, sorted by proximity
 */
export function findNearestDistricts(
  lat: number,
  lon: number,
  limit: number = 5
): Array<District & { distance: number }> {
  const districtsWithDistance = districts
    .filter((district) => district.lat && district.lon)
    .map((district) => ({
      ...district,
      distance: calculateDistance(
        lat,
        lon,
        parseFloat(district.lat!),
        parseFloat(district.lon!)
      ),
    }))
    .sort((a, b) => a.distance - b.distance);

  return districtsWithDistance.slice(0, limit);
}

/**
 * Searches districts by name (partial match, case insensitive)
 * @param query - Search query
 * @param limit - Maximum number of results (default: 10)
 * @returns Array of matching districts
 */
export function searchDistricts(query: string, limit: number = 10): District[] {
  const searchTerm = query.toLowerCase();
  return districts
    .filter(
      (district) =>
        district.name.toLowerCase().includes(searchTerm) ||
        district.bn_name.includes(searchTerm)
    )
    .slice(0, limit);
}

/**
 * Gets districts within a specified radius from a point
 * @param lat - Latitude of center point
 * @param lon - Longitude of center point
 * @param radiusKm - Radius in kilometers
 * @returns Array of districts within the radius
 */
export function getDistrictsWithinRadius(
  lat: number,
  lon: number,
  radiusKm: number
): District[] {
  return districts
    .filter((district) => district.lat && district.lon)
    .filter((district) => {
      const distance = calculateDistance(
        lat,
        lon,
        parseFloat(district.lat!),
        parseFloat(district.lon!)
      );
      return distance <= radiusKm;
    });
}

/**
 * Converts coordinate string to numbers
 * @param coord - Coordinate as string (e.g., "23.8103")
 * @returns Coordinate as number or null if invalid
 */
export function parseCoordinate(coord: string): number | null {
  const parsed = parseFloat(coord);
  return isNaN(parsed) ? null : parsed;
}

/**
 * Validates if coordinates are within Bangladesh bounds
 * @param lat - Latitude
 * @param lon - Longitude
 * @returns True if coordinates are within Bangladesh
 */
export function isWithinBangladesh(lat: number, lon: number): boolean {
  // Approximate bounds of Bangladesh
  const bounds = {
    north: 26.6338,
    south: 20.7384,
    east: 92.6737,
    west: 88.0108,
  };

  return (
    lat >= bounds.south &&
    lat <= bounds.north &&
    lon >= bounds.west &&
    lon <= bounds.east
  );
}

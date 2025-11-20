import { airports, busStations, railwayStations } from '../data/transportation/transportation';
import { Airport, BusStation, RailwayStation } from '../types/transportation';

/**
 * Get all airports
 */
export function getAllAirports(): Airport[] {
  return airports;
}

/**
 * Get airports by district
 */
export function getAirportsByDistrict(district: string): Airport[] {
  return airports.filter(airport =>
    airport.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Get airports by type
 */
export function getAirportsByType(type: Airport['type']): Airport[] {
  return airports.filter(airport => airport.type === type);
}

/**
 * Get airport by IATA code
 */
export function getAirportByIataCode(iataCode: string): Airport | null {
  return airports.find(airport => airport.iata_code === iataCode.toUpperCase()) || null;
}

/**
 * Get international airports
 */
export function getInternationalAirports(): Airport[] {
  return getAirportsByType('international');
}

/**
 * Get domestic airports
 */
export function getDomesticAirports(): Airport[] {
  return getAirportsByType('domestic');
}

/**
 * Get all bus stations
 */
export function getAllBusStations(): BusStation[] {
  return busStations;
}

/**
 * Get bus stations by district
 */
export function getBusStationsByDistrict(district: string): BusStation[] {
  return busStations.filter(station =>
    station.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Get bus stations by type
 */
export function getBusStationsByType(type: BusStation['type']): BusStation[] {
  return busStations.filter(station => station.type === type);
}

/**
 * Search bus stations by route
 */
export function searchBusStationsByRoute(route: string): BusStation[] {
  const searchTerm = route.toLowerCase();
  return busStations.filter(station =>
    station.routes?.some(r => r.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get all railway stations
 */
export function getAllRailwayStations(): RailwayStation[] {
  return railwayStations;
}

/**
 * Get railway stations by district
 */
export function getRailwayStationsByDistrict(district: string): RailwayStation[] {
  return railwayStations.filter(station =>
    station.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Get railway stations by type
 */
export function getRailwayStationsByType(type: RailwayStation['type']): RailwayStation[] {
  return railwayStations.filter(station => station.type === type);
}

/**
 * Search railway stations by line
 */
export function searchRailwayStationsByLine(line: string): RailwayStation[] {
  const searchTerm = line.toLowerCase();
  return railwayStations.filter(station =>
    station.lines?.some(l => l.toLowerCase().includes(searchTerm))
  );
}

/**
 * Get transportation facilities by district (airports, bus stations, railway stations)
 */
export function getTransportationFacilitiesByDistrict(district: string) {
  return {
    airports: getAirportsByDistrict(district),
    busStations: getBusStationsByDistrict(district),
    railwayStations: getRailwayStationsByDistrict(district)
  };
}

/**
 * Get transportation facilities by division
 */
export function getTransportationFacilitiesByDivision(division: string) {
  return {
    airports: airports.filter(a => a.division.toLowerCase() === division.toLowerCase()),
    busStations: busStations.filter(b => b.division.toLowerCase() === division.toLowerCase()),
    railwayStations: railwayStations.filter(r => r.division.toLowerCase() === division.toLowerCase())
  };
}

/**
 * Search all transportation facilities by name
 */
export function searchTransportationFacilities(query: string) {
  const searchTerm = query.toLowerCase();
  return {
    airports: airports.filter(a =>
      a.name.toLowerCase().includes(searchTerm) ||
      a.bn_name.includes(searchTerm)
    ),
    busStations: busStations.filter(b =>
      b.name.toLowerCase().includes(searchTerm) ||
      b.bn_name.includes(searchTerm)
    ),
    railwayStations: railwayStations.filter(r =>
      r.name.toLowerCase().includes(searchTerm) ||
      r.bn_name.includes(searchTerm)
    )
  };
}

/**
 * Get airports with specific facilities
 */
export function getAirportsWithFacilities(facilities: string[]): Airport[] {
  return airports.filter(airport =>
    facilities.every(facility =>
      airport.facilities?.some(f => f.toLowerCase().includes(facility.toLowerCase()))
    )
  );
}

/**
 * Get bus stations with specific facilities
 */
export function getBusStationsWithFacilities(facilities: string[]): BusStation[] {
  return busStations.filter(station =>
    facilities.every(facility =>
      station.facilities?.some(f => f.toLowerCase().includes(facility.toLowerCase()))
    )
  );
}

/**
 * Get railway stations with specific facilities
 */
export function getRailwayStationsWithFacilities(facilities: string[]): RailwayStation[] {
  return railwayStations.filter(station =>
    facilities.every(facility =>
      station.facilities?.some(f => f.toLowerCase().includes(facility.toLowerCase()))
    )
  );
}
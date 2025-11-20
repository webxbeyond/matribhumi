import { culturalHeritage } from '../data/cultural/cultural';
import { CulturalHeritage } from '../types/cultural';

/**
 * Get all cultural heritage items
 */
export function getAllCulturalHeritage(): CulturalHeritage[] {
  return culturalHeritage;
}

/**
 * Get cultural heritage by type
 */
export function getCulturalHeritageByType(type: CulturalHeritage['type']): CulturalHeritage[] {
  return culturalHeritage.filter(item => item.type === type);
}

/**
 * Get cultural heritage by region
 */
export function getCulturalHeritageByRegion(region: string): CulturalHeritage[] {
  return culturalHeritage.filter(item =>
    item.region.toLowerCase() === region.toLowerCase()
  );
}

/**
 * Get cultural heritage by division
 */
export function getCulturalHeritageByDivision(division: string): CulturalHeritage[] {
  return culturalHeritage.filter(item =>
    item.division?.toLowerCase() === division.toLowerCase()
  );
}

/**
 * Search cultural heritage by name or description
 */
export function searchCulturalHeritage(query: string): CulturalHeritage[] {
  const searchTerm = query.toLowerCase();
  return culturalHeritage.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.bn_name.includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm) ||
    item.significance.toLowerCase().includes(searchTerm)
  );
}

/**
 * Get festivals only
 */
export function getFestivals(): CulturalHeritage[] {
  return getCulturalHeritageByType('festival');
}

/**
 * Get traditional foods
 */
export function getTraditionalFoods(): CulturalHeritage[] {
  return getCulturalHeritageByType('food');
}

/**
 * Get traditional foods by region
 */
export function getTraditionalFoodsByRegion(region: string): CulturalHeritage[] {
  return culturalHeritage.filter(item =>
    item.type === 'food' && item.region.toLowerCase() === region.toLowerCase()
  );
}

/**
 * Get languages
 */
export function getLanguages(): CulturalHeritage[] {
  return getCulturalHeritageByType('language');
}

/**
 * Get music traditions
 */
export function getMusicTraditions(): CulturalHeritage[] {
  return getCulturalHeritageByType('music');
}

/**
 * Get dance forms
 */
export function getDanceForms(): CulturalHeritage[] {
  return getCulturalHeritageByType('dance');
}

/**
 * Get traditional crafts
 */
export function getTraditionalCrafts(): CulturalHeritage[] {
  return getCulturalHeritageByType('craft');
}

/**
 * Get UNESCO recognized cultural heritage
 */
export function getUNESCORecognizedHeritage(): CulturalHeritage[] {
  return culturalHeritage.filter(item => item.unesco_status === true);
}

/**
 * Get cultural heritage by importance level
 */
export function getCulturalHeritageByImportance(importance: CulturalHeritage['cultural_importance']): CulturalHeritage[] {
  return culturalHeritage.filter(item => item.cultural_importance === importance);
}

/**
 * Get high importance cultural heritage
 */
export function getHighImportanceCulturalHeritage(): CulturalHeritage[] {
  return getCulturalHeritageByImportance('high');
}

/**
 * Get cultural heritage item by ID
 */
export function getCulturalHeritageById(id: string): CulturalHeritage | null {
  return culturalHeritage.find(item => item.id === id) || null;
}

/**
 * Get cultural heritage grouped by type
 */
export function getCulturalHeritageGroupedByType(): Record<CulturalHeritage['type'], CulturalHeritage[]> {
  return culturalHeritage.reduce((groups, item) => {
    if (!groups[item.type]) {
      groups[item.type] = [];
    }
    groups[item.type].push(item);
    return groups;
  }, {} as Record<CulturalHeritage['type'], CulturalHeritage[]>);
}

/**
 * Get cultural heritage grouped by region
 */
export function getCulturalHeritageGroupedByRegion(): Record<string, CulturalHeritage[]> {
  return culturalHeritage.reduce((groups, item) => {
    const region = item.region;
    if (!groups[region]) {
      groups[region] = [];
    }
    groups[region].push(item);
    return groups;
  }, {} as Record<string, CulturalHeritage[]>);
}

/**
 * Get national cultural heritage (nationwide significance)
 */
export function getNationalCulturalHeritage(): CulturalHeritage[] {
  return culturalHeritage.filter(item => item.region === 'national');
}

/**
 * Get regional cultural heritage (specific to regions/divisions)
 */
export function getRegionalCulturalHeritage(): CulturalHeritage[] {
  return culturalHeritage.filter(item => item.region !== 'national');
}
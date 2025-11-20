import { Holiday } from '../types';
import { nationalHolidays } from '../data';

/**
 * Gets the list of national holidays in Bangladesh.
 * @returns Array of holiday objects.
 */
export function getHoliday(): Holiday[] {
  return nationalHolidays;
}

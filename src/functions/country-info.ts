import { bangladeshInfo } from '../data';
import type { BangladeshInfo } from '../types';

/**
 * Gets general information about Bangladesh.
 * @returns Array of Bangladesh information objects.
 */
export function getBangladeshInfo(): BangladeshInfo[] {
  return bangladeshInfo;
}

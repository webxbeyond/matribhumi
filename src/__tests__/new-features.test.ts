import {
  getPostalCodeInfo,
  getPostalCodesByDistrict,
  getAllHealthcareFacilities,
  calculateDistance,
  searchDistricts,
} from '../functions';

describe('New Features', () => {
  describe('Postal Codes', () => {
    it('should return postal code info for valid code', () => {
      const info = getPostalCodeInfo('1000');
      expect(info).toBeTruthy();
      expect(info?.area).toBe('Dhaka GPO');
      expect(info?.district).toBe('Dhaka');
    });

    it('should return null for invalid postal code', () => {
      const info = getPostalCodeInfo('99999');
      expect(info).toBeNull();
    });

    it('should return postal codes for Dhaka district', () => {
      const codes = getPostalCodesByDistrict('Dhaka');
      expect(codes.length).toBeGreaterThan(0);
      expect(codes[0].district).toBe('Dhaka');
    });
  });

  describe('Healthcare Facilities', () => {
    it('should return all healthcare facilities', () => {
      const facilities = getAllHealthcareFacilities();
      expect(facilities.length).toBeGreaterThan(0);
      expect(facilities[0]).toHaveProperty('name');
      expect(facilities[0]).toHaveProperty('type');
    });

    it('should return facilities with emergency services', () => {
      const facilities = getAllHealthcareFacilities();
      const emergencyFacilities = facilities.filter((f) => f.emergencyServices);
      expect(emergencyFacilities.length).toBeGreaterThan(0);
    });
  });

  describe('Utility Functions', () => {
    it('should calculate distance between two points', () => {
      const distance = calculateDistance(23.8103, 90.4125, 22.3569, 91.7832);
      expect(distance).toBeGreaterThan(0);
      expect(typeof distance).toBe('number');
    });

    it('should search districts by name', () => {
      const results = searchDistricts('Dhaka');
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].name.toLowerCase()).toContain('dhaka');
    });
  });
});

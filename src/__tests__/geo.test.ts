import {
  getDivision,
  getDistrict,
  getUpazilla,
  getUnion,
  getDistrictsOfDivision,
  getUpazillasOfDistrict,
  getUnionsOfUpazilla,
} from '../functions/geo';

describe('Geo Functions', () => {
  describe('getDivision', () => {
    it('should return division for valid English name', () => {
      const division = getDivision('Dhaka');
      expect(division.name).toBe('Dhaka');
      expect(division.bn_name).toBe('ঢাকা');
    });

    it('should return division for valid Bengali name', () => {
      const division = getDivision('ঢাকা');
      expect(division.name).toBe('Dhaka');
    });

    it('should throw error for invalid name', () => {
      expect(() => getDivision('Invalid')).toThrow('Division not found');
    });

    it('should throw error for empty name', () => {
      expect(() => getDivision('')).toThrow('Division name is required');
    });
  });

  describe('getDistrict', () => {
    it('should return district for valid English name', () => {
      const district = getDistrict('Dhaka');
      expect(district.name).toBe('Dhaka');
    });

    it('should throw error for invalid name', () => {
      expect(() => getDistrict('Invalid')).toThrow('District not found');
    });

    it('should throw error for empty name', () => {
      expect(() => getDistrict('')).toThrow('District name is required');
    });
  });

  describe('getDistrictsOfDivision', () => {
    it('should return districts for valid division', () => {
      const districts = getDistrictsOfDivision('Dhaka');
      expect(districts.length).toBeGreaterThan(0);
      expect(districts[0].division_id).toBeDefined();
    });

    it('should throw error for invalid division', () => {
      expect(() => getDistrictsOfDivision('Invalid')).toThrow(
        'Division not found'
      );
    });
  });

  // Add more tests for other functions as needed
  describe('getUpazilla', () => {
    it('should throw error for empty name', () => {
      expect(() => getUpazilla('')).toThrow('Upazilla name is required');
    });
  });

  describe('getUnion', () => {
    it('should throw error for empty name', () => {
      expect(() => getUnion('')).toThrow('Union name is required');
    });
  });
});

export interface PostalCode {
  code: string;
  district: string;
  division: string;
  area: string;
  coordinates?: {
    lat: number;
    lon: number;
  };
}

export type PrayerApiResponse<T> = {
  code: number;
  status: string;
  data: T;
};

export type PrayerTimes = {
  timings: Record<string, string>;
  date: {
    readable: string;
    timestamp: string;
    hijri: {
      date: string;
      format: string;
      day: string;
      weekday: Record<string, string>;
      month: {
        number: number;
        en: string;
        ar: string;
        days: number;
      };
      year: string;
      designation: Record<string, string>;
      holidays: string[];
      adjustedHolidays: string[];
      method: string;
    };
    gregorian: {
      date: string;
      format: string;
      day: string;
      weekday: Record<string, string>;
      month: {
        number: number;
        en: string;
      };
      year: string;
      designation: Record<string, string>;
      lunarSighting: boolean;
    };
  };
  meta: {
    latitude: number;
    longitude: number;
    timezone: string;
    method: {
      id: number;
      name: string;
      params: Record<string, number>;
      location: {
        latitude: number;
        longitude: number;
      };
    };
    latitudeAdjustmentMethod: string;
    midnightMode: string;
    school: string;
    offset: Record<string, number>;
  };
};

export type PrayerTimeParams = {
  date?: string;
  city?: string;
  country?: string;
  method?: string;
  shafaq?: string;
  tune?: string;
  school?: number;
  midnightMode?: number;
  timezonestring?: string;
  latitudeAdjustmentMethod?: number;
  calendarMethod?: string;
  adjustment?: number;
  iso8601?: boolean;
  year?: string;
};

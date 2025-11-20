export interface WeatherLocation {
  name: string;
  country: string;
  coordinates: {
    lat: number;
    lon: number;
  };
}

export interface WeatherTemperature {
  current: number;
  feelsLike: number;
  min: number;
  max: number;
}

export interface WeatherCondition {
  main: string;
  description: string;
  icon: string;
}

export interface WindData {
  speed: number;
  direction: number;
}

export interface WeatherData {
  location: WeatherLocation;
  temperature: WeatherTemperature;
  humidity: number;
  pressure: number;
  visibility: number;
  wind: WindData;
  clouds: number;
  weather: WeatherCondition;
  sunrise: Date;
  sunset: Date;
  timestamp: Date;
}

export interface ForecastItem {
  timestamp: Date;
  temperature: WeatherTemperature;
  humidity: number;
  pressure: number;
  wind: WindData;
  weather: WeatherCondition;
  precipitation: {
    probability: number;
    volume: number;
  };
}

export interface WeatherForecast {
  location: WeatherLocation;
  forecasts: ForecastItem[];
}

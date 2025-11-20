import { WeatherData, WeatherForecast } from "../types";

/**
 * API key for weather service (users should provide their own)
 * Get one from https://openweathermap.org/api
 */
let weatherApiKey = '';

/**
 * Sets the API key for weather services
 * @param apiKey - Your OpenWeatherMap API key
 */
export function setWeatherApiKey(apiKey: string): void {
  weatherApiKey = apiKey;
}

/**
 * Gets current weather data for a city in Bangladesh
 * @param city - City name (e.g., 'Dhaka', 'Chittagong')
 * @returns Promise resolving to current weather data
 * @throws Error if API key not set or request fails
 */
export async function getCurrentWeather(city: string): Promise<WeatherData> {
  if (!weatherApiKey) {
    throw new Error('Weather API key not set. Use setWeatherApiKey() first.');
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},BD&appid=${weatherApiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      location: {
        name: data.name,
        country: data.sys.country,
        coordinates: {
          lat: data.coord.lat,
          lon: data.coord.lon,
        },
      },
      temperature: {
        current: data.main.temp,
        feelsLike: data.main.feels_like,
        min: data.main.temp_min,
        max: data.main.temp_max,
      },
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      visibility: data.visibility,
      wind: {
        speed: data.wind.speed,
        direction: data.wind.deg,
      },
      clouds: data.clouds.all,
      weather: {
        main: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      },
      sunrise: new Date(data.sys.sunrise * 1000),
      sunset: new Date(data.sys.sunset * 1000),
      timestamp: new Date(data.dt * 1000),
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

/**
 * Gets 5-day weather forecast for a city in Bangladesh
 * @param city - City name
 * @returns Promise resolving to weather forecast data
 * @throws Error if API key not set or request fails
 */
export async function getWeatherForecast(
  city: string
): Promise<WeatherForecast> {
  if (!weatherApiKey) {
    throw new Error('Weather API key not set. Use setWeatherApiKey() first.');
  }

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},BD&appid=${weatherApiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather forecast API error: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      location: {
        name: data.city.name,
        country: data.city.country,
        coordinates: {
          lat: data.city.coord.lat,
          lon: data.city.coord.lon,
        },
      },
      forecasts: data.list.map((item: any) => ({
        timestamp: new Date(item.dt * 1000),
        temperature: {
          current: item.main.temp,
          feelsLike: item.main.feels_like,
          min: item.main.temp_min,
          max: item.main.temp_max,
        },
        humidity: item.main.humidity,
        pressure: item.main.pressure,
        wind: {
          speed: item.wind.speed,
          direction: item.wind.deg,
        },
        weather: {
          main: item.weather[0].main,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        },
        precipitation: {
          probability: item.pop,
          volume: item.rain?.['3h'] || item.snow?.['3h'] || 0,
        },
      })),
    };
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    throw error;
  }
}

/**
 * Gets weather data by geographic coordinates
 * @param lat - Latitude
 * @param lon - Longitude
 * @returns Promise resolving to current weather data
 */
export async function getWeatherByCoordinates(
  lat: number,
  lon: number
): Promise<WeatherData> {
  if (!weatherApiKey) {
    throw new Error('Weather API key not set. Use setWeatherApiKey() first.');
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      location: {
        name: data.name,
        country: data.sys.country,
        coordinates: {
          lat: data.coord.lat,
          lon: data.coord.lon,
        },
      },
      temperature: {
        current: data.main.temp,
        feelsLike: data.main.feels_like,
        min: data.main.temp_min,
        max: data.main.temp_max,
      },
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      visibility: data.visibility,
      wind: {
        speed: data.wind.speed,
        direction: data.wind.deg,
      },
      clouds: data.clouds.all,
      weather: {
        main: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      },
      sunrise: new Date(data.sys.sunrise * 1000),
      sunset: new Date(data.sys.sunset * 1000),
      timestamp: new Date(data.dt * 1000),
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

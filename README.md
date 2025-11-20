# Matribhumi

A comprehensive TypeScript library providing information and utilities related to Bangladesh, including geographical data, national holidays, prayer times, currency exchange rates, and more.

## Features

- **Geographical Data**: Access divisions, districts, upazillas, and unions of Bangladesh with Bengali names and coordinates.
- **Country Information**: Detailed facts about Bangladesh including history, culture, and landmarks.
- **National Holidays**: List of official holidays with dates and descriptions.
- **Currency Rates**: Fetch real-time currency exchange rates.
- **Prayer Times**: Get Islamic prayer times for cities in Bangladesh.
- **Weather Data**: Current weather, forecasts, and weather by coordinates.
- **Postal Codes**: Complete postal code database for major areas.
- **Healthcare Facilities**: Database of hospitals, clinics, and medical colleges.
- **Utility Functions**: Distance calculations, coordinate validation, and search utilities.
- **Type-Safe**: Fully typed with TypeScript for better developer experience.

## Installation

```bash
npm install matribhumi
```

## Usage

### Geographical Data

```typescript
import { getDivision, getDistrictsOfDivision, getDistrict } from 'matribhumi';

// Get a division by name
const dhakaDivision = getDivision('Dhaka');
console.log(dhakaDivision.name); // 'Dhaka'

// Get all districts in a division
const dhakaDistricts = getDistrictsOfDivision('Dhaka');
console.log(dhakaDistricts.length); // Number of districts in Dhaka division

// Get a specific district
const gazipurDistrict = getDistrict('Gazipur');
console.log(gazipurDistrict.bn_name); // 'গাজীপুর'
```

### National Holidays

```typescript
import { getHoliday } from 'matribhumi';

const holidays = getHoliday();
console.log(holidays[0].name); // Name of the first holiday
```

### Prayer Times

```typescript
import { getPrayerByCity } from 'matribhumi';

// Get prayer times for Dhaka today
const prayerTimes = await getPrayerByCity();
console.log(prayerTimes.data.timings.Fajr); // Fajr prayer time

// Get prayer times for a specific date and city
const specificPrayerTimes = await getPrayerByCity('15-08-2023', 'Chittagong');
```

### Currency Exchange

```typescript
import { currencyRate } from 'matribhumi';

// Get USD to BDT exchange rate
const usdRate = await currencyRate('usd');
console.log(usdRate.rate); // Exchange rate
```

### Weather Data

```typescript
import { setWeatherApiKey, getCurrentWeather, getWeatherForecast } from 'matribhumi';

// Set your OpenWeatherMap API key
setWeatherApiKey('your-api-key-here');

// Get current weather for Dhaka
const weather = await getCurrentWeather('Dhaka');
console.log(`Temperature: ${weather.temperature.current}°C`);

// Get 5-day forecast
const forecast = await getWeatherForecast('Dhaka');
console.log(forecast.forecasts[0].weather.main);
```

### Postal Codes

```typescript
import { getPostalCodeInfo, getPostalCodesByDistrict } from 'matribhumi';

// Get info for a specific postal code
const postalInfo = getPostalCodeInfo('1000');
console.log(postalInfo?.area); // 'Dhaka GPO'

// Get all postal codes in Dhaka district
const dhakaCodes = getPostalCodesByDistrict('Dhaka');
console.log(dhakaCodes.length);
```

### Healthcare Facilities

```typescript
import { getHealthcareFacilitiesByDistrict, getEmergencyFacilities } from 'matribhumi';

// Get hospitals in Dhaka
const dhakaHospitals = getHealthcareFacilitiesByDistrict('Dhaka');
console.log(dhakaHospitals[0].name);

// Get facilities with emergency services
const emergencyFacilities = getEmergencyFacilities();
console.log(emergencyFacilities.length);
```

### Utility Functions

```typescript
import { calculateDistance, findNearestDistricts, searchDistricts } from 'matribhumi';

// Calculate distance between two points
const distance = calculateDistance(23.8103, 90.4125, 22.3569, 91.7832);
console.log(`Distance: ${distance} km`);

// Find nearest districts to a coordinate
const nearest = findNearestDistricts(23.8103, 90.4125, 3);
console.log(nearest[0].name);

// Search districts by name
const searchResults = searchDistricts('Dhaka');
console.log(searchResults.length);
```

## API Reference

### Geographical Functions

#### `getDivision(name: string): Division`
Gets a division by name (English or Bengali).

#### `getDistrict(name: string): District`
Gets a district by name (English or Bengali).

#### `getUpazilla(name: string): Upazilla`
Gets an upazilla by name (English or Bengali).

#### `getUnion(name: string): Union`
Gets a union by name (English or Bengali).

#### `getDistrictsOfDivision(name: string): District[]`
Gets all districts in a division.

#### `getUpazillasOfDistrict(name: string): Upazilla[]`
Gets all upazillas in a district.

#### `getUnionsOfUpazilla(name: string): Union[]`
Gets all unions in an upazilla.

### Holiday Functions

#### `getHoliday(): Holiday[]`
Gets the list of national holidays in Bangladesh.

### Prayer Time Functions

#### `getPrayer(pathParams?, queryParams?): Promise<PrayerApiResponse<PrayerTimes>>`
Gets prayer times with customizable parameters.

#### `getPrayerByCity(date?, city?, country?): Promise<PrayerApiResponse<PrayerTimes>>`
Gets prayer times for a specific city and date.

### Currency Functions

#### `currencyRate(currencySymbol?): Promise<CurrencyData<number>>`
Gets currency exchange rate for a given currency symbol against BDT.

### Weather Functions

#### `setWeatherApiKey(apiKey: string): void`
Sets the OpenWeatherMap API key for weather services.

#### `getCurrentWeather(city: string): Promise<WeatherData>`
Gets current weather data for a city in Bangladesh.

#### `getWeatherForecast(city: string): Promise<WeatherForecast>`
Gets 5-day weather forecast for a city in Bangladesh.

#### `getWeatherByCoordinates(lat: number, lon: number): Promise<WeatherData>`
Gets weather data by geographic coordinates.

### Postal Code Functions

#### `getPostalCodeInfo(code: string): PostalCode | null`
Gets postal code information by postal code.

#### `getPostalCodesByDistrict(district: string): PostalCode[]`
Gets all postal codes for a specific district.

#### `getPostalCodesByDivision(division: string): PostalCode[]`
Gets all postal codes for a specific division.

#### `searchPostalCodesByArea(area: string): PostalCode[]`
Searches postal codes by area name.

#### `isValidPostalCode(code: string): boolean`
Validates if a postal code exists.

### Healthcare Functions

#### `getAllHealthcareFacilities(): HealthcareFacility[]`
Gets all healthcare facilities.

#### `getHealthcareFacilitiesByDistrict(district: string): HealthcareFacility[]`
Gets healthcare facilities by district.

#### `getHealthcareFacilitiesByDivision(division: string): HealthcareFacility[]`
Gets healthcare facilities by division.

#### `getHealthcareFacilitiesByType(type: HealthcareFacility['type']): HealthcareFacility[]`
Gets healthcare facilities by type.

#### `getEmergencyFacilities(): HealthcareFacility[]`
Gets facilities with emergency services.

### Utility Functions

#### `calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number`
Calculates distance between two geographic points in kilometers.

#### `findNearestDistricts(lat: number, lon: number, limit?: number): District[]`
Finds nearest districts to a coordinate.

#### `searchDistricts(query: string, limit?: number): District[]`
Searches districts by name.

#### `getDistrictsWithinRadius(lat: number, lon: number, radiusKm: number): District[]`
Gets districts within a specified radius.

#### `isWithinBangladesh(lat: number, lon: number): boolean`
Validates if coordinates are within Bangladesh bounds.

## Types

The library exports comprehensive TypeScript types for all data structures. Import them as needed:

```typescript
import type {
  Division, District, Holiday, PrayerTimes, CurrencyData,
  WeatherData, WeatherForecast, PostalCode, HealthcareFacility
} from 'matribhumi';
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/your-username/matribhumi.git
cd matribhumi

# Install dependencies
npm install

# Run tests
npm test

# Build the project
npm run build

# Lint the code
npm run lint

# Format the code
npm run format
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

Anis Afifi

## Support

If you find this library helpful, please give it a ⭐ on GitHub!</content>
<parameter name="filePath">j:\matribhumi\README.md
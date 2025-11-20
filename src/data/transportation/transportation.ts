import { Airport, BusStation, RailwayStation } from '../../types/transportation';

export const airports: Airport[] = [
  {
    id: 'dac',
    name: 'Hazrat Shahjalal International Airport',
    bn_name: 'হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর',
    iata_code: 'DAC',
    icao_code: 'VGHS',
    district: 'Dhaka',
    division: 'Dhaka',
    type: 'international',
    coordinates: { lat: 23.8433, lon: 90.3978 },
    contact_info: {
      phone: '+880-2-8901511',
      website: 'https://www.hsia.gov.bd'
    },
    facilities: ['International Terminal', 'Domestic Terminal', 'Cargo Terminal', 'Duty Free', 'Hotels'],
    airlines: ['Biman Bangladesh', 'US-Bangla', 'Novoair', 'Regent Airways'],
    runway_length: 3200,
    passenger_capacity: '8 million annually',
    operating_hours: '24 hours'
  },
  {
    id: 'cgp',
    name: 'Shah Amanat International Airport',
    bn_name: 'শাহ আমানত আন্তর্জাতিক বিমানবন্দর',
    iata_code: 'CGP',
    icao_code: 'VGEG',
    district: 'Chittagong',
    division: 'Chittagong',
    type: 'international',
    coordinates: { lat: 22.2496, lon: 91.8133 },
    contact_info: {
      phone: '+880-31-2502222',
      website: 'https://www.saiacgp.gov.bd'
    },
    facilities: ['International Terminal', 'Domestic Terminal', 'Cargo Facilities'],
    airlines: ['Biman Bangladesh', 'US-Bangla', 'Novoair'],
    runway_length: 2926,
    passenger_capacity: '2 million annually',
    operating_hours: '24 hours'
  },
  {
    id: 'spd',
    name: 'Saidpur Airport',
    bn_name: 'সৈয়দপুর বিমানবন্দর',
    iata_code: 'SPD',
    icao_code: 'VGSD',
    district: 'Nilphamari',
    division: 'Rangpur',
    type: 'domestic',
    coordinates: { lat: 25.7592, lon: 88.9086 },
    contact_info: {
      phone: '+880-551-61800'
    },
    facilities: ['Domestic Terminal', 'Cargo Facilities'],
    airlines: ['Biman Bangladesh', 'US-Bangla'],
    runway_length: 1830,
    operating_hours: '6:00 AM - 6:00 PM'
  },
  {
    id: 'jsh',
    name: 'Jessore Airport',
    bn_name: 'যশোর বিমানবন্দর',
    iata_code: 'JSR',
    icao_code: 'VGJR',
    district: 'Jessore',
    division: 'Khulna',
    type: 'domestic',
    coordinates: { lat: 23.1838, lon: 89.1608 },
    contact_info: {
      phone: '+880-421-68100'
    },
    facilities: ['Domestic Terminal'],
    airlines: ['Biman Bangladesh', 'Novoair'],
    runway_length: 2440,
    operating_hours: '6:00 AM - 6:00 PM'
  },
  {
    id: 'ird',
    name: 'Ishwardi Airport',
    bn_name: 'ঈশ্বরদী বিমানবন্দর',
    iata_code: 'IRD',
    icao_code: 'VGIS',
    district: 'Pabna',
    division: 'Rajshahi',
    type: 'domestic',
    coordinates: { lat: 24.1525, lon: 89.0494 },
    contact_info: {
      phone: '+880-731-64500'
    },
    facilities: ['Domestic Terminal'],
    airlines: ['Biman Bangladesh'],
    runway_length: 1830,
    operating_hours: '6:00 AM - 6:00 PM'
  }
];

export const busStations: BusStation[] = [
  {
    id: 'gabtoli',
    name: 'Gabtoli Bus Terminal',
    bn_name: 'গাবতলী বাস টার্মিনাল',
    district: 'Dhaka',
    division: 'Dhaka',
    type: 'intercity',
    coordinates: { lat: 23.7808, lon: 90.3544 },
    contact_info: {
      phone: '+880-2-9001234',
      address: 'Gabtoli, Mirpur, Dhaka'
    },
    routes: ['Dhaka-Chittagong', 'Dhaka-Sylhet', 'Dhaka-Rajshahi'],
    operators: ['Green Line', 'Shyamoli', 'Hanif Enterprise'],
    facilities: ['Waiting Room', 'Food Court', 'Parking', 'Restrooms']
  },
  {
    id: 'mohakhali',
    name: 'Mohakhali Bus Terminal',
    bn_name: 'মহাখালী বাস টার্মিনাল',
    district: 'Dhaka',
    division: 'Dhaka',
    type: 'intercity',
    coordinates: { lat: 23.7781, lon: 90.3984 },
    contact_info: {
      phone: '+880-2-9881234',
      address: 'Mohakhali, Dhaka'
    },
    routes: ['Dhaka-Cox\'s Bazar', 'Dhaka-Khulna', 'Dhaka-Barishal'],
    operators: ['Saint Martin', 'Eagle', 'Desh Travels'],
    facilities: ['AC Waiting Room', 'Restaurant', 'ATM', 'Pharmacy']
  },
  {
    id: 'chittagong-bs',
    name: 'Chittagong New Bus Terminal',
    bn_name: 'চট্টগ্রাম নতুন বাস টার্মিনাল',
    district: 'Chittagong',
    division: 'Chittagong',
    type: 'intercity',
    coordinates: { lat: 22.3475, lon: 91.8125 },
    contact_info: {
      phone: '+880-31-651234',
      address: 'Chittagong New Bus Terminal, Chittagong'
    },
    routes: ['Chittagong-Dhaka', 'Chittagong-Sylhet', 'Chittagong-Cox\'s Bazar'],
    operators: ['Green Line', 'Shyamoli', 'Unique'],
    facilities: ['Modern Terminal', 'Food Court', 'Parking']
  }
];

export const railwayStations: RailwayStation[] = [
  {
    id: 'kamalapur',
    name: 'Kamalapur Railway Station',
    bn_name: 'কমলাপুর রেলওয়ে স্টেশন',
    district: 'Dhaka',
    division: 'Dhaka',
    type: 'main',
    coordinates: { lat: 23.7308, lon: 90.4258 },
    contact_info: {
      phone: '+880-2-9001234',
      address: 'Kamalapur, Dhaka'
    },
    lines: ['Dhaka-Chittagong', 'Dhaka-Sylhet', 'Dhaka-Rajshahi'],
    facilities: ['Waiting Room', 'Restaurant', 'Parking', 'ATM'],
    platforms: 8
  },
  {
    id: 'chittagong-rs',
    name: 'Chittagong Railway Station',
    bn_name: 'চট্টগ্রাম রেলওয়ে স্টেশন',
    district: 'Chittagong',
    division: 'Chittagong',
    type: 'junction',
    coordinates: { lat: 22.3350, lon: 91.8317 },
    contact_info: {
      phone: '+880-31-651234',
      address: 'Chittagong Railway Station, Chittagong'
    },
    lines: ['Chittagong-Dhaka', 'Chittagong-Sylhet', 'Chittagong-Cox\'s Bazar'],
    facilities: ['Platform', 'Waiting Room', 'Food Stalls'],
    platforms: 6
  },
  {
    id: 'sylhet-rs',
    name: 'Sylhet Railway Station',
    bn_name: 'সিলেট রেলওয়ে স্টেশন',
    district: 'Sylhet',
    division: 'Sylhet',
    type: 'terminal',
    coordinates: { lat: 24.8944, lon: 91.8683 },
    contact_info: {
      phone: '+880-821-719123',
      address: 'Sylhet Railway Station, Sylhet'
    },
    lines: ['Sylhet-Dhaka', 'Sylhet-Chittagong'],
    facilities: ['Waiting Room', 'Restaurant', 'Taxi Stand'],
    platforms: 4
  }
];
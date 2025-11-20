import { EnvironmentalSite } from '../../types/environmental';

export const environmentalSites: EnvironmentalSite[] = [
  {
    id: 'sundarbans',
    name: 'Sundarbans National Park',
    bn_name: 'সুন্দরবন জাতীয় উদ্যান',
    type: 'mangrove-forest',
    district: 'Khulna',
    division: 'Khulna',
    area_sq_km: 1395,
    established: 1996,
    description: 'World\'s largest mangrove forest, UNESCO World Heritage site, home to Royal Bengal Tigers.',
    biodiversity: {
      flora: ['Sundari trees', 'Gewa', 'Keora', 'Passur'],
      fauna: ['Royal Bengal Tiger', 'Spotted Deer', 'Wild Boar', 'Rhesus Macaque'],
      endangered_species: ['Royal Bengal Tiger', 'Ganges River Dolphin', 'Estonian Crocodile']
    },
    coordinates: { lat: 21.9497, lon: 89.1833 },
    contact_info: {
      phone: '+880-417-690-326',
      website: 'https://www.bforest.gov.bd'
    },
    facilities: ['Watch towers', 'Boat tours', 'Eco-resorts', 'Visitor centers'],
    best_time_to_visit: 'November to February',
    conservation_status: 'good',
    unesco_status: true,
    entry_fee: 150,
    operating_hours: '6:00 AM - 6:00 PM'
  },
  {
    id: 'lawachara',
    name: 'Lawachara National Park',
    bn_name: 'লাওয়াছড়া জাতীয় উদ্যান',
    type: 'national-park',
    district: 'Moulvibazar',
    division: 'Sylhet',
    area_sq_km: 1250,
    established: 1996,
    description: 'Tropical semi-evergreen forest known for its biodiversity and walking trails.',
    biodiversity: {
      flora: ['Garjan', 'Teak', 'Champak', 'Orchid species'],
      fauna: ['Hoolock Gibbon', 'Capped Langur', 'Barking Deer', 'Hornbill'],
      endangered_species: ['Hoolock Gibbon', 'Clouded Leopard']
    },
    coordinates: { lat: 24.3167, lon: 91.7833 },
    facilities: ['Walking trails', 'Watch towers', 'Campsites'],
    best_time_to_visit: 'November to February',
    conservation_status: 'good',
    entry_fee: 20,
    operating_hours: '6:00 AM - 6:00 PM'
  },
  {
    id: 'bhawal',
    name: 'Bhawal National Park',
    bn_name: 'ভাওয়াল জাতীয় উদ্যান',
    type: 'national-park',
    district: 'Gazipur',
    division: 'Dhaka',
    area_sq_km: 5022,
    established: 1982,
    description: 'Largest national park in Bangladesh, featuring lakes, forests, and historical ruins.',
    biodiversity: {
      flora: ['Sal trees', 'Teak', 'Mahogany'],
      fauna: ['Deer', 'Monkey', 'Bird species', 'Butterflies'],
      endangered_species: ['Ganges River Dolphin']
    },
    coordinates: { lat: 24.0667, lon: 90.4167 },
    facilities: ['Boating', 'Walking trails', 'Historical ruins'],
    best_time_to_visit: 'October to March',
    conservation_status: 'fair',
    entry_fee: 10,
    operating_hours: '6:00 AM - 6:00 PM'
  },
  {
    id: 'kaptai-lake',
    name: 'Kaptai Lake',
    bn_name: 'কাপ্তাই হ্রদ',
    type: 'wetland',
    district: 'Rangamati',
    division: 'Chittagong',
    area_sq_km: 688,
    established: 1964,
    description: 'Largest man-made lake in Bangladesh, created by Kaptai Dam, known for scenic beauty.',
    biodiversity: {
      flora: ['Tropical vegetation', 'Floating plants'],
      fauna: ['Fish species', 'Water birds', 'Turtles'],
      endangered_species: ['Hawksbill Sea Turtle']
    },
    coordinates: { lat: 22.5000, lon: 92.2167 },
    facilities: ['Boat tours', 'Floating restaurants', 'Resorts'],
    best_time_to_visit: 'November to February',
    conservation_status: 'fair',
    entry_fee: 0,
    operating_hours: '24 hours'
  },
  {
    id: 'nilgiri',
    name: 'Nilgiri Eco Park',
    bn_name: 'নীলগিরি ইকো পার্ক',
    type: 'eco-park',
    district: 'Bandarban',
    division: 'Chittagong',
    area_sq_km: 250,
    established: 1996,
    description: 'Hill station and eco-park with panoramic views, waterfalls, and tribal culture.',
    biodiversity: {
      flora: ['Pine trees', 'Orchid species', 'Bamboo groves'],
      fauna: ['Bird species', 'Butterflies', 'Small mammals'],
      endangered_species: []
    },
    coordinates: { lat: 21.8167, lon: 92.2833 },
    facilities: ['Cable car', 'Viewpoints', 'Tribal village visits', 'Resorts'],
    best_time_to_visit: 'November to February',
    conservation_status: 'good',
    entry_fee: 30,
    operating_hours: '6:00 AM - 6:00 PM'
  },
  {
    id: 'ratargul',
    name: 'Ratargul Swamp Forest',
    bn_name: 'রাতারগুল জলাবন',
    type: 'wetland',
    district: 'Sylhet',
    division: 'Sylhet',
    area_sq_km: 504,
    established: 2015,
    description: 'Only freshwater swamp forest in Bangladesh, known for walking on water.',
    biodiversity: {
      flora: ['Swamp trees', 'Water lilies', 'Floating vegetation'],
      fauna: ['Fish species', 'Amphibians', 'Water birds'],
      endangered_species: []
    },
    coordinates: { lat: 25.0167, lon: 91.8833 },
    facilities: ['Boat tours', 'Walking trails', 'Watch towers'],
    best_time_to_visit: 'November to February',
    conservation_status: 'excellent',
    entry_fee: 20,
    operating_hours: '8:00 AM - 5:00 PM'
  },
  {
    id: 'chittagong-hill-tracts',
    name: 'Chittagong Hill Tracts',
    bn_name: 'পার্বত্য চট্টগ্রাম',
    type: 'hill-station',
    district: 'Rangamati',
    division: 'Chittagong',
    area_sq_km: 13000,
    established: 1997,
    description: 'Hilly region with tribal communities, waterfalls, and scenic landscapes.',
    biodiversity: {
      flora: ['Tropical forests', 'Bamboo', 'Pine trees'],
      fauna: ['Elephants', 'Leopards', 'Hornbills', 'Tribes: Chakma, Marma, Tripura'],
      endangered_species: ['Asian Elephant', 'Clouded Leopard']
    },
    coordinates: { lat: 22.5000, lon: 92.2167 },
    facilities: ['Tribal village tours', 'Boat cruises', 'Hiking trails'],
    best_time_to_visit: 'November to February',
    conservation_status: 'fair',
    entry_fee: 0,
    operating_hours: '24 hours'
  },
  {
    id: 'kuakata-marine',
    name: 'Kuakata Marine Protected Area',
    bn_name: 'কুয়াকাটা মেরিন প্রটেক্টেড এরিয়া',
    type: 'marine-protected-area',
    district: 'Patuakhali',
    division: 'Barishal',
    area_sq_km: 20,
    established: 2017,
    description: 'Coastal area protecting mangrove ecosystems and marine biodiversity.',
    biodiversity: {
      flora: ['Mangrove species', 'Beach vegetation'],
      fauna: ['Marine fish', 'Crabs', 'Shore birds', 'Dolphins'],
      endangered_species: ['Ganges River Dolphin', 'Olive Ridley Turtle']
    },
    coordinates: { lat: 21.8167, lon: 90.1167 },
    facilities: ['Watch towers', 'Fishing harbor'],
    best_time_to_visit: 'November to February',
    conservation_status: 'good',
    entry_fee: 0,
    operating_hours: '24 hours'
  },
  {
    id: 'teknaf-game-reserve',
    name: 'Teknaf Game Reserve',
    bn_name: 'টেকনাফ গেম রিজার্ভ',
    type: 'wildlife-sanctuary',
    district: 'Cox\'s Bazar',
    division: 'Chittagong',
    area_sq_km: 11615,
    established: 1983,
    description: 'Largest wildlife sanctuary in Bangladesh, protecting coastal ecosystems.',
    biodiversity: {
      flora: ['Mangrove forests', 'Beach vegetation'],
      fauna: ['Deer', 'Wild boar', 'Monkeys', 'Bird species'],
      endangered_species: ['Asiatic Wild Dog', 'Saltwater Crocodile']
    },
    coordinates: { lat: 21.0833, lon: 92.2833 },
    facilities: ['Watch towers', 'Boat tours'],
    best_time_to_visit: 'November to February',
    conservation_status: 'fair',
    entry_fee: 10,
    operating_hours: '6:00 AM - 6:00 PM'
  },
  {
    id: 'remakalenga-wildlife',
    name: 'Remakalenga Wildlife Sanctuary',
    bn_name: 'রেমাক্রীড়ং জীববৈচিত্র্য অভয়ারণ্য',
    type: 'wildlife-sanctuary',
    district: 'Hobiganj',
    division: 'Sylhet',
    area_sq_km: 18,
    established: 1996,
    description: 'Small sanctuary protecting hoolock gibbons and other primates.',
    biodiversity: {
      flora: ['Tropical evergreen forest'],
      fauna: ['Hoolock Gibbon', 'Capped Langur', 'Rhesus Macaque'],
      endangered_species: ['Hoolock Gibbon']
    },
    coordinates: { lat: 24.2833, lon: 91.4167 },
    facilities: ['Walking trails', 'Watch towers'],
    best_time_to_visit: 'November to February',
    conservation_status: 'excellent',
    entry_fee: 5,
    operating_hours: '8:00 AM - 5:00 PM'
  }
];
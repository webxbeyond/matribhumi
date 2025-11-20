import { SportsFacility } from '../../types/sports';

export const sportsFacilities: SportsFacility[] = [
  {
    id: 'bangabandhu-stadium',
    name: 'Bangabandhu National Stadium',
    bn_name: 'বঙ্গবন্ধু জাতীয় স্টেডিয়াম',
    type: 'stadium',
    sport_types: ['Football', 'Cricket', 'Athletics'],
    district: 'Dhaka',
    division: 'Dhaka',
    capacity: 36000,
    coordinates: { lat: 23.7289, lon: 90.4100 },
    contact_info: {
      phone: '+880-2-9330510',
      website: 'https://www.bns.dhaka.gov.bd',
      address: 'Dhaka Cantonment, Dhaka'
    },
    facilities: ['Main Stadium', 'Practice Fields', 'Gym', 'Swimming Pool'],
    ownership: 'government',
    established: 1954,
    major_events: ['Bangladesh Football Premier League', 'International Cricket Matches'],
    operating_hours: '6:00 AM - 10:00 PM',
    rental_info: {
      available: true,
      rates: { hourly: 50000, daily: 200000, currency: 'BDT' }
    }
  },
  {
    id: 'shere-bangla-stadium',
    name: 'Shere Bangla National Stadium',
    bn_name: 'শের-ই-বাংলা জাতীয় স্টেডিয়াম',
    type: 'stadium',
    sport_types: ['Cricket', 'Football', 'Hockey'],
    district: 'Dhaka',
    division: 'Dhaka',
    capacity: 25000,
    coordinates: { lat: 23.7292, lon: 90.4086 },
    contact_info: {
      phone: '+880-2-9330510',
      address: 'Mirpur, Dhaka'
    },
    facilities: ['Cricket Ground', 'Football Field', 'Indoor Arena'],
    ownership: 'government',
    established: 2006,
    major_events: ['Bangladesh Premier League', 'International Cricket'],
    operating_hours: '6:00 AM - 10:00 PM'
  },
  {
    id: 'mahananda-stadium',
    name: 'Mahananda Stadium',
    bn_name: 'মহানন্দা স্টেডিয়াম',
    type: 'stadium',
    sport_types: ['Football', 'Cricket'],
    district: 'Rajshahi',
    division: 'Rajshahi',
    capacity: 15000,
    coordinates: { lat: 24.3667, lon: 88.6000 },
    contact_info: {
      phone: '+880-721-774000',
      address: 'Rajshahi University Campus, Rajshahi'
    },
    facilities: ['Football Field', 'Cricket Pitch'],
    ownership: 'educational',
    established: 1978,
    major_events: ['Local Football Tournaments']
  },
  {
    id: 'chittagong-stadium',
    name: 'MA Aziz Stadium',
    bn_name: 'এম এ আজিজ স্টেডিয়াম',
    type: 'stadium',
    sport_types: ['Cricket', 'Football'],
    district: 'Chittagong',
    division: 'Chittagong',
    capacity: 20000,
    coordinates: { lat: 22.3475, lon: 91.8125 },
    contact_info: {
      phone: '+880-31-651234',
      address: 'Jalalabad, Chittagong'
    },
    facilities: ['Cricket Ground', 'Practice Nets'],
    ownership: 'government',
    established: 1950,
    major_events: ['Chittagong Premier League']
  },
  {
    id: 'dhaka-pool',
    name: 'Bangladesh Swimming Federation Complex',
    bn_name: 'বাংলাদেশ সুইমিং ফেডারেশন কমপ্লেক্স',
    type: 'pool',
    sport_types: ['Swimming', 'Diving', 'Water Polo'],
    district: 'Dhaka',
    division: 'Dhaka',
    capacity: 1000,
    coordinates: { lat: 23.7500, lon: 90.3833 },
    contact_info: {
      phone: '+880-2-9561234',
      address: 'Motijheel, Dhaka'
    },
    facilities: ['Olympic Pool', 'Diving Pool', 'Training Pool'],
    ownership: 'government',
    established: 1985,
    major_events: ['National Swimming Championships']
  },
  {
    id: 'army-stadium',
    name: 'Army Stadium',
    bn_name: 'আর্মি স্টেডিয়াম',
    type: 'complex',
    sport_types: ['Football', 'Basketball', 'Volleyball', 'Tennis'],
    district: 'Dhaka',
    division: 'Dhaka',
    capacity: 8000,
    coordinates: { lat: 23.7833, lon: 90.4000 },
    contact_info: {
      phone: '+880-2-9871234',
      address: 'Dhaka Cantonment, Dhaka'
    },
    facilities: ['Football Field', 'Basketball Courts', 'Tennis Courts', 'Gym'],
    ownership: 'government',
    established: 1960,
    major_events: ['Army Sports Competitions']
  },
  {
    id: 'sylhet-stadium',
    name: 'Sylhet International Cricket Stadium',
    bn_name: 'সিলেট আন্তর্জাতিক ক্রিকেট স্টেডিয়াম',
    type: 'stadium',
    sport_types: ['Cricket'],
    district: 'Sylhet',
    division: 'Sylhet',
    capacity: 18500,
    coordinates: { lat: 24.8944, lon: 91.8683 },
    contact_info: {
      phone: '+880-821-719123',
      address: 'Kamal Bazar, Sylhet'
    },
    facilities: ['Cricket Ground', 'Floodlights', 'Practice Facilities'],
    ownership: 'government',
    established: 2007,
    major_events: ['Bangladesh Premier League', 'International Cricket']
  },
  {
    id: 'khulna-stadium',
    name: 'Khulna District Stadium',
    bn_name: 'খুলনা জেলা স্টেডিয়াম',
    type: 'stadium',
    sport_types: ['Football', 'Cricket'],
    district: 'Khulna',
    division: 'Khulna',
    capacity: 10000,
    coordinates: { lat: 22.8167, lon: 89.5667 },
    contact_info: {
      phone: '+880-41-720171',
      address: 'Sonadanga, Khulna'
    },
    facilities: ['Football Field', 'Cricket Pitch'],
    ownership: 'government',
    established: 1975,
    major_events: ['Local Sports Events']
  },
  {
    id: 'rajshahi-stadium',
    name: 'Rajshahi District Stadium',
    bn_name: 'রাজশাহী জেলা স্টেডিয়াম',
    type: 'stadium',
    sport_types: ['Football', 'Cricket', 'Athletics'],
    district: 'Rajshahi',
    division: 'Rajshahi',
    capacity: 15000,
    coordinates: { lat: 24.3667, lon: 88.6000 },
    contact_info: {
      phone: '+880-721-774000',
      address: 'Rajshahi'
    },
    facilities: ['Athletics Track', 'Football Field'],
    ownership: 'government',
    established: 1980,
    major_events: ['District Level Competitions']
  },
  {
    id: 'dhaka-tennis',
    name: 'Dhaka Tennis Complex',
    bn_name: 'ঢাকা টেনিস কমপ্লেক্স',
    type: 'court',
    sport_types: ['Tennis'],
    district: 'Dhaka',
    division: 'Dhaka',
    coordinates: { lat: 23.7333, lon: 90.4167 },
    contact_info: {
      phone: '+880-2-9567890',
      address: 'Ramna Park, Dhaka'
    },
    facilities: ['Clay Courts', 'Hard Courts', 'Indoor Courts'],
    ownership: 'club',
    established: 1990,
    major_events: ['National Tennis Championships']
  }
];
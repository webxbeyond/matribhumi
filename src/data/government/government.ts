import { GovernmentOffice } from '../../types/government';

export const governmentOffices: GovernmentOffice[] = [
  {
    id: 'dc-dhaka',
    name: 'Dhaka District Commissioner Office',
    bn_name: 'ঢাকা জেলা প্রশাসকের কার্যালয়',
    type: 'administrative',
    category: 'district',
    district: 'Dhaka',
    division: 'Dhaka',
    coordinates: { lat: 23.7104, lon: 90.4074 },
    contact_info: {
      phone: '+880-2-9515311',
      email: 'dc@dhaka.gov.bd',
      website: 'https://dc.dhaka.gov.bd',
      address: 'Nawabpur Road, Dhaka'
    },
    services: ['Land Administration', 'Revenue Collection', 'Law and Order', 'Development Projects'],
    working_hours: '9:00 AM - 5:00 PM',
    jurisdiction: 'Dhaka District',
    head_official: { title: 'District Commissioner' },
    departments: ['Revenue', 'Land', 'Magistracy', 'Development']
  },
  {
    id: 'police-dhaka',
    name: 'Dhaka Metropolitan Police Headquarters',
    bn_name: 'ঢাকা মেট্রোপলিটন পুলিশ সদর দপ্তর',
    type: 'law-enforcement',
    category: 'district',
    district: 'Dhaka',
    division: 'Dhaka',
    coordinates: { lat: 23.7389, lon: 90.3964 },
    contact_info: {
      phone: '+880-2-9562096',
      email: 'info@dmp.gov.bd',
      website: 'https://dmp.gov.bd',
      address: 'Ramna, Dhaka'
    },
    services: ['Law Enforcement', 'Traffic Control', 'Emergency Response', 'Crime Prevention'],
    working_hours: '24 hours',
    jurisdiction: 'Dhaka Metropolitan Area',
    head_official: { title: 'Police Commissioner' },
    departments: ['Operations', 'Traffic', 'Criminal Investigation', 'Administration']
  },
  {
    id: 'bd-post-office',
    name: 'Bangladesh Post Office Headquarters',
    bn_name: 'বাংলাদেশ পোস্ট অফিস সদর দপ্তর',
    type: 'postal',
    category: 'central',
    district: 'Dhaka',
    division: 'Dhaka',
    coordinates: { lat: 23.7225, lon: 90.4086 },
    contact_info: {
      phone: '+880-2-9561234',
      email: 'info@bangladeshpost.gov.bd',
      website: 'https://bangladeshpost.gov.bd',
      address: 'Dacca GPO, Dhaka 1000'
    },
    services: ['Mail Delivery', 'Money Transfer', 'Savings Accounts', 'Insurance'],
    working_hours: '9:00 AM - 5:00 PM',
    jurisdiction: 'National',
    head_official: { title: 'Postmaster General' },
    departments: ['Operations', 'Finance', 'Human Resources', 'Technology']
  },
  {
    id: 'dc-chittagong',
    name: 'Chittagong District Commissioner Office',
    bn_name: 'চট্টগ্রাম জেলা প্রশাসকের কার্যালয়',
    type: 'administrative',
    category: 'district',
    district: 'Chittagong',
    division: 'Chittagong',
    coordinates: { lat: 22.3475, lon: 91.8125 },
    contact_info: {
      phone: '+880-31-610000',
      email: 'dc@chittagong.gov.bd',
      website: 'https://dc.chittagong.gov.bd',
      address: 'Chittagong District Commissioner Office, Chittagong'
    },
    services: ['District Administration', 'Revenue Management', 'Development Coordination'],
    working_hours: '9:00 AM - 5:00 PM',
    jurisdiction: 'Chittagong District',
    head_official: { title: 'District Commissioner' }
  },
  {
    id: 'rajshahi-dc',
    name: 'Rajshahi District Commissioner Office',
    bn_name: 'রাজশাহী জেলা প্রশাসকের কার্যালয়',
    type: 'administrative',
    category: 'district',
    district: 'Rajshahi',
    division: 'Rajshahi',
    coordinates: { lat: 24.3667, lon: 88.6000 },
    contact_info: {
      phone: '+880-721-774000',
      email: 'dc@rajshahi.gov.bd',
      website: 'https://dc.rajshahi.gov.bd',
      address: 'Rajshahi District Commissioner Office, Rajshahi'
    },
    services: ['District Governance', 'Public Services', 'Disaster Management'],
    working_hours: '9:00 AM - 5:00 PM',
    jurisdiction: 'Rajshahi District',
    head_official: { title: 'District Commissioner' }
  },
  {
    id: 'khulna-dc',
    name: 'Khulna District Commissioner Office',
    bn_name: 'খুলনা জেলা প্রশাসকের কার্যালয়',
    type: 'administrative',
    category: 'district',
    district: 'Khulna',
    division: 'Khulna',
    coordinates: { lat: 22.8167, lon: 89.5667 },
    contact_info: {
      phone: '+880-41-720171',
      email: 'dc@khulna.gov.bd',
      website: 'https://dc.khulna.gov.bd',
      address: 'Khulna District Commissioner Office, Khulna'
    },
    services: ['Administrative Services', 'Development Programs', 'Public Welfare'],
    working_hours: '9:00 AM - 5:00 PM',
    jurisdiction: 'Khulna District',
    head_official: { title: 'District Commissioner' }
  },
  {
    id: 'sylhet-dc',
    name: 'Sylhet District Commissioner Office',
    bn_name: 'সিলেট জেলা প্রশাসকের কার্যালয়',
    type: 'administrative',
    category: 'district',
    district: 'Sylhet',
    division: 'Sylhet',
    coordinates: { lat: 24.8944, lon: 91.8683 },
    contact_info: {
      phone: '+880-821-719123',
      email: 'dc@sylhet.gov.bd',
      website: 'https://dc.sylhet.gov.bd',
      address: 'Sylhet District Commissioner Office, Sylhet'
    },
    services: ['District Administration', 'Tea Industry Regulation', 'Tourism Development'],
    working_hours: '9:00 AM - 5:00 PM',
    jurisdiction: 'Sylhet District',
    head_official: { title: 'District Commissioner' }
  },
  {
    id: 'barishal-dc',
    name: 'Barishal District Commissioner Office',
    bn_name: 'বরিশাল জেলা প্রশাসকের কার্যালয়',
    type: 'administrative',
    category: 'district',
    district: 'Barishal',
    division: 'Barishal',
    coordinates: { lat: 22.7010, lon: 90.3535 },
    contact_info: {
      phone: '+880-431-217643',
      email: 'dc@barishal.gov.bd',
      website: 'https://dc.barishal.gov.bd',
      address: 'Barishal District Commissioner Office, Barishal'
    },
    services: ['District Governance', 'River Management', 'Coastal Development'],
    working_hours: '9:00 AM - 5:00 PM',
    jurisdiction: 'Barishal District',
    head_official: { title: 'District Commissioner' }
  },
  {
    id: 'rangpur-dc',
    name: 'Rangpur District Commissioner Office',
    bn_name: 'রংপুর জেলা প্রশাসকের কার্যালয়',
    type: 'administrative',
    category: 'district',
    district: 'Rangpur',
    division: 'Rangpur',
    coordinates: { lat: 25.7467, lon: 89.2500 },
    contact_info: {
      phone: '+880-521-62345',
      email: 'dc@rangpur.gov.bd',
      website: 'https://dc.rangpur.gov.bd',
      address: 'Rangpur District Commissioner Office, Rangpur'
    },
    services: ['Agricultural Administration', 'District Planning', 'Public Services'],
    working_hours: '9:00 AM - 5:00 PM',
    jurisdiction: 'Rangpur District',
    head_official: { title: 'District Commissioner' }
  },
  {
    id: 'mymensingh-dc',
    name: 'Mymensingh District Commissioner Office',
    bn_name: 'ময়মনসিংহ জেলা প্রশাসকের কার্যালয়',
    type: 'administrative',
    category: 'district',
    district: 'Mymensingh',
    division: 'Mymensingh',
    coordinates: { lat: 24.7471, lon: 90.4203 },
    contact_info: {
      phone: '+880-91-54234',
      email: 'dc@mymensingh.gov.bd',
      website: 'https://dc.mymensingh.gov.bd',
      address: 'Mymensingh District Commissioner Office, Mymensingh'
    },
    services: ['District Administration', 'Education Oversight', 'Agricultural Development'],
    working_hours: '9:00 AM - 5:00 PM',
    jurisdiction: 'Mymensingh District',
    head_official: { title: 'District Commissioner' }
  }
];
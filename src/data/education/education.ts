import { EducationalInstitution } from '../../types/education';

export const educationalInstitutions: EducationalInstitution[] = [
  {
    id: 'du',
    name: 'University of Dhaka',
    bn_name: 'ঢাকা বিশ্ববিদ্যালয়',
    type: 'university',
    category: 'public',
    district: 'Dhaka',
    division: 'Dhaka',
    established: 1921,
    description: 'Oldest and most prestigious university in Bangladesh, known for its academic excellence.',
    coordinates: { lat: 23.7333, lon: 90.4086 },
    contact_info: {
      phone: '+880-2-9661900',
      email: 'info@du.ac.bd',
      website: 'https://www.du.ac.bd',
      address: 'Nilkhet Road, Dhaka 1000'
    },
    facilities: ['Library', 'Hostels', 'Sports Complex', 'Medical Center'],
    departments: ['Arts', 'Science', 'Business Studies', 'Engineering', 'Law', 'Social Sciences'],
    student_count: 37000,
    faculty_count: 1800,
    accreditation: ['UGC', 'IAU'],
    ranking: { national: 1, international: 2000 },
    admission_info: {
      requirements: ['HSC Certificate', 'Minimum GPA 3.5'],
      fees: { admission: 1000, tuition: 2000, currency: 'BDT' }
    }
  },
  {
    id: 'buet',
    name: 'Bangladesh University of Engineering and Technology',
    bn_name: 'বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়',
    type: 'engineering-college',
    category: 'public',
    district: 'Dhaka',
    division: 'Dhaka',
    established: 1962,
    description: 'Premier engineering institution in Bangladesh, renowned for technological education.',
    coordinates: { lat: 23.7267, lon: 90.3892 },
    contact_info: {
      phone: '+880-2-55167100',
      email: 'info@buet.ac.bd',
      website: 'https://www.buet.ac.bd',
      address: 'West Palashi, Dhaka 1000'
    },
    facilities: ['Advanced Labs', 'Research Centers', 'Library', 'Hostels'],
    departments: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Computer Science'],
    student_count: 5500,
    faculty_count: 500,
    accreditation: ['UGC', 'ABET'],
    ranking: { national: 2, international: 1500 }
  },
  {
    id: 'bsmmu',
    name: 'Bangabandhu Sheikh Mujib Medical University',
    bn_name: 'বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়',
    type: 'medical-college',
    category: 'public',
    district: 'Dhaka',
    division: 'Dhaka',
    established: 1998,
    description: 'Leading medical university in Bangladesh, named after Bangabandhu Sheikh Mujibur Rahman.',
    coordinates: { lat: 23.7389, lon: 90.3964 },
    contact_info: {
      phone: '+880-2-55165088',
      email: 'info@bsmmu.edu.bd',
      website: 'https://www.bsmmu.edu.bd',
      address: 'Shahbag, Dhaka 1000'
    },
    facilities: ['Teaching Hospital', 'Research Labs', 'Library'],
    departments: ['Medicine', 'Surgery', 'Gynecology', 'Pediatrics'],
    student_count: 1200,
    faculty_count: 300,
    accreditation: ['UGC', 'WHO']
  },
  {
    id: 'cu',
    name: 'University of Chittagong',
    bn_name: 'চট্টগ্রাম বিশ্ববিদ্যালয়',
    type: 'university',
    category: 'public',
    district: 'Chittagong',
    division: 'Chittagong',
    established: 1966,
    description: 'Second largest university in Bangladesh, located on a scenic hilltop.',
    coordinates: { lat: 22.4711, lon: 91.7894 },
    contact_info: {
      phone: '+880-31-2606001',
      email: 'info@cu.ac.bd',
      website: 'https://www.cu.ac.bd',
      address: 'Chittagong University, Hathazari, Chittagong 4331'
    },
    facilities: ['Library', 'Hostels', 'Sports Facilities'],
    departments: ['Arts', 'Science', 'Business', 'Marine Sciences'],
    student_count: 25000,
    faculty_count: 1000,
    ranking: { national: 3 }
  },
  {
    id: 'ru',
    name: 'University of Rajshahi',
    bn_name: 'রাজশাহী বিশ্ববিদ্যালয়',
    type: 'university',
    category: 'public',
    district: 'Rajshahi',
    division: 'Rajshahi',
    established: 1953,
    description: 'One of the largest universities in Bangladesh, known for its beautiful campus.',
    coordinates: { lat: 24.3667, lon: 88.6333 },
    contact_info: {
      phone: '+880-721-750041',
      email: 'info@ru.ac.bd',
      website: 'https://www.ru.ac.bd',
      address: 'Rajshahi University, Rajshahi 6205'
    },
    facilities: ['Library', 'Botanical Garden', 'Sports Complex'],
    departments: ['Arts', 'Science', 'Agriculture', 'Engineering'],
    student_count: 35000,
    faculty_count: 1200,
    ranking: { national: 4 }
  },
  {
    id: 'ku',
    name: 'Khulna University',
    bn_name: 'খুলনা বিশ্ববিদ্যালয়',
    type: 'university',
    category: 'public',
    district: 'Khulna',
    division: 'Khulna',
    established: 1991,
    description: 'Public university in Khulna, known for its focus on science and technology.',
    coordinates: { lat: 22.8456, lon: 89.5384 },
    contact_info: {
      phone: '+880-41-720171',
      email: 'info@ku.ac.bd',
      website: 'https://www.ku.ac.bd',
      address: 'Khulna University, Khulna 9208'
    },
    facilities: ['Library', 'Computer Labs', 'Sports Facilities'],
    departments: ['Science', 'Engineering', 'Arts', 'Business'],
    student_count: 8000,
    faculty_count: 400
  },
  {
    id: 'sust',
    name: 'Shahjalal University of Science and Technology',
    bn_name: 'শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়',
    type: 'university',
    category: 'public',
    district: 'Sylhet',
    division: 'Sylhet',
    established: 1986,
    description: 'Leading science and technology university in northeastern Bangladesh.',
    coordinates: { lat: 24.9167, lon: 91.8333 },
    contact_info: {
      phone: '+880-821-713491',
      email: 'info@sust.edu',
      website: 'https://www.sust.edu',
      address: 'Shahjalal University of Science and Technology, Sylhet 3114'
    },
    facilities: ['Research Labs', 'Library', 'Hostels'],
    departments: ['Engineering', 'Science', 'Business', 'Arts'],
    student_count: 10000,
    faculty_count: 500,
    ranking: { national: 5 }
  },
  {
    id: 'brac-university',
    name: 'BRAC University',
    bn_name: 'ব্র্যাক বিশ্ববিদ্যালয়',
    type: 'university',
    category: 'private',
    district: 'Dhaka',
    division: 'Dhaka',
    established: 2001,
    description: 'Private university founded by BRAC, known for its social development focus.',
    coordinates: { lat: 23.7800, lon: 90.4072 },
    contact_info: {
      phone: '+880-2-222264051',
      email: 'info@bracu.ac.bd',
      website: 'https://www.bracu.ac.bd',
      address: '66 Mohakhali, Dhaka 1212'
    },
    facilities: ['Modern Campus', 'Library', 'Sports Facilities'],
    departments: ['Business', 'Engineering', 'Arts', 'Science'],
    student_count: 12000,
    faculty_count: 600
  },
  {
    id: 'nsu',
    name: 'North South University',
    bn_name: 'নর্থ সাউথ বিশ্ববিদ্যালয়',
    type: 'university',
    category: 'private',
    district: 'Dhaka',
    division: 'Dhaka',
    established: 1992,
    description: 'First private university in Bangladesh, known for its American-style education.',
    coordinates: { lat: 23.8151, lon: 90.4255 },
    contact_info: {
      phone: '+880-2-55668200',
      email: 'info@northsouth.edu',
      website: 'https://www.northsouth.edu',
      address: 'Plot 15, Block B, Bashundhara, Dhaka 1229'
    },
    facilities: ['Library', 'Sports Complex', 'Hostels'],
    departments: ['Business', 'Engineering', 'Arts', 'Science'],
    student_count: 20000,
    faculty_count: 800
  },
  {
    id: 'iut',
    name: 'Islamic University of Technology',
    bn_name: 'ইসলামিক ইউনিভার্সিটি অব টেকনোলজি',
    type: 'university',
    category: 'international',
    district: 'Gazipur',
    division: 'Dhaka',
    established: 1978,
    description: 'International university under OIC, specializing in engineering and technology.',
    coordinates: { lat: 24.0833, lon: 90.4167 },
    contact_info: {
      phone: '+880-2-8923501',
      email: 'info@iutoic-dhaka.edu',
      website: 'https://www.iutoic-dhaka.edu',
      address: 'Board Bazar, Gazipur 1704'
    },
    facilities: ['Engineering Labs', 'Library', 'Mosque'],
    departments: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering'],
    student_count: 2000,
    faculty_count: 150
  }
];
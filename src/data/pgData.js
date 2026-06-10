import { 
  FaWifi, 
  FaShieldAlt, 
  FaUtensils, 
  FaBed, 
  FaTshirt, 
  FaTint, 
  FaBolt, 
  FaParking, 
  FaTv, 
  FaBath,
  FaFileInvoiceDollar
} from 'react-icons/fa';
import { MdOutlineCleanHands, MdHealthAndSafety } from 'react-icons/md';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Amenities', path: '/amenities' },
  { name: 'Rooms & Pricing', path: '/rooms' },
  { name: 'Mess Package & Menu', path: '/mess' },
  { name: 'Event Celebration', path: '/events' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Feedback', path: '/feedback' },
];

export const stats = [
  { value: 500, label: 'Students Housed', suffix: '+' },
  { value: 100, label: 'Rooms Available', suffix: '+' },
  { value: 24, label: 'Security & CCTV', suffix: '/7' },
  { value: 4.8, label: 'Student Rating', suffix: ' ★' },
];

export const amenities = [
  {
    id: 'wifi',
    name: 'Free Unlimited WiFi',
    description: 'High-speed internet throughout the premises for seamless online studies.',
    icon: FaWifi,
    featured: true,
  },
  {
    id: 'security',
    name: 'CCTV & 24/7 Security',
    description: 'Round-the-clock security guards and continuous CCTV surveillance.',
    icon: FaShieldAlt,
    featured: true,
  },
  {
    id: 'meals',
    name: 'Homely Food',
    description: 'Nutritious breakfast, lunch, and dinner cooked in clean conditions.',
    icon: FaUtensils,
    featured: true,
  },
  {
    id: 'cleaning',
    name: 'Daily Room Cleaning',
    description: 'Professional housekeeping for hygienic rooms, bathrooms, and corridors.',
    icon: MdOutlineCleanHands,
    featured: true,
  },
  {
    id: 'hotwater',
    name: '24/7 Hot & Cold Water',
    description: 'Solar heating and geyser installations for continuous hot water.',
    icon: FaTint,
    featured: true,
  },
  {
    id: 'power',
    name: '24/7 Power Backup',
    description: 'Inverter and generator support for uninterrupted studies during blackouts.',
    icon: FaBolt,
    featured: true,
  },
  {
    id: 'appliances',
    name: 'Washing Machine & Refrigerator',
    description: 'Common refrigerator and fully automatic washing machines for laundry.',
    icon: FaTshirt,
    featured: false,
  },
  {
    id: 'drinking',
    name: 'Mineral Drinking Water',
    description: 'RO water purifiers installed on every floor for clean drinking water.',
    icon: FaTint,
    featured: false,
  },
  {
    id: 'parking',
    name: 'Two-Wheeler Parking',
    description: 'Secure, dedicated parking space for student vehicles.',
    icon: FaParking,
    featured: false,
  },
  {
    id: 'bathroom',
    name: 'Attached Washroom',
    description: 'Modern attached bathrooms with basins, mirrors, and premium fittings.',
    icon: FaBath,
    featured: false,
  },
  {
    id: 'health',
    name: 'Free Health Checkups',
    description: 'Regular health examinations and emergency medical assistance.',
    icon: MdHealthAndSafety,
    featured: false,
  },
];

export const rooms = [
  {
    id: 'double-sharing',
    type: 'Double Sharing Room',
    tagline: 'Perfect balance of privacy and companionship',
    basePrice: 9500, // example price
    balcony: true,
    features: [
      'Spacious layout with attached Balcony',
      'Individual study tables and wardrobes',
      'Modern attached washrooms with basins and mirrors',
      'High-speed WiFi connectivity',
      'Daily room cleaning & weekly deep maintenance'
    ],
    // High-quality Airbnb style room images
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'triple-sharing',
    type: 'Triple Sharing Room',
    tagline: 'Economical, lively and highly student-friendly',
    basePrice: 8000, // example price
    balcony: true,
    features: [
      'Well-ventilated room with attached Balcony',
      'Individual lockers and storage sections',
      'Clean attached bathroom with quality geysers',
      'Daily sanitation and rubbish disposal',
      'RO drinking water station outside the door'
    ],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Aditya Shinde',
    role: 'MIT ADT Student (B.Tech CSE)',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    review: 'Sahyadri PG has been my home for 2 years now. The food is honestly like home, the WiFi never fails, and its located extremely close to campus. Security is top notch!'
  },
  {
    id: 2,
    name: 'Rohan Deshmukh',
    role: 'MIT ADT Student (Design)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    review: 'Clean rooms, attached balcony, and very helpful staff. Whenever we have a minor issue (like water or light), the management resolves it in minutes. Highly recommended!'
  },
  {
    id: 3,
    name: 'Snehal Patil',
    role: 'MIT ADT Student (BBA)',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    review: 'Very safe environment for girls. CCTV coverage, daily room cleaning, and automatic washing machines make student life very convenient.'
  },
  {
    id: 4,
    name: 'Pranav Kulkarni',
    role: 'MIT ADT Student (M.Tech)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    rating: 4,
    review: 'The mess food is very hygienic and they serve daily breakfast, lunch, and dinner. The battery backup is a lifesaver during exams.'
  }
];

export const contactInfo = {
  phones: ['+91 9504059393', '+91 9119015353'],
  address: 'Chintamani Park, Near MIT ADT University, Loni Kalbhor, Pune, Maharashtra 412201',
  email: 'info@sahyadripg.com',
  whatsapp: '919504059393', // international format without +
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5683938446274!2d73.9784386!3d18.5032517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c20a8fae8557%3A0xe104443907c0879f!2sMIT%20Art%2C%20Design%20and%20Technology%20University!5e0!3m2!1sen!2sin!4v1717900000000!5m2!1sen!2sin',
};

export const weeklyMenu = {
  days: [
    {
      day: 'Monday',
      breakfast: 'Misal Pav / Poha, Tea/Coffee',
      lunch: 'Veg Kolhapuri, Dal Tadka, Jeera Rice, Chapatis, Salad',
      dinner: 'Aloo Methi Dry, Dal Fry, Steam Rice, Chapatis'
    },
    {
      day: 'Tuesday',
      breakfast: 'Idli Sambhar / Upma, Tea/Coffee',
      lunch: 'Paneer Masala, Yellow Dal, Veg Pulao, Roti, Buttermilk',
      dinner: 'Shev Bhaji, Plain Rice, Chapatis, Papad'
    },
    {
      day: 'Wednesday',
      breakfast: 'Aloo Paratha with Curd, Tea/Coffee',
      lunch: 'Dry Bhindi Fry, Dal Kolhapuri, Rice, Chapatis',
      dinner: 'Special Chicken Curry (Non-Veg) / Paneer Butter Masala (Veg), Rice, Chapatis, Sweet'
    },
    {
      day: 'Thursday',
      breakfast: 'Sabudana Khichdi / Poha, Tea/Coffee',
      lunch: 'Baingan Masala, Moong Dal Fry, Steam Rice, Chapatis',
      dinner: 'Veg Jalfrezi, Kadhi Pakora, Khichdi, Salad'
    },
    {
      day: 'Friday',
      breakfast: 'Medu Vada / Upma, Tea/Coffee',
      lunch: 'Chole Bhature / Chole Rice, Chapatis, Pickle, Salad',
      dinner: 'Mix Veg Curry, Dal Fry, Cumin Rice, Chapatis'
    },
    {
      day: 'Saturday',
      breakfast: 'Uttapam with Chutney, Tea/Coffee',
      lunch: 'Aloo Gobi Matar, Dal Tadka, Steam Rice, Chapatis',
      dinner: 'Pav Bhaji / Veg Biryani with Raita, Sweet'
    },
    {
      day: 'Sunday',
      breakfast: 'Special Poori Bhaji, Tea/Coffee',
      lunch: 'Special Veg Thali (Paneer, Veg Handi, Dal Makhani, Pulao, Chapatis, Gulab Jamun)',
      dinner: 'Khichdi Kadhi, Papad, Pickle (Light Dinner)'
    }
  ],
  nutritionHighlights: [
    { title: '100% Homely Cooked', desc: 'Prepared by experienced cooks with minimal oil and no artificial colors.' },
    { title: 'Nutritious & Balanced', desc: 'Well-portioned carbohydrates, proteins, and vitamins in every meal.' },
    { title: 'Fresh Daily Deliveries', desc: 'Vegetables and dairy sourced fresh every morning for maximum quality.' }
  ]
};

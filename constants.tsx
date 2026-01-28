
import React from 'react';
import {
  Code,
  Layout,
  Smartphone,
  Database,
  ShieldCheck,
  Cpu,
  Users,
  Globe,
  Lightbulb,
  Target,
  TrendingUp,
  BrainCircuit,
  Lock,
  Cloud,
  Terminal,
  SearchCheck,
  Palette,
  Briefcase
} from 'lucide-react';
import { Course, Solution, UpcomingClass, Testimonial, Stat, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', view: 'home' },
  { label: 'About', href: '#about', view: 'about' },
  { label: 'Courses', href: '#courses', view: 'courses' },
  { label: 'Internship', href: '#internship', view: 'internship' },
  { label: 'Solutions', href: '#solutions', view: 'solutions' },
  { label: 'Contact', href: '#contact', view: 'contact' },
];

const instructors = {
  aakriti: {
    name: 'Akash Prasad Barai',
    role: 'UI/UX Designer',
    avatar: '/team/Akas Barai.jpeg',
    bio: 'Creative designer with expertise in user-centered design and modern prototyping tools.'
  },
  akas: {
    name: 'Supriya Dwivedi',
    role: 'Full Stack Developer',
    avatar: '/team/Supriya Dwivedi.jpg',
    bio: 'Experienced developer specializing in MERN stack and scalable web applications.'
  },
  anjali: {
    name: 'Anjali Bista',
    role: 'Graphic Designer',
    avatar: '/team/Anjali Bista.jpg',
    bio: 'Talented graphic designer with a passion for visual storytelling and branding.'
  },
  parwesh: {
    name: 'Akash Prasad Barai',
    role: 'QA Engineer',
    avatar: '/team/Akas Barai.jpeg',
    bio: 'Quality assurance expert focused on delivering bug-free software solutions.'
  },
  supriya: {
    name: 'Aakriti Bista',
    role: 'Digital Marketing Specialist',
    avatar: '/team/Aakriti Bista.jpeg',
    bio: 'Marketing strategist with skills in SEO, social media, and digital campaigns.'
  }
};

const DEFAULT_CURRICULUM = [
  { title: 'Module 1: Fundamentals', duration: '3 Weeks', topics: ['Environment Setup', 'Core Syntax', 'Best Practices'] },
  { title: 'Module 2: Intermediate Concepts', duration: '4 Weeks', topics: ['Advanced API usage', 'State Management', 'Testing'] },
  { title: 'Module 3: Advanced Engineering', duration: '5 Weeks', topics: ['Cloud Deployment', 'Security Auditing', 'Performance Tuning'] }
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'UI/UX Designing',
    description: 'Master the art of user-centric design with Figma and industry-standard prototyping workflows.',
    icon: <Layout className="w-6 h-6" />,
    tag: 'Design',
    level: 'Beginner',
    duration: '2.5 Months',
    mode: 'Offline',
    price: 'NPR 25,000',
    originalPrice: 'NPR 35,000',
    rating: 4.7,
    reviewsCount: 56,
    instructor: instructors.aakriti,
    learningOutcomes: ['Design Thinking', 'Visual Hierarchy', 'Prototyping in Figma', 'User Testing', 'Wireframing', 'Usability Testing'],
    curriculum: [
      { title: 'Module 1: Design Fundamentals', duration: '2 Weeks', topics: ['Color Theory', 'Typography', 'Layout Principles'] },
      { title: 'Module 2: UI Design', duration: '3 Weeks', topics: ['Figma Basics', 'Component Design', 'Responsive Design'] },
      { title: 'Module 3: UX Research', duration: '3 Weeks', topics: ['User Research', 'Personas', 'Journey Mapping'] }
    ]
  },
  {
    id: '2',
    title: 'MERN Stack',
    description: 'Master MERN stack (MongoDB, Express, React, Node) and build enterprise-grade applications.',
    icon: <Code className="w-6 h-6" />,
    tag: 'Web Development',
    level: 'Beginner',
    duration: '3 Months',
    mode: 'Hybrid',
    price: 'NPR 35,000',
    originalPrice: 'NPR 45,000',
    rating: 4.8,
    reviewsCount: 124,
    instructor: instructors.akas,
    learningOutcomes: ['Master industry-standard tools', 'Understand core principles', 'Deploy applications', 'Build real-world projects', 'Collaborate in teams', 'Best coding practices'],
    curriculum: [
      { title: 'Module 1: Frontend with React', duration: '4 Weeks', topics: ['React Basics', 'Components', 'State Management'] },
      { title: 'Module 2: Backend with Node.js', duration: '4 Weeks', topics: ['Express.js', 'API Development', 'Authentication'] },
      { title: 'Module 3: Database with MongoDB', duration: '4 Weeks', topics: ['MongoDB Basics', 'Mongoose', 'Data Modeling'] }
    ]
  },
  {
    id: '3',
    title: 'Graphic Designing',
    description: 'Learn graphic design principles and tools to create stunning visuals for branding and marketing.',
    icon: <Palette className="w-6 h-6" />,
    tag: 'Design',
    level: 'Beginner',
    duration: '2 Months',
    mode: 'Offline',
    price: 'NPR 20,000',
    originalPrice: 'NPR 30,000',
    rating: 4.6,
    reviewsCount: 78,
    instructor: instructors.anjali,
    learningOutcomes: ['Adobe Creative Suite', 'Branding Design', 'Digital Illustration', 'Print Design', 'Color Theory', 'Composition'],
    curriculum: [
      { title: 'Module 1: Design Basics', duration: '2 Weeks', topics: ['Elements of Design', 'Color Theory', 'Typography'] },
      { title: 'Module 2: Adobe Tools', duration: '4 Weeks', topics: ['Photoshop', 'Illustrator', 'InDesign'] },
      { title: 'Module 3: Projects', duration: '2 Weeks', topics: ['Logo Design', 'Poster Design', 'Branding Kit'] }
    ]
  },
  {
    id: '4',
    title: 'Quality Assurance (QA)',
    description: 'Learn software testing methodologies and tools to ensure high-quality software delivery.',
    icon: <SearchCheck className="w-6 h-6" />,
    tag: 'Quality Assurance',
    level: 'Intermediate',
    duration: '2.5 Months',
    mode: 'Online',
    price: 'NPR 28,000',
    originalPrice: 'NPR 38,000',
    rating: 4.7,
    reviewsCount: 92,
    instructor: instructors.parwesh,
    learningOutcomes: ['Manual Testing', 'Automated Testing', 'Test Planning', 'Bug Tracking', 'Performance Testing', 'Agile Testing'],
    curriculum: [
      { title: 'Module 1: Testing Fundamentals', duration: '3 Weeks', topics: ['SDLC', 'Testing Types', 'Test Cases'] },
      { title: 'Module 2: Automation', duration: '3 Weeks', topics: ['Selenium', 'Cypress', 'API Testing'] },
      { title: 'Module 3: Advanced QA', duration: '2 Weeks', topics: ['Performance Testing', 'Security Testing', 'CI/CD'] }
    ]
  },
  {
    id: '5',
    title: 'Web Designing',
    description: 'Create beautiful and responsive websites using HTML, CSS, and modern design principles.',
    icon: <Layout className="w-6 h-6" />,
    tag: 'Web Development',
    level: 'Beginner',
    duration: '2 Months',
    mode: 'Hybrid',
    price: 'NPR 22,000',
    originalPrice: 'NPR 32,000',
    rating: 4.5,
    reviewsCount: 105,
    instructor: instructors.aakriti,
    learningOutcomes: ['HTML5 & CSS3', 'Responsive Design', 'JavaScript Basics', 'Web Accessibility', 'SEO Principles', 'Version Control'],
    curriculum: [
      { title: 'Module 1: HTML & CSS', duration: '3 Weeks', topics: ['HTML Structure', 'CSS Styling', 'Flexbox & Grid'] },
      { title: 'Module 2: JavaScript', duration: '2 Weeks', topics: ['DOM Manipulation', 'Events', 'Basic Scripting'] },
      { title: 'Module 3: Projects', duration: '3 Weeks', topics: ['Portfolio Site', 'Landing Page', 'Responsive Design'] }
    ]
  },
  {
    id: '6',
    title: 'Digital Marketing',
    description: 'Master digital marketing strategies including SEO, social media, and online advertising.',
    icon: <TrendingUp className="w-6 h-6" />,
    tag: 'Marketing',
    level: 'Beginner',
    duration: '2.5 Months',
    mode: 'Online',
    price: 'NPR 26,000',
    originalPrice: 'NPR 36,000',
    rating: 4.8,
    reviewsCount: 134,
    instructor: instructors.supriya,
    learningOutcomes: ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Analytics', 'PPC Advertising'],
    curriculum: [
      { title: 'Module 1: Marketing Fundamentals', duration: '2 Weeks', topics: ['Digital Landscape', 'Target Audience', 'Marketing Strategy'] },
      { title: 'Module 2: Channels & Tools', duration: '4 Weeks', topics: ['Google Ads', 'Social Platforms', 'Analytics Tools'] },
      { title: 'Module 3: Campaigns', duration: '2 Weeks', topics: ['Campaign Planning', 'A/B Testing', 'Performance Tracking'] }
    ]
  },
  {
    id: '7',
    title: 'Python',
    description: 'Learn Python programming from basics to advanced concepts including data analysis and automation.',
    icon: <BrainCircuit className="w-6 h-6" />,
    tag: 'Programming',
    level: 'Beginner',
    duration: '3 Months',
    mode: 'Online',
    price: 'NPR 30,000',
    originalPrice: 'NPR 40,000',
    rating: 4.9,
    reviewsCount: 156,
    instructor: instructors.akas,
    learningOutcomes: ['Python Syntax', 'Data Structures', 'Object-Oriented Programming', 'Libraries (Pandas, NumPy)', 'Web Scraping', 'Automation'],
    curriculum: [
      { title: 'Module 1: Python Basics', duration: '4 Weeks', topics: ['Syntax', 'Data Types', 'Control Flow'] },
      { title: 'Module 2: Advanced Python', duration: '4 Weeks', topics: ['OOP', 'File Handling', 'Error Handling'] },
      { title: 'Module 3: Applications', duration: '4 Weeks', topics: ['Data Analysis', 'Web Development', 'Automation Scripts'] }
    ]
  },
  {
    id: '8',
    title: 'Office Package',
    description: 'Master Microsoft Office suite including Word, Excel, PowerPoint for professional productivity.',
    icon: <Briefcase className="w-6 h-6" />,
    tag: 'Productivity',
    level: 'Beginner',
    duration: '1.5 Months',
    mode: 'Offline',
    price: 'NPR 15,000',
    originalPrice: 'NPR 25,000',
    rating: 4.4,
    reviewsCount: 89,
    instructor: instructors.anjali,
    learningOutcomes: ['Word Processing', 'Spreadsheet Management', 'Presentation Skills', 'Data Analysis in Excel', 'Collaboration Tools', 'Advanced Features'],
    curriculum: [
      { title: 'Module 1: Microsoft Word', duration: '2 Weeks', topics: ['Document Creation', 'Formatting', 'Mail Merge'] },
      { title: 'Module 2: Excel', duration: '3 Weeks', topics: ['Formulas', 'Charts', 'Pivot Tables'] },
      { title: 'Module 3: PowerPoint & Outlook', duration: '2 Weeks', topics: ['Presentations', 'Email Management', 'Integration'] }
    ]
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: '1',
    title: 'UI/UX Strategy',
    description: 'Visionary designs that engage users and drive meaningful business results.',
    icon: <Target className="w-8 h-8" />
  },
  {
    id: '2',
    title: 'Custom Software',
    description: 'Tailored enterprise solutions built to solve complex organizational challenges.',
    icon: <Cpu className="w-8 h-8" />
  },
  {
    id: '3',
    title: 'Cloud Security',
    description: 'Hardened infrastructure and real-time monitoring to protect your digital assets.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: '4',
    title: 'Maintenance & Support',
    description: '24/7 dedicated support to ensure your systems run smoothly and efficiently.',
    icon: <TrendingUp className="w-8 h-8" />
  }
];

export const UPCOMING_CLASSES: UpcomingClass[] = [
  { id: '1', title: 'UI/UX Designing Fundamentals', date: 'Nov 5', time: '10:00 AM', instructor: 'Akash Prasad Barai' },
  { id: '2', title: 'MERN Stack Introduction', date: 'Nov 7', time: '02:00 PM', instructor: 'Supriya Dwwivedi' },
  { id: '3', title: 'Graphic Designing with Adobe', date: 'Nov 10', time: '09:00 AM', instructor: 'Anjali Bista' },
  { id: '4', title: 'Quality Assurance Basics', date: 'Nov 12', time: '11:00 AM', instructor: 'Akasah Prasad Barai' },
  { id: '5', title: 'Web Designing Workshop', date: 'Nov 15', time: '01:00 PM', instructor: 'Anjali Bista' },
  { id: '6', title: 'Digital Marketing Strategies', date: 'Nov 18', time: '03:00 PM', instructor: 'Aakriti Bista' },
  { id: '7', title: 'Python Programming', date: 'Nov 20', time: '10:00 AM', instructor: 'Suupriya Dwivedi' },
  { id: '8', title: 'Office Package Training', date: 'Nov 22', time: '09:00 AM', instructor: 'Aakriti Bista' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    role: 'Full Stack Developer',
    content: 'Auralith Bit gave me real-world IT experience. The transition from student to professional was seamless thanks to their mentorship.',
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'David Thompson',
    role: 'Startup Founder',
    content: 'Professional delivery and innovative digital solutions. They transformed our legacy system into a high-performance modern app.',
    avatar: 'https://picsum.photos/id/91/100/100'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    content: 'The curriculum is world-class. I learned tools and techniques that I use every day in my current role at a top tech firm.',
    avatar: 'https://picsum.photos/id/102/100/100'
  }
];

export const STATS: Stat[] = [
  { label: 'Trained Learners', value: '15,000+' },
  { label: 'Projects Delivered', value: '450+' },
  { label: 'Expert Mentors', value: '50+' },
  { label: 'Global Partners', value: '120+' }
];

export const WHY_CHOOSE_US = [
  { title: 'Industry Expertise', description: 'Curriculum designed by active tech leaders.', icon: <Users className="w-6 h-6" /> },
  { title: 'Real-world Exposure', description: 'Work on live client projects from day one.', icon: <Globe className="w-6 h-6" /> },
  { title: 'Career Acceleration', description: '95% placement rate for our graduates.', icon: <TrendingUp className="w-6 h-6" /> },
  { title: 'Modern Facilities', description: 'Cutting-edge tech stack and learning environment.', icon: <Lightbulb className="w-6 h-6" /> }
];

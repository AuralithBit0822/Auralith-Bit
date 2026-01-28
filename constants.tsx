
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
  SearchCheck
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

const DEFAULT_INSTRUCTOR = {
  name: 'Sushil Sharma',
  role: 'Senior Full Stack Dev',
  avatar: 'https://picsum.photos/id/64/100/100',
  bio: 'Expert with 8+ years of industry experience. Passionate about teaching and mentoring the next generation of developers.'
};

const DEFAULT_CURRICULUM = [
  { title: 'Module 1: Fundamentals', duration: '3 Weeks', topics: ['Environment Setup', 'Core Syntax', 'Best Practices'] },
  { title: 'Module 2: Intermediate Concepts', duration: '4 Weeks', topics: ['Advanced API usage', 'State Management', 'Testing'] },
  { title: 'Module 3: Advanced Engineering', duration: '5 Weeks', topics: ['Cloud Deployment', 'Security Auditing', 'Performance Tuning'] }
];

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Full Stack Web Development',
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
    instructor: DEFAULT_INSTRUCTOR,
    learningOutcomes: ['Master industry-standard tools', 'Understand core principles', 'Deploy applications', 'Build real-world projects', 'Collaborate in teams', 'Best coding practices'],
    curriculum: DEFAULT_CURRICULUM
  },
  {
    id: '2',
    title: 'Data Science & AI with Python',
    description: 'Deep dive into neural networks, LLMs, and data modeling with Python and TensorFlow.',
    icon: <BrainCircuit className="w-6 h-6" />,
    tag: 'Data Science',
    level: 'Intermediate',
    duration: '4 Months',
    mode: 'Online',
    price: 'NPR 40,000',
    originalPrice: 'NPR 50,000',
    rating: 4.9,
    reviewsCount: 89,
    instructor: DEFAULT_INSTRUCTOR,
    learningOutcomes: ['Statistical analysis', 'Deep Learning basics', 'Big Data handling', 'Model Deployment'],
    curriculum: DEFAULT_CURRICULUM
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
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
    instructor: DEFAULT_INSTRUCTOR,
    learningOutcomes: ['Design Thinking', 'Visual Hierarchy', 'Prototyping in Figma', 'User Testing'],
    curriculum: DEFAULT_CURRICULUM
  },
  {
    id: '4',
    title: 'Mobile App Engineering',
    description: 'Create high-performance iOS and Android apps using Flutter and React Native.',
    icon: <Smartphone className="w-6 h-6" />,
    tag: 'Mobile Development',
    level: 'Beginner',
    duration: '3 Months',
    mode: 'Hybrid',
    price: 'NPR 30,000',
    originalPrice: 'NPR 40,000',
    rating: 4.8,
    reviewsCount: 72,
    instructor: DEFAULT_INSTRUCTOR,
    learningOutcomes: ['Cross-platform dev', 'Native APIs', 'Push Notifications', 'App Store Deployment'],
    curriculum: DEFAULT_CURRICULUM
  },
  {
    id: '5',
    title: 'Cybersecurity Professional',
    description: 'Protect enterprise infrastructure with advanced penetration testing and security audits.',
    icon: <Lock className="w-6 h-6" />,
    tag: 'Cybersecurity',
    level: 'Advanced',
    duration: '4 Months',
    mode: 'Online',
    price: 'NPR 45,000',
    originalPrice: 'NPR 55,000',
    rating: 4.9,
    reviewsCount: 45,
    instructor: DEFAULT_INSTRUCTOR,
    learningOutcomes: ['Network Security', 'Ethical Hacking', 'Risk Management', 'Compliance'],
    curriculum: DEFAULT_CURRICULUM
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
  { id: '1', title: 'React Performance Ops', date: 'Oct 24', time: '10:00 AM', instructor: 'Sarah Chen' },
  { id: '2', title: 'Advanced UX Research', date: 'Oct 25', time: '02:00 PM', instructor: 'Dr. Marcus Lee' },
  { id: '3', title: 'Cloud-Native Security', date: 'Oct 27', time: '09:00 AM', instructor: 'James Wilson' },
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

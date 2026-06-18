/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, ExperienceItem, ServiceItem, Testimonial } from './types';

export const PERSONAL_INFO = {
  fullName: 'Harsh Patel',
  badgeName: 'HP.',
  title: 'Full Stack Developer & IT Engineering Student',
  subtitle: 'Building Digital Products That Solve Real Problems.',
  location: 'Mumbai, India',
  email: 'harshpatelji999@gmail.com',
  github: 'https://github.com/theharsh999', // standard links
  linkedin: 'https://linkedin.com',
  resumeUrl: 'https://drive.google.com/file/d/1xKG7Z3_fCvPa6aJ39pck4a7hrRIymY7S/view?usp=sharing',
  aboutIntro: 'I am an Information Technology Engineering student, Full Stack Developer, Hackathon enthusiast, and persistent Problem Solver. With a strong engineering foundation and over 2 years of deep hands-on learning, I enjoy conceptualizing clean web architectures, composing scalable REST APIs, and launching responsive, user-first frontends.',
  stats: [
    { value: '9.0+', label: 'CGPA Score', sub: 'TCET Engineering' },
    { value: '100+', label: 'LeetCode Solved', sub: 'Algorithms & Structures' },
    { value: '10+', label: 'Projects Built', sub: 'Production & Academic' },
    { value: '2+ Years', label: 'Tech Experience', sub: 'Continuous Growth' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'resumeedge',
    title: 'ResumeEdge',
    description: 'An ATS-friendly resume builder featuring live editing, multiple templates, real-time preview, and professional PDF export.',
    detailedDescription: 'ResumeEdge is a modern ATS-friendly resume builder designed to help students, job seekers, and professionals create polished resumes quickly without relying on paid platforms. The platform focuses on simplicity, real-time editing, template customization, and professional PDF exports.',
    image: 'https://i.ibb.co/YBwRLgF0/Screenshot-2026-06-18-at-3-34-08-PM.jpg',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML2Canvas', 'jsPDF', 'Vercel'],
    features: [
      'Live Resume Builder: Users can edit resume information and instantly see updates reflected in the preview.',
      'Multiple Templates: Users can switch between professional templates without losing data.',
      'ATS-Friendly Layouts: Templates are designed to maintain clean structure and readability.',
      'PDF Export: Users can export resumes in high-quality PDF format.',
      'Responsive UI: Works smoothly across desktop and laptop screens.'
    ],
    liveUrl: 'https://resume-edge-ai.vercel.app/',
    githubUrl: 'https://github.com/theharsh999/resume-edge',
    featured: true,
    category: 'Frontend',
    categoryBadge: 'AI TOOL',
    architectureLabel: 'React Architecture',
    caseStudy: {
      overview: 'ResumeEdge is a modern ATS-friendly resume builder designed to help students, job seekers, and professionals create polished resumes quickly without relying on paid platforms. The platform focuses on simplicity, real-time editing, template customization, and professional PDF exports. Users can create resumes from scratch, switch between multiple templates, customize layout and styling, preview changes instantly, and export resumes as professional PDFs.',
      problem: 'Most free resume builders suffer from one or more of these issues: limited templates, watermarked exports, poor ATS compatibility, no live preview, poor mobile responsiveness, and paid subscription requirements. The goal was to build a completely free and modern resume builder that solves these problems.',
      solution: 'Developed ResumeEdge as a single-page web application featuring real-time resume editing, live synchronized preview, multiple ATS-friendly templates, template customization, professional PDF export, responsive design, and fast client-side rendering. The application provides a seamless workflow from resume creation to final export.',
      challenges: [
        'Accurate PDF Export: One major challenge was ensuring exported PDFs matched the on-screen preview. Issues included font rendering differences, layout shifts, section divider alignment, and color inconsistencies. These were resolved through multiple export optimizations and rendering adjustments.',
        'Template Consistency: Maintaining consistent styling and spacing across multiple templates required reusable component architecture and shared styling systems.'
      ],
      outcomes: [
        'Successfully built and deployed a fully functional resume builder.',
        'Implemented multiple professional templates.',
        'Achieved real-time editing and preview synchronization.',
        'Delivered high-quality PDF exports.',
        'Created a portfolio-ready SaaS-style project.'
      ],
      metrics: [
        { label: 'Development Time', value: '2 Weeks' },
        { label: 'Templates', value: '3 Professional Templates' },
        { label: 'Export Format', value: 'PDF' },
        { label: 'Deployment', value: 'Vercel' },
        { label: 'Status', value: 'Live Production Build' }
      ]
    }
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    description: 'A premium travel booking platform inspired by Airbnb, engineered with scalable server layouts, user authentication, and interactive map interfaces.',
    detailedDescription: 'Wanderlust connects travelers with peer-to-peer listings worldwide. Built using the MERN stack, it features seamless image uploads via Cloudinary, integrated interactive maps for location exploration, strict schema validations, and a robust user feedback loop with nested reviews.',
    image: 'https://i.ibb.co/nNPytp11/Screenshot-2026-06-17-at-8-21-35-AM.jpg',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Mapbox', 'JWT'],
    features: ['Secure User Authentication', 'Dynamic Peer Reviews & Ratings', 'Geospatial Search & Maps Integration', 'Image Storage & Cloud Hosting'],
    liveUrl: 'https://wanderlust-3sg5.onrender.com/listings',
    githubUrl: 'https://github.com/theharsh999/WanderLust',
    featured: true,
    category: 'Full-Stack'
  },
  {
    id: 'fixmycampus',
    title: 'FixMyCampus',
    description: 'An internal, interactive campus issue tracking portal enabling students to log complaints and administrators to resolve tasks efficiently.',
    detailedDescription: 'Designed to bridge student concerns and facility operations. Built with speed and state-governed forms, the application assigns complaints dynamically, updates issues in real-time, displays progress status indicators, and provides administrative oversight with aggregated charts.',
    image: 'https://i.ibb.co/5gn902Z4/Whats-App-Image-2026-04-02-at-21-44-57.jpg',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'ChartJS'],
    features: ['Automated Urgent Escalation', 'Comprehensive Admin Command Deck', 'Real-Time Complaint Logging', 'Secure Department Logins'],
    liveUrl: 'https://fix-my-campus-nine.vercel.app',
    githubUrl: 'https://github.com/theharsh999/FixMyCampus',
    featured: true,
    category: 'Full-Stack'
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', proficiency: 95, iconName: 'Html', subText: 'Semantic markup & SEO best practices' },
  { name: 'CSS3 / Tailwind', category: 'Frontend', proficiency: 92, iconName: 'Tv', subText: 'Modern responsive & elegant grids' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', proficiency: 90, iconName: 'Code', subText: 'Asynchronous scripting & ESNext syntax' },
  { name: 'React.js', category: 'Frontend', proficiency: 88, iconName: 'Cpu', subText: 'Hooks, context state & dynamic structures' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 85, iconName: 'Terminal', subText: 'Non-blocking I/O & server event streams' },
  { name: 'Express.js', category: 'Backend', proficiency: 87, iconName: 'Network', subText: 'Middleware architecture & router APIs' },
  { name: 'REST APIs', category: 'Backend', proficiency: 90, iconName: 'Globe', subText: 'Payload validation & payload optimization' },
  
  // Database
  { name: 'MongoDB', category: 'Database', proficiency: 82, iconName: 'Database', subText: 'Aggregation pipelines & index scaling' },
  { name: 'MySQL', category: 'Database', proficiency: 80, iconName: 'Database', subText: 'Relational normalizing & JOIN query fine-tuning' },
  
  // Tools
  { name: 'Git & GitHub', category: 'Tools', proficiency: 90, iconName: 'GitBranch', subText: 'Collaborative rebasing & action triggers' },
  { name: 'VS Code', category: 'Tools', proficiency: 95, iconName: 'FileCode', subText: 'Productive extension & compiler setups' },
  { name: 'Deployment', category: 'Tools', proficiency: 85, iconName: 'Cloud', subText: 'Deployed projects using Vercel, Render & MongoDB Atlas' },

  // Languages
  { name: 'Java', category: 'Languages', proficiency: 85, iconName: 'Briefcase', subText: 'OOP architecture & thread models' },
  { name: 'DSA', category: 'Languages', proficiency: 45, iconName: 'Flame', subText: 'Arrays, strings & recursion; learning lists, stacks, trees, DP & greedy techniques' }
];

export const TIMELINE_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2024 - Present',
    title: 'Bachelor of Engineering in Information Technology',
    organization: 'Thakur College of Engineering and Technology (TCET)',
    description: 'Acquiring rigid computer science foundations. Excelling academically with a consistent CGPA above 9.0, leading technological groups, and collaborating with peers on complex design problems.',
    tags: ['Data Structures', 'Operating Systems', 'Software Engineering', 'DBMS', 'Java'],
    type: 'Education'
  },
  {
    id: 'exp-2',
    period: 'Ongoing',
    title: 'Data Structures & Algorithms Journey',
    organization: 'Self-Directed Learning & Coding Foundations',
    description: 'Actively mastering core programming foundations and problem solving in Java. Practicing array manipulations, string algorithms, and recursion while currently moving towards lists, stacks, trees, DP, and greedy techniques.',
    tags: ['DSA', 'Java', 'Problem Solving', 'Recursion', 'Academic Foundations'],
    type: 'Extracurricular'
  },
  {
    id: 'exp-3',
    period: '2025',
    title: 'Hackathon Contender',
    organization: 'College Interactive Hackfests',
    description: 'Devised functional solutions under strict 24-hour schedules. Created problem solvers and campus utility prototypes, demonstrating collaborative product building skills.',
    tags: ['Fast Prototyping', 'MongoDB', 'Pitching Presentation', 'Pitch Deck'],
    type: 'Achievement'
  },
  {
    id: 'exp-4',
    period: 'Ongoing',
    title: 'Full Stack Developer',
    organization: 'Freelance & Academic Ventures',
    description: 'Delivering responsive web applications, modular React structures, and custom REST API implementations during hackathons, open-source work, and collegiate projects.',
    tags: ['MERN Stack', 'Tailwind Styling', 'Git Flow', 'Technical Learning'],
    type: 'Project'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Web Engineering',
    description: 'Designing and building interactive user interfaces with modern React, adhering to fluid layouts, seamless navigation, and eye-friendly styling.',
    features: ['Responsive CSS and Mobile-First Layouts', 'Integrated REST APIs', 'Tailwind CSS utility optimization', 'Clean component hierarchy'],
    iconName: 'Tv'
  },
  {
    id: 'srv-2',
    title: 'Full Stack Development',
    description: 'Connecting back-end API routes, working with database models, and learning proper middleware, state sync, and user verification.',
    features: ['Express and Node REST endpoint structures', 'MongoDB database modeling & schemas', 'JWT and token-based authentication setups', 'Server and Client-side data integration'],
    iconName: 'Cpu'
  },
  {
    id: 'srv-3',
    title: 'UI Design & Interactive Prototyping',
    description: 'Transforming rough design logic into interactive flows using subtle glassmorphism, precise structural grids, and custom micro-animations.',
    features: ['Prototyping dynamic state views', 'Consistent high-contrast visual standards', 'Space Grotesk typography curation', 'Smooth motion-activated interactions'],
    iconName: 'Sparkles'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aarav Mehta',
    role: 'Web Development Lead Coordinator',
    organization: 'TCET Coding Club',
    content: 'Harsh engineered our central hub from the ground up. His mastery of clean React architectures, combined with an eye for exceptional layout and micro-interactions, was striking. He consistently delivers high-fidelity, production-ready systems.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Dr. Priya Sharma',
    role: 'Project Review Chair & Mentor',
    organization: 'Information Technology Dept, TCET',
    content: 'Harsh consistently stands out for his algorithmic execution and engineering discipline. Whether working on complex campus logistics or managing state in React, he writes structured, documentable code.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Rajesh Patil',
    role: 'Lead Hackathon Organizer',
    organization: 'Smart Mumbai Hackathon',
    content: 'Harsh exhibited incredible endurance and technical problem-solving. While engineering "FixMyCampus", his ability to couple reactive dashboards with instant alerts proved critical in winning accolades.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5
  }
];

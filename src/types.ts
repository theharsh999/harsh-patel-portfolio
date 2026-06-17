/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'Full-Stack' | 'Frontend' | 'System';
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Languages';
  proficiency: number; // 0 - 100 for display
  iconName: string;
  subText: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  type: 'Education' | 'Project' | 'Achievement' | 'Extracurricular';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

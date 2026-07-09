export interface Skill {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  year: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  image: string;
  description: string;
  email: string;
  location?: string;
  socials: SocialLink[];
  skills: Skill[];
  projects: Project[];
  education: Education[];
}
